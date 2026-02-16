import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.html',
  styleUrls: ['./students.css']
})
export class StudentsComponent {

  students = [
    { id: 1, name: 'Ali', grade: 90 },
    { id: 2, name: 'Ahmad', grade: 72 },
    { id: 3, name: 'Sara', grade: 45 }
  ];

  isPassed(grade: number): boolean {
    return grade >= 50;
  }
}
