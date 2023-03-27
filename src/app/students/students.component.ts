import { Component } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from '../students/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students! : Student[];

  selectedStudentAge!: number;

  onSelect(age: number): void {
    this.selectedStudentAge = age;
  }

  constructor(private studentService: StudentService){} //StudentService is annotated with @Injectable

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    //let service = new StudentService();
    this.students = this.studentService.getStudents();
  }
}
