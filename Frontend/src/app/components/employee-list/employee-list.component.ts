import { Component } from '@angular/core';
import { HttpService } from '../../http.service';
import { IEmployee } from '../../interfaces/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employeeList : IEmployee[] = []

  constructor(private httpService : HttpService){}

  ngOnInit(){
    this.httpService.getAllEmployees().subscribe((result)=>{
      this.employeeList = result
      console.log(this.employeeList);
      
    })
  }

}
