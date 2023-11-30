import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectType, createSubjectType } from 'src/app/Models/SubjectType';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  private BaseUrl = 'http://localhost:8080/api/subject';

  constructor(private http: HttpClient) { }

  createSubject(subject: createSubjectType): Observable<SubjectType> {
    const url = `${this.BaseUrl}/insert`;
    return this.http.post<SubjectType>(url, subject);
  }

  fetchAllSubjects(): Observable<SubjectType[]> {
    const url = `${this.BaseUrl}/getall`;
    return this.http.get<SubjectType[]>(url);
  }

  deleteSubject(id: string): Observable<string> {
    const url = `${this.BaseUrl}/delete/${id}`;
    return this.http.delete<string>(url);
  }

  updateSubject(subject: SubjectType): Observable<SubjectType[]> {
    const url = `${this.BaseUrl}/update`;
    return this.http.put(url, subject).pipe(
      switchMap(() => this.fetchAllSubjects()),
    );
  }
}
