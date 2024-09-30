import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../http.service';
import { IEmployee } from '../../interfaces/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  toastr = inject(ToastrService)

  empId!: number
  isEdit: boolean = false

  ngOnInit() {
    this.empId = this.activedRoute.snapshot.params["id"];
    if (this.empId) {
      this.isEdit = true

      this.httpService.getEmployee(this.empId).subscribe((result) => {

        let employee = {
          name: result.employeeName,
          age: result.employeeAge,
          email: result.employeeEmail,
          phone: result.employeePhone,
          salary: result.employeeSalary
        }

        this.EmployeeForm.patchValue(employee)

      })
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

    let employee: IEmployee = {
      employeeId: this.isEdit ? this.empId : 0,
      employeeName: this.EmployeeForm.value.name!,
      employeeAge: this.EmployeeForm.value.age!,
      employeeEmail: this.EmployeeForm.value.email!,
      employeePhone: this.EmployeeForm.value.phone!,
      employeeSalary: this.EmployeeForm.value.salary!,
    }

    if (this.isEdit) {

      this.httpService.editEmployee(this.empId, employee).subscribe(() => {
        // console.log("Employee Update");

        this.toastr.success("Employee Updated Successfully", "Success")
        this.router.navigateByUrl('/employees')

      })
    } else {

      this.httpService.createEmployee(employee).subscribe(() => {
        // console.log("Employee Added");

        this.toastr.success("Employee Added Successfully", "Success")
        this.router.navigateByUrl('/employees')
  
      })
    }

  }


}
