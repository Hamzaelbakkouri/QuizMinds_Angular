import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubjectType, updateSubjectType } from 'src/app/Models/SubjectType';
import { SubjectServiceService } from 'src/app/services/subject.service/subject.service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {


  @Output() closeUpdatePopup: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() subjectData: SubjectType[] = [];
  @Output() dataEvent = new EventEmitter<any>();

  constructor(private subjectService: SubjectServiceService) { }

  checkisClosed() {
    this.closeUpdatePopup.emit(false);
  }

  formData: updateSubjectType = {
    id : 0,
    name: '',
    top: { id: 0 },
  };


  onSubmit() {
    this.formData.id = parseInt(localStorage.getItem('idUpdate')!);
    this.updateSubject(this.formData);
  }

  updateSubject(subject: updateSubjectType): void {
    this.subjectService.updateSubject(subject).subscribe((data: SubjectType) => {
      this.dataEvent.emit(data);
    });
  }
}
