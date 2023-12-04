import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from 'src/app/Models/Media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private url = 'http://localhost:8080/api/media';

  constructor(private http: HttpClient) {
  }
  public findAll(): Observable<Media> {
    return this.http.get<Media>(this.url);
  }
  public save(media: Media): Observable<Media> {
    return this.http.post<Media>(this.url, media);
  }
  public update(media: Media): Observable<Media> {
    return this.http.put<Media>(this.url + "/" + media.id, media);
  }
  public delete(id: number): Observable<Media> {
    return this.http.delete<Media>(this.url + "/" + id);
  }
  public upload(file: File): Observable<any> {
    const formData = new FormData();
    return this.http.post(this.url, file);
  }
}
