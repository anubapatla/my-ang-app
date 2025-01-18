import { Component } from '@angular/core';
import { DesignationComponent } from '../components/designation/designation.component';
import { RolesComponent } from '../components/roles/roles.component';

@Component({
  selector: 'app-master',
  imports: [DesignationComponent,RolesComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {
currentComponent:string ="";
}
