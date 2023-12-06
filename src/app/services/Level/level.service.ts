import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';
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

  sendLevelData = new Subject<Level>();
  sendUpdateLevelData = new Subject<Level>();

  public save(level: Level): Observable<Level> {
    return this.http.post<Level>(this.url, level).pipe(
      tap((data: any) => {
        this.sendLevelData.next(data.level);
      })
    );
  }

  public update(level: Level): Observable<Level> {
    const formToUpdate = {
      description: level.description,
      maxPoints: level.maxPoints,
      minPoints: level.minPoints
    };

    return this.http.put(`${this.url}/${level.id}`, formToUpdate).pipe(
      tap((data: any) => {
        this.sendUpdateLevelData.next(data.level);
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  public delete(id: number): Observable<Level> {
    return this.http.delete<Level>(this.url + "/" + id);
  }
}
