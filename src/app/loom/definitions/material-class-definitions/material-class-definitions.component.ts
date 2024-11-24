import { Component } from '@angular/core';
import { GridModule, CardModule } from '@coreui/angular';

@Component({
  selector: 'app-material-class-definitions',
  templateUrl: './material-class-definitions.component.html',
  styleUrl: './material-class-definitions.component.scss',
  standalone: true,
  imports: [GridModule,CardModule ]
})

export class MaterialClassDefinitionsComponent {

}
