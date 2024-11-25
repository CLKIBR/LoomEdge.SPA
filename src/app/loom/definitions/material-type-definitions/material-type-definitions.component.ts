import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule, AvatarComponent, ButtonModule, CardModule,  FormModule, GridModule, ModalModule, ProgressBarDirective, ProgressComponent,  TableDirective, TableModule, TextColorDirective, UtilitiesModule } from '@coreui/angular';
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

  constructor(private malTypeService: MalTypeService) { }

  ngOnInit() {
    this.malTypeService.getMalType(0, 10).subscribe((response: any) => {
      this.malTypes = response.items; // Servisten dönen items listesini malTypes'e aktarıyoruz
    })
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

  // ⚡ Eklenen/Değiştirilen Kodlar ⚡
  cancelDelete(): void {
    this.isDeleteModalVisible = false; // Modal'ı kapat
    this.malTypeToDelete = null; // Silme işlemini iptal et
  }

  trackById(index: number, item: MalType): string {
    // Eğer item.id undefined ise, boş bir string döndür
    return item.id ?? '';
  }

  // material-type-definitions.component.ts dosyasına silme işlemi ekliyoruz
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

}
