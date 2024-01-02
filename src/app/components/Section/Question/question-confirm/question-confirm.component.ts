import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-confirm',
  templateUrl: './question-confirm.component.html',
  styleUrls: ['./question-confirm.component.css']
})
export class QuestionConfirmComponent {
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deleteEvent = new EventEmitter<boolean>();

  delete() {
    this.deleteEvent.emit(true);
  }

  isClosed() {
    this.closePopup.emit(false);  
  }

}
