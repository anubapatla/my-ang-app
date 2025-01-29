import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  getDesignations():Observable<Employee[]>{
    return this.http.get<Employee[]>("https://localhost:7267/api/Employees")
  }

  getEmployeeDetails(id:string):Observable<Employee>{
    return this.http.get<Employee>("https://localhost:7267/api/Employees/"+id)
  }
}
