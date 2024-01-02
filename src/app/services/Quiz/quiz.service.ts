import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/Models/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) {
  }
  private url = 'http://localhost:8080/api/quiz';
  public findAll(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.url)
  }

  public save(quiz: Quiz): void {
    this.http.post<Quiz>(this.url, quiz)
  }

  public update(quiz: Quiz): void {
    this.http.put<Quiz>(this.url + "/" + quiz.id, quiz)
  }

  public delete(id: number): void {
    this.http.delete<Quiz>(this.url + "/" + id)
  }
  public findById(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(this.url + "/" + id);
  }
}
