import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectType, createSubjectType, updateSubjectType } from 'src/app/Models/SubjectType';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  private BaseUrl = 'http://localhost:8080/api/subject';

  constructor(private http: HttpClient) { }

  createSubject(subject: createSubjectType): Observable<SubjectType> {
    const url = `${this.BaseUrl}`;
    return this.http.post<SubjectType>(url, subject);
  }

  fetchAllSubjects(): Observable<SubjectType[]> {
    const url = `${this.BaseUrl}?page=0&size=50`;
    return this.http.get<SubjectType[]>(url);
  }

  fetchSubject(id: string): Observable<SubjectType> {
    const url = `${this.BaseUrl}/${id}`;
    return this.http.get<SubjectType>(url);
  }

  deleteSubject(id: string): Observable<string> {
    const url = `${this.BaseUrl}/${id}`;
    return this.http.delete<string>(url);
  }

  updateSubject(subject: updateSubjectType): Observable<SubjectType> {
    const formToUpdate = {
      name: subject.name,
      top: subject.top,
    }
    const url = `${this.BaseUrl}/${subject.id}`;
    return this.http.put<SubjectType>(url, formToUpdate);
  }
}
