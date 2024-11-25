import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
    ProgressComponent, TableDirective, AvatarComponent, ModalModule
    , ButtonModule, NgTemplateOutlet, NgFor],
  providers: [MalTypeService]
})
export class MaterialTypeDefinitionsComponent implements OnInit {

  public visible = false;
  malTypes: MalType[] = [];
  selectedMalType?: string | null = null;
  malTypeToDelete?: MalType | null = null;
  isDeleteModalVisible: boolean = false;
  malTypeForm: FormGroup;
  isEditMode = false;

  constructor(private malTypeService: MalTypeService, private formBuilder: FormBuilder) {
    // Formu başlatıyoruz
    this.malTypeForm = this.formBuilder.group({
      id: [''],
      name: [''],
      code: [''],
      amount: [''],
      description: [''],
      url: ['']
    });
  }

  ngOnInit() {
    this.malTypeService.getMalType(0, 10).subscribe((response: any) => {
      this.malTypes = response.items; // Servisten dönen items listesini malTypes'e aktarıyoruz
    })
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
    }
  }

  confirmDelete(): void {
    if (this.malTypeToDelete) {
      this.malTypeService.deleteMalType(this.malTypeToDelete.id!).subscribe(
        () => {
          this.malTypes = this.malTypes.filter(
            (malType) => malType.id !== this.malTypeToDelete?.id
          );
          this.malTypeToDelete = null;
          this.isDeleteModalVisible = false; // Modal'ı kapat
        },
        (error) => console.error('Silme işlemi başarısız oldu', error)
      );
    }
  }

  cancelDelete(): void {
    this.isDeleteModalVisible = false; // Modal'ı kapat
    this.malTypeToDelete = null; // Silme işlemini iptal et
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
