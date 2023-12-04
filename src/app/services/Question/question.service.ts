import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Question } from 'src/app/Models/QuestionType';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private url = 'http://localhost:8080/api/question';
  constructor(private http: HttpClient) {
  }
  public findAll(): Observable<any> {
    return this.http.get<any>(`${this.url}?page=0&size=50`);
  }
  public save(question: Question): Observable<Question> {
    return this.http.post<Question>(this.url, question);
  }
  public update(question: Question): Observable<Question> {
    return this.http.put<Question>(this.url + "/" + question.id, question);
  }
  public delete(id: number): Observable<Question> {
    return this.http.delete<Question>(this.url + "/" + id);
  }
}
