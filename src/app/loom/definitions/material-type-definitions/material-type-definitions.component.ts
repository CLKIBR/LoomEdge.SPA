import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertModule, AvatarComponent, ButtonModule, CardModule, FormModule, GridModule, ModalModule, ProgressBarDirective, ProgressComponent, TableDirective, TableModule, TextColorDirective, UtilitiesModule } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { MalType } from 'src/app/models/mal-type';
import { MalTypeService } from 'src/app/service/mal-type.service';

@Component({
  selector: 'app-material-type-definitions',
  standalone: true,
  templateUrl: './material-type-definitions.component.html',
  styleUrls: ['./material-type-definitions.component.css'],
  imports: [AlertModule, GridModule, FormModule, CardModule, TableModule,
    UtilitiesModule, AvatarComponent, ProgressComponent, HttpClientModule,
    TextColorDirective, IconDirective, ReactiveFormsModule, ProgressBarDirective,
    ProgressComponent, TableDirective, ModalModule
    , ButtonModule, NgTemplateOutlet, NgFor,NgIf,FormsModule],
  providers: [MalTypeService,NgModel]
})
export class MaterialTypeDefinitionsComponent implements OnInit {

  public visible = false;
  malTypes: MalType[] = [];
  selectedMalType?: string | null = null;
  malTypeToDelete?: MalType | null = null;
  isDeleteModalVisible: boolean = false;
  malTypeForm: FormGroup;
  isEditMode = false;
  submitted = false;

  randomNumber1!: number;
  randomNumber2!: number;
  randomOperator!: string;
  correctAnswer!: number;
  userAnswer: number | null = null;
  isCorrectAnswer = false;

  constructor(private malTypeService: MalTypeService, private formBuilder: FormBuilder) {
    // Formu başlatıyoruz
    this.malTypeForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      code: ['', Validators.required],
      amount: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required]
    });
    this.generateRandomQuestion();
  }

  generateRandomQuestion(): void {
    // Random sayılar
    this.randomNumber1 = Math.floor(Math.random() * 10) + 1;
    this.randomNumber2 = Math.floor(Math.random() * 10) + 1;
  
    const operators = ['+', '-', '*', '/'];
    this.randomOperator = operators[Math.floor(Math.random() * operators.length)];
  
    // Çıkarma işlemi için randomNumber1 her zaman randomNumber2'den büyük olmalı
    if (this.randomOperator === '-') {
      if (this.randomNumber1 <= this.randomNumber2) {
        this.randomNumber1 = this.randomNumber2 + Math.floor(Math.random() * 10) + 1;
      }
    }
  
    // Bölme işlemi için randomNumber1 her zaman randomNumber2'den büyük olmalı ve sonuç tam sayı olmalı
    if (this.randomOperator === '/') {
      let isValidDivision = false;
      while (!isValidDivision) {
        if (this.randomNumber1 <= this.randomNumber2) {
          this.randomNumber1 = this.randomNumber2 + Math.floor(Math.random() * 10) + 1;
        }
        // Bölme işlemi için, tam sayı olması gerektiği kontrolü
        if (this.randomNumber1 % this.randomNumber2 === 0) {
          isValidDivision = true;
        } else {
          this.randomNumber2 = Math.floor(Math.random() * 10) + 1;
        }
      }
    }
  
    // İşlem sonucu hesaplama
    switch (this.randomOperator) {
      case '+':
        this.correctAnswer = this.randomNumber1 + this.randomNumber2;
        break;
      case '-':
        this.correctAnswer = this.randomNumber1 - this.randomNumber2;
        break;
      case '*':
        this.correctAnswer = this.randomNumber1 * this.randomNumber2;
        break;
      case '/':
        this.correctAnswer = this.randomNumber1 / this.randomNumber2;
        break;
    }
  }
  

  checkAnswer(): void {
    if (this.userAnswer !== null) {
      this.isCorrectAnswer = this.userAnswer === this.correctAnswer;
    }
  }

  confirmDelete(): void {
    if (this.isCorrectAnswer && this.malTypeToDelete) {
      this.malTypeService.deleteMalType(this.malTypeToDelete.id!).subscribe(
        () => {
          this.malTypes = this.malTypes.filter(
            (malType) => malType.id !== this.malTypeToDelete?.id
          );
          this.malTypeToDelete = null;
          this.selectedMalType = null;
          this.isDeleteModalVisible = false; // Modal'ı kapat
        },
        (error) => console.error('Silme işlemi başarısız oldu', error)
      );
    } else {
      console.error('Doğru cevabı girmeniz gerekiyor!');
    }
  }

  cancelDelete(): void {
    this.isDeleteModalVisible = false; // Modal'ı kapat
    this.malTypeToDelete = null; // Silme işlemini iptal et
    
  }

  resetModal(): void {
    this.userAnswer = null;
    this.isCorrectAnswer = false;
    this.generateRandomQuestion();
  }

  ngOnInit() {
    this.malTypeService.getMalType(0, 10).subscribe((response: any) => {
      this.malTypes = response.items; // Servisten dönen items listesini malTypes'e aktarıyoruz
    })
  }

  onSubmit() {
    this.submitted = true;  // ⚡ Eklenen/Değiştirilen Kodlar ⚡

    if (this.malTypeForm.invalid) {
      return;  // Hatalı form ise işlem yapma
    }

    // Form verilerini işleme
    console.log(this.malTypeForm.value);
  }

  editMalType(): void {
    if (this.selectedMalType) {
      this.malTypeService.getMalTypeById(this.selectedMalType).subscribe((response: MalType) => {
        // API'den gelen veriyi forma aktarıyoruz
        this.malTypeForm.patchValue({
          id: response.id,
          name: response.name,
          code: response.code,
          amount: response.amount,
          description: response.description,
          url: response.url
        });
        this.isEditMode = true; // Düzenleme modunu aktif ediyoruz
      });
    }
  }

  saveChanges(): void {
    if (this.malTypeForm.valid) {
      // Formun değerlerini JSON string formatında alıyoruz
      const updatedMalTypeJson: string = JSON.stringify(this.malTypeForm.value);

      this.malTypeService.updateMalType(this.selectedMalType!, updatedMalTypeJson).subscribe((response) => {
        console.log('Güncelleme başarılı:', response);
        // Güncellenen malzeme tipini listeye yansıtıyoruz
        this.malTypes = this.malTypes.map((malType) =>
          malType.id === this.selectedMalType ? { ...malType, ...this.malTypeForm.value } : malType
        );
        this.isEditMode = false; // Düzenleme modunu kapatıyoruz
        this.malTypeForm.reset();
      });
    }
  }


  selectMalType(malType: MalType): void {
    this.selectedMalType = this.selectedMalType === malType.id ? null : malType.id;
    console.log('Seçilen Malzeme Tipi ID:', this.selectedMalType);
    console.log('Tıklanan Malzeme Tipi ID:', malType.id);
  }

  deleteConfirmation(selectedId: string | null): void {
    if (selectedId) {
      this.malTypeToDelete =
        this.malTypes.find((malType) => malType.id === selectedId) || null;
      this.isDeleteModalVisible = true; // Modal'ı aç
      this.resetModal(); // Modal sıfırlama

    }
  }

  trackById(index: number, item: MalType): string {
    // Eğer item.id undefined ise, boş bir string döndür
    return item.id ?? '';
  }

  deleteSelectedMalType(): void {
    if (this.selectedMalType) {
      this.malTypeService.deleteMalType(this.selectedMalType).subscribe(
        (response) => {
          // Silme işlemi başarılı olursa
          console.log('Silme başarılı', response);
          // Seçilen öğeyi listeden kaldırıyoruz
          this.malTypes = this.malTypes.filter(malType => malType.id !== this.selectedMalType);
          this.selectedMalType = null; // Seçilen öğeyi null yapıyoruz
        },
        (error) => {
          // Hata durumunda kullanıcıyı bilgilendiriyoruz
          console.error('Silme işlemi başarısız oldu', error);
        }
      );
    } else {
      console.log('Silinecek malzeme tipi seçilmedi.');
    }
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  openAddMalTypeModal(): void {
    this.isEditMode = false; // Düzenleme modu değil
    this.malTypeForm.reset(); // Formu sıfırlıyoruz

  }

  toggleNewMalTypeModal() {
    this.visible = !this.visible;  // Modal'ın görünürlüğünü değiştiriyoruz
    this.malTypeForm.reset();
  }

  saveNewMalType(): void {
    if (this.malTypeForm.valid) {
      const newMalType = this.malTypeForm.value; // Formdaki veriyi alıyoruz

      this.malTypeService.addMalType(newMalType).subscribe(
        (response) => {
          console.log('Yeni Malzeme Tipi Eklendi:', response);
          this.malTypes.push(response); // Listeye ekliyoruz
          this.visible = false; // Modal'ı kapatıyoruz
          this.malTypeForm.reset(); // Formu sıfırlıyoruz
        },
        (error) => {
          console.error('Yeni Malzeme Tipi eklenirken hata oluştu:', error);
        }
      );
    } else {
      console.log('Form geçersiz!');
    }
  }

}
