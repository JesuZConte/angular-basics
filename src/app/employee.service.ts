import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employees/employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesUrl = 'https://dummy.restapiexample.com/api/v1/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.employeesUrl);
  }
}


