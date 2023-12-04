import { Answer } from 'src/app/Models/Answer';
import { AnswerService } from './../../../../services/Answer/answer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent {

  Answers: Answer[] = [];
  isCreatePopupOpen: boolean = false;
  isPopupOpen: boolean = false;
  idToDelete: number = 0;
  idx: number = 0;
  deleteMessage: string = '';
  isUpdatePopupOpen: boolean = false;
  idxUpdate: number = 0;

  // update Subject popup
  openUpdatePopup(id: number, index: number) {
    this.isUpdatePopupOpen = true;
    localStorage.setItem('idUpdate', id.toString());
    this.idxUpdate = index;
  }

  closeUpdatePopup() {
    this.isUpdatePopupOpen = false;
  }

  // create Subject popup
  closeCreatePopup() {
    this.isCreatePopupOpen = false;
  }

  openCreatePopup() {
    this.isCreatePopupOpen = true;
  }

  // delete Subject popup
  openPopup(id: number, index: number) {
    this.isPopupOpen = true;
    this.idToDelete = id;
    this.idx = index;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  // delete Subject confirm
  confirmDelete() {
    this.deleteAnswer(this.idToDelete.toString(), this.idx);
    this.isPopupOpen = false;
  }

  receiveData(data: Answer) {
    this.Answers.push(data);
    this.isCreatePopupOpen = false;
  }

  receiveUpdateData(data: Answer) {
    this.Answers.push(data);
    this.Answers.splice(this.idxUpdate, 1);
    this.isUpdatePopupOpen = false;
  }

  deleteAnswer(id: string, idx: number) {
    this.AnswerService.delete(id).subscribe((data: any) => {
      this.deleteMessage = data;
    });
    this.Answers.splice(idx, 1);
  }

  constructor(private AnswerService: AnswerService) { }

  ngOnInit(): void {
    this.AnswerService.findAll().subscribe((data: any) => {
      this.Answers = data.content;
    });
  }
}
