import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl : string = "https://localhost:7108"
  
  constructor(private httpClient: HttpClient) { }

  getAllEmployees(){
    return this.httpClient.get<IEmployee[]>(this.apiUrl + "/api/Employee")
  }
}
