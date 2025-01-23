import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit {


  roleList:IRole[] = [];
  http = inject(HttpClient);


  ngOnInit(): void {
    this.getAllRoles()
  }

  getAllRoles(){
    this.http.get('https://fake-json-api.mock.beeceptor.com/users').subscribe((r:any)=>{
      this.roleList = r;
    })
  }
  
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // firstName :string ="angular tutiorals";
  //angularVersion ="Verson 18";
  //version:number = 18;
  //iaActive : boolean = false;
 // currentDate : Date = new Date();
  //inputType:string = "checkbox";
  //selectedState :string ="";
  //showWelcomeAlert(){
    //alert("welcome angular tutiorals")
  //}
  //showMessage(message: string){
    //alert(message)
  //}
//}
