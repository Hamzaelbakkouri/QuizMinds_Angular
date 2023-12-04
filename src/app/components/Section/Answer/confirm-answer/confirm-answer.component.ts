import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-answer',
  templateUrl: './confirm-answer.component.html',
  styleUrls: ['./confirm-answer.component.css']
})
export class ConfirmAnswerComponent {
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deleteEvent = new EventEmitter<boolean>();

  delete() {
    this.deleteEvent.emit(true);
  }

  isClosed() {
    this.closePopup.emit(false);
  }

}
