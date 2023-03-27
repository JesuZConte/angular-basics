import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentAgeComponent } from './student-age/student-age.component';
import { StudentService } from 'src/app/student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentAgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
