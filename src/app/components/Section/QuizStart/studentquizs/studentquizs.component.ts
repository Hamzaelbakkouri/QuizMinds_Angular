import { Quiz } from './../../../../Models/Quiz';
import { AssignsService } from 'src/app/services/Assign/assigns.service';
import { AssignQuiz } from './../../../../Models/Assign';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentquizs',
  templateUrl: './studentquizs.component.html',
  styleUrls: ['./studentquizs.component.css']
})
export class StudentquizsComponent implements OnInit {
  id: number = 3
  assignquiz: AssignQuiz[] = []

  constructor(private AssignService: AssignsService, private router: Router) { }

  ngOnInit(): void {
    this.AssignService.findByStudent(this.id).subscribe((data: any) => {
      this.assignquiz.push(...data)
    });
  }

  EnterQuiz(id: number) {
    this.router.navigate(['/quizstart', { id: id }]);
  }

}
