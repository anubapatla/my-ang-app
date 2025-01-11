import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
  firstName :string ="angular tutiorals";
  angularVersion ="Verson 18";
  version:number= 18;
  iaActive : boolean = false;
  currentDate : Date = new Date();

}
