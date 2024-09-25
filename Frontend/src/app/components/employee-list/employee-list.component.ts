import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';
import { IEmployee } from '../../interfaces/employee';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  router = inject(Router)

  ngOnInit(){
    this.getEmployees()
  }

  getEmployees(){
    this.httpService.getAllEmployees().subscribe((result)=>{
      this.employeeList = result
      console.log(this.employeeList);
      
    })
  }

  edit(id: number){
    console.log("Edit: " + id);
    this.router.navigateByUrl("/edit-employee/"+id)
  }
  delete(id: number){
    console.log("Delete: " + id);
    this.httpService.deleteEmployee(id).subscribe(()=>{
      console.log("Deleted");
      // this.employeeList = this.employeeList.filter(emp => emp.employeeId != id);

      this.getEmployees()
    })
  }

}
