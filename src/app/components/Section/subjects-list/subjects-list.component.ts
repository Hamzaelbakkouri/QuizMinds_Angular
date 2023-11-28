import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubjectType } from 'src/app/Types/SubjectType';
import { SubjectServiceService } from 'src/app/services/subject.service/subject.service.service';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {

  constructor(private subjectService: SubjectServiceService) { }

  subjects: SubjectType[] = [];

  ngOnInit(): void {
    this.subjectService.fetchAllSubjects();
  }

}
