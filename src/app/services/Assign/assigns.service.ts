import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssignQuiz } from 'src/app/Models/Assign';

@Injectable({
  providedIn: 'root'
})
export class AssignsService {

  private url = 'http://localhost:8080/api/assignquiz';
  constructor(private http: HttpClient) {
  }
  public findAll(): Observable<AssignQuiz> {
    return this.http.get<AssignQuiz>(this.url);
  }
  public findByStudent(id: number): Observable<AssignQuiz> {
    return this.http.get<AssignQuiz>(`${this.url}/student/${id}`);
  }
  public save(assignQuiz: AssignQuiz): Observable<AssignQuiz> {
    return this.http.post<AssignQuiz>(this.url, assignQuiz);
  }
  public update(assignQuiz: AssignQuiz): Observable<AssignQuiz> {
    return this.http.put<AssignQuiz>(this.url + "/" + assignQuiz.id, assignQuiz);
  }
  public delete(id: number): Observable<AssignQuiz> {
    return this.http.delete<AssignQuiz>(this.url + "/" + id);
  }
}
