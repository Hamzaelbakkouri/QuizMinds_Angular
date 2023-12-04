import { AnswerService } from './../../../../services/Answer/answer.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';

@Component({
  selector: 'app-update-answer',
  templateUrl: './update-answer.component.html',
  styleUrls: ['./update-answer.component.css']
})
export class UpdateAnswerComponent {


  @Output() closeUpdatePopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() subjectData: Answer[] = [];
  @Output() dataEvent = new EventEmitter<any>();

  constructor(private answerService: AnswerService) { }

  checkisClosed() {
    this.closeUpdatePopup.emit(false);
  }

  formData: Answer = {
    id : 0,
    response: '',
  };


  onSubmit() {
    this.formData.id = parseInt(localStorage.getItem('idUpdate')!);
    this.updateSubject(this.formData);
  }

  updateSubject(subject: Answer): void {
    this.answerService.update(subject).subscribe((data: any) => {
      console.log(data.response);
      
      this.dataEvent.emit(data.response);
    });
  }
}
