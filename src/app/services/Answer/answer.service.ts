import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from 'src/app/Models/Answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private url = 'http://localhost:8080/api/response';
  constructor(private http: HttpClient) {
  }
  public findAll(): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.url}?page=0&size=50`);
  }
  public save(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(this.url, answer);
  }
  public update(response: Answer): Observable<Answer> {
    return this.http.put<Answer>(`${this.url}/${response.id}`, response);
  }
  public delete(id: string): Observable<Answer> {
    return this.http.delete<Answer>(`${this.url}/${id}`);
  }
}
