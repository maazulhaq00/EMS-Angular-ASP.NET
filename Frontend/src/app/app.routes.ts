import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

export const routes: Routes = [
    {
        path: "",
        component: EmployeeListComponent
    },
    {
        path: "employees",
        component: EmployeeListComponent
    },
    {
        path: "add-employee",
        component: AddEmployeeComponent
    }
];
