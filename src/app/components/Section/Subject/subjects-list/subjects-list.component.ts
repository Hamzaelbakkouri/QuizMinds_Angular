import { Component, OnInit, Output } from '@angular/core';
import { SubjectType } from 'src/app/Models/SubjectType';
import { SubjectServiceService } from 'src/app/services/subject.service/subject.service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {

  constructor(private subjectService: SubjectServiceService, private snackBar: MatSnackBar) { }

  subjects: SubjectType[] = [];
  isPopupOpen = false;
  isCreatePopupOpen = false;
  isUpdatePopupOpen = false;
  deleteMessage = '';
  idToDelete: number = 0;
  idx: number = 0;
  idxUpdate: number = 0;


  // create Subject popup
  openCreatePopup() {
    this.isCreatePopupOpen = true;
  }

  closeCreatePopup() {
    this.isCreatePopupOpen = false;
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



  receiveData(data: SubjectType) {
    this.subjects.push(data);
    this.isCreatePopupOpen = false;
  }

  receiveUpdateData(data: SubjectType) {
    this.subjects.push(data);
    this.subjects.splice(this.idxUpdate, 1);
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
      duration: 2000,
    });
  }

  confirmDelete() {
    this.deleteSubject(this.idToDelete.toString(), this.idx);
    this.isPopupOpen = false;
    this.openSnackBar("Subject deleted successfully", 'Undo')
  }


  ngOnInit(): void {
    this.subjectService.fetchAllSubjects().subscribe((data: any) => {
      this.subjects = data.content;
    });
  }



  deleteSubject(id: string, idx: number) {
    this.subjectService.deleteSubject(id).subscribe((data: any) => {
      this.deleteMessage = data.message;
    });
    this.subjects.splice(idx, 1);
  }

}
