import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-level-confirm',
  templateUrl: './level-confirm.component.html',
  styleUrls: ['./level-confirm.component.css']
})
export class LevelConfirmComponent {
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deleteEvent = new EventEmitter<boolean>();

  delete() {
    this.deleteEvent.emit(true);
  }

  isClosed() {
    this.closePopup.emit(false);
  }
}
