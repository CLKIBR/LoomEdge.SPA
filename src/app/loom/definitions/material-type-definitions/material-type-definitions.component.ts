import { NgTemplateOutlet } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule, AvatarComponent, ButtonModule, CardBodyComponent, CardComponent, CardModule, ColComponent,  FormModule, GridModule, ModalComponent, ModalModule, ProgressBarDirective, ProgressComponent, RowComponent, TableDirective, TableModule, TextColorDirective, ThemeDirective, UtilitiesModule } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import {MalType} from 'src/app/models/mal-type'
import {MalTypeService} from 'src/app/service/mal-type.service'

@Component({
  selector: 'app-material-type-definitions',
  standalone: true,
  templateUrl: './material-type-definitions.component.html',
  styleUrls: ['./material-type-definitions.component.css'],
  imports: [AlertModule,GridModule,FormModule,CardModule,TableModule, 
    UtilitiesModule,AvatarComponent,ProgressComponent,HttpClientModule,
    TextColorDirective,IconDirective, ReactiveFormsModule, ProgressBarDirective, 
    ProgressComponent, TableDirective, AvatarComponent,ModalModule,ModalComponent,
    ThemeDirective,ButtonModule,NgTemplateOutlet ],
  providers:[MalTypeService]
})
export class MaterialTypeDefinitionsComponent implements OnInit {
  public visible = false;
  malTypes: MalType[] = [];

  constructor(private malTypeService: MalTypeService) { }

  ngOnInit() {
    this.malTypeService.getMalType(0, 10).subscribe((response: any) => {
      this.malTypes = response.items; // Servisten dönen items listesini malTypes'e aktarıyoruz
    })
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

}
