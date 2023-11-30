import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Question } from 'src/app/Models/QuestionType';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private BaseUrl = 'http://localhost:8080/api/question';

  constructor(private http: HttpClient) { }

  createSubject(subject: Question): Observable<Question> {
    const url = `${this.BaseUrl}/insert`;
    return this.http.post<Question>(url, subject);
  }

  fetchAllSubjects(): Observable<Question[]> {
    const url = `${this.BaseUrl}/getall`;
    return this.http.get<Question[]>(url);
  }

  deleteSubject(id: string): Observable<string> {
    const url = `${this.BaseUrl}/delete/${id}`;
    return this.http.delete<string>(url);
  }

  updateSubject(subject: Question): Observable<Question[]> {
    const url = `${this.BaseUrl}/update`;
    return this.http.put<Question[]>(url, subject);
  }
}
