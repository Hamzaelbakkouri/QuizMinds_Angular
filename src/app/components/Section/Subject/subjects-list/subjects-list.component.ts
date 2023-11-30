import { Component, OnInit } from '@angular/core';
import { SubjectType } from 'src/app/Models/SubjectType';
import { SubjectServiceService } from 'src/app/services/subject.service/subject.service.service';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {

  constructor(private subjectService: SubjectServiceService) { }

  subjects: SubjectType[] = [];
  isPopupOpen = false;
  isCreatePopupOpen = false;
  deleteMessage = '';
  idToDelete: number = 0;

  // create Subject popup
  openCreatePopup() {
    this.isCreatePopupOpen = true;
  }

  closeCreatePopup() {
    this.isCreatePopupOpen = false;
  }

  receiveData(data: SubjectType) {
    this.subjects.push(data);
    this.isCreatePopupOpen = false;
  }


  // delete Subject popup
  openPopup(id: number) {
    this.isPopupOpen = true;
    this.idToDelete = id;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  confirmDelete() {
    this.deleteSubject(this.idToDelete.toString());
    this.isPopupOpen = false;
  }


  ngOnInit(): void {
    this.subjectService.fetchAllSubjects().subscribe((data: SubjectType[]) => {
      this.subjects = data;
    });
  }



  deleteSubject(id: string) {
    this.subjectService.deleteSubject(id).subscribe((data: string) => {
      this.deleteMessage = data;
      console.log(data);
    });
  }

  updateSubject(subject: SubjectType) {
    this.subjectService.updateSubject(subject);
  }



}
