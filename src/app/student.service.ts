import { Injectable } from '@angular/core';
import { Student } from 'src/app/students/student';
import { STUDENTS } from 'src/app/student-records';

// @Injectable({
//   providedIn: 'root'
// })
// If we use the annotation without a provider, we need to declare this class in the app.module class
// in the @ngModule providers: [StudentService]
@Injectable() 
export class StudentService {

  constructor() { }

  getStudents(): Student[] {
    return STUDENTS;
  }
}
