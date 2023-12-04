import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from 'src/app/Models/Level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  private url = 'http://localhost:8080/api/level';
  constructor(private http: HttpClient) {
  }
  public findAll(): Observable<Level> {
    return this.http.get<Level>(this.url);
  }
  public save(level: Level): Observable<Level> {
    return this.http.post<Level>(this.url, level);
  }
  public update(level: Level): Observable<Level> {
    return this.http.put<Level>(this.url + "/" + level.id, level);
  }
  public delete(id: number): Observable<Level> {
    return this.http.delete<Level>(this.url + "/" + id);
  }
}
