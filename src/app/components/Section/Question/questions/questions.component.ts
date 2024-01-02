import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from './../../../../services/Question/question.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Question } from 'src/app/Models/QuestionType';
import { Media } from 'src/app/Models/Media';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  isCreatePopupOpen: boolean = false;
  isUpdatePopupOpen: boolean = false;
  isMediaPopupOpen: boolean = false;
  isPopupOpen: boolean = false;
  idxUpdate: number = 0;
  Questions: Question[] = [];
  idx: number = 0;
  idToDelete: number = 0;
  deleteMessage: string = '';
  sendMediaData: EventEmitter<Media[]> = new EventEmitter<Media[]>();


  constructor(private questionService: QuestionService, private snackBar: MatSnackBar) { }
  // create Subject popup
  openCreatePopup() {
    this.isCreatePopupOpen = true;
  }

  closeCreatePopup() {
    this.isCreatePopupOpen = false;
  }

  // create Media popup
  openMediaPopup(media: Media[]) {
    this.isMediaPopupOpen = true;
    this.sendMediaData.emit(media);
  }

  closeMediaPopup() {
    this.isMediaPopupOpen = false;
  }

  // update Subject popup
  openUpdatePopup(id: number, index: number) {
    this.isUpdatePopupOpen = true;
    localStorage.setItem('idUpdate', id.toString());
    this.idxUpdate = index;
  }

  closeUpdatePopup() {
    this.isUpdatePopupOpen = false;
  }



  receiveData(data: Question) {
    this.Questions.push(data);
    this.isCreatePopupOpen = false;
  }

  receiveMeidaData(data: Media) {
    console.log(data);
    this.isMediaPopupOpen = true;
  }

  receiveUpdateData(data: Question) {
    this.Questions.push(data);
    this.Questions.splice(this.idxUpdate, 1);
    this.isUpdatePopupOpen = false;
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2500,
    });
  }

  confirmDelete() {
    this.deleteSubject(this.idToDelete, this.idx);
    this.isPopupOpen = false;
    this.openSnackBar("Subject deleted successfully", "Close");
  }


  ngOnInit(): void {
    this.questionService.findAll().subscribe((data: any) => {
      this.Questions = data.content;
    });
  }



  deleteSubject(id: number, idx: number) {
    this.questionService.delete(id).subscribe((data: any) => {
      this.deleteMessage = data.message;
    });
    this.Questions.splice(idx, 1);
  }
}
