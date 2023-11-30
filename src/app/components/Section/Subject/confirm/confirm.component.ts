import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deleteEvent = new EventEmitter<boolean>();

  delete() {
    this.deleteEvent.emit(true);
  }

  isClosed() {
    this.closePopup.emit(false);
  }


}
