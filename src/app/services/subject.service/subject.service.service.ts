import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectType } from 'src/app/Types/SubjectType';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  private BaseUrl = 'http://localhost:8080/api/subject';

  constructor(private http: HttpClient) { }

  createSubject(subject: SubjectType) {
    const url = `${this.BaseUrl}/insert`;
    this.http.post<SubjectType>(url, subject).subscribe(data => {
      console.log(data);
    });
  }

  fetchAllSubjects(): any {
    const url = `${this.BaseUrl}/getall`;
    this.http.get<any>(url).subscribe(data => {
      return data;
      console.log(data);
      
    })
  }

  deleteSubject() {
  }

  updateSubject() {
  }
}
