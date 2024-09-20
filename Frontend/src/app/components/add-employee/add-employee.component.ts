import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../http.service';
import { IEmployee } from '../../interfaces/employee';

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
      console.log("Employee Added");
    })
  }


}
