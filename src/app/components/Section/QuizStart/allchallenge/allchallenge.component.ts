import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/Models/Quiz';
import { QuizService } from 'src/app/services/Quiz/quiz.service';

@Component({
  selector: 'app-allchallenge',
  templateUrl: './allchallenge.component.html',
  styleUrls: ['./allchallenge.component.css']
})

export class AllchallengeComponent {
  isLast: boolean = false;

  map = [{ id: 1, answer: "alo" }, { id: 2, answer: "heyy" }, { id: 3, answer: "hehh" }, { id: 4, answer: "hehh" }];
  idAnswers: number[] = [];
  QuizIds: number[] = []
  QuizData: Quiz = {}

  constructor(private router: ActivatedRoute, private route: Router, private QuizService: QuizService) { }
  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');

    if (id == null) {
      this.route.navigate([''])
    }
    this.QuizService.findById(parseInt(id!)).subscribe((data: any) => {
      this.QuizData = data
      data.questionOfQuizs.map((data: any) => {
        this.QuizIds.push(data.id)
      })
    })


    this.QuizIds.forEach((item) => {
      console.log(item);
    })
  }

  toggleCheckbox(answer: number) {
    if (!this.idAnswers.includes(answer)) {
      this.idAnswers.push(answer);
    } else {
      this.idAnswers.splice(this.idAnswers.indexOf(answer), 1);
    }
  }
}
