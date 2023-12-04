import { SubjectServiceService } from 'src/app/services/subject.service/subject.service.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { SubjectType, createSubjectType } from 'src/app/Models/SubjectType';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  @Output() closeCreatePopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() subjectData: SubjectType[] = [];
  @Output() dataEvent = new EventEmitter<any>();
item: any;

  constructor(private subjectService: SubjectServiceService) { }

  checkisClosed() {
    this.closeCreatePopup.emit(false);
  }

  formData: createSubjectType = {
    name: '',
    top: null,	
  };


  onSubmit() {
    this.createSubject(this.formData);
  }

  createSubject(subject: any): void {
    this.subjectService.createSubject(subject).subscribe((data: any) => {
      this.dataEvent.emit(data.subject);
    });
  }

  

}
