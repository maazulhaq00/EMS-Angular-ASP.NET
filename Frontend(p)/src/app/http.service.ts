import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl: string = "https://localhost:7108"

  constructor(private httpClient : HttpClient) { }

  public getAllEmployees() {
    return this.httpClient.get<IEmployee[]>( this.apiUrl + "/api/Employee")
  }

  public createEmployee(employee:IEmployee) {

    return this.httpClient.post(this.apiUrl + "/api/Employee", employee)
  }

  public getEmployee(id : number) {
    return this.httpClient.get<IEmployee>( this.apiUrl+"/api/Employee/"+id)
  }

  public editEmployee(id : number, employee:IEmployee) {

    return this.httpClient.put(this.apiUrl + "/api/Employee/"+id , employee)
  }

  public deleteEmployee(id : number) {
    return this.httpClient.delete(this.apiUrl + "/api/Employee/"+id )
  }

}
