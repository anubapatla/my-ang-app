import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
  firstName :string ="angular tutiorals";
  angularVersion ="Verson 18";
  version:number = 18;
  iaActive : boolean = false;
  currentDate : Date = new Date();
  inputType:string = "checkbox";

}
