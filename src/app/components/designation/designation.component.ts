import { Component, OnInit,inject } from '@angular/core';
import { APIResponseModel, Employee, IDesignation } from '../../model/interface/role';
import { MasterService } from '../../services/master.service';


@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss'
})
export class DesignationComponent implements OnInit{
designationList:Employee[] = [];
employee?: Employee;
masterService=inject(MasterService);
ngOnInit(): void {

}
GetData(){
  this.masterService.getDesignations().subscribe({
    next: (data) => {
      this.designationList = data;
    },
    error: (error) => {
        console.log(error)
    },
    complete: () => {
        console.log('complete')
    }
  })

  
}

getEmployee(id:string){
  this.masterService.getEmployeeDetails(id).subscribe({
    next: (data) => {
      this.employee = data;
    },
    error: (error) => {
        console.log(error)
    },
    complete: () => {
        console.log('complete')
    }
  })
}

}
