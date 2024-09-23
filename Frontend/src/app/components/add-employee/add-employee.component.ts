import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../http.service';
import { IEmployee } from '../../interfaces/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  
  formBuilder = inject(FormBuilder)
  httpService = inject(HttpService)
  router = inject(Router)
  
  activedRoute = inject(ActivatedRoute)

  empId!:number
  isEdit: boolean = false

  ngOnInit(){
    this.empId = this.activedRoute.snapshot.params["id"];
    if(this.empId){
      this.isEdit = true
    }
  }

  EmployeeForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    age: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    salary: ['', [Validators.required]]
  });

  handleEmployeeSubmit() {
    
    console.log(this.EmployeeForm.value);

    let employee : IEmployee = {
      employeeId: 0,
      employeeName: this.EmployeeForm.value.name!,
      employeeAge: this.EmployeeForm.value.age!,
      employeeEmail: this.EmployeeForm.value.email!,
      employeePhone: this.EmployeeForm.value.phone!,
      employeeSalary: this.EmployeeForm.value.salary!,
    }

    this.httpService.createEmployee(employee).subscribe(()=>{
      // console.log("Employee Added");

      this.router.navigateByUrl('/employees')

    })
  }


}
