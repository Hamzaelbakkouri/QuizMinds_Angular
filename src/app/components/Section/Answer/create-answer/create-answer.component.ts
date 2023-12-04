import { AnswerService } from './../../../../services/Answer/answer.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent {
  @Output() closeCreatePopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() dataEvent = new EventEmitter<any>();
  item: any;

  constructor(private AnswerService: AnswerService) { }

  checkisClosed() {
    this.closeCreatePopup.emit(false);
  }

  formData: Answer = {
    id: 0,
    response: ''
  };


  onSubmit() {
    this.createAnswer(this.formData);
  }

  createAnswer(answer: Answer): void {
    this.AnswerService.save(answer).subscribe((data: any) => {
      this.dataEvent.emit(data.response);
    });
  }
}
