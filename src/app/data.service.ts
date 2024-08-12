import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('http://localhost:8080/games/all');
  }

  getHorrorGames(): Observable<any> {
    return this.http.get('http://localhost:8080/games/genre/Horror/all');
  }

  getAdventureGames(): Observable<any> {
    return this.http.get('http://localhost:8080/games/genre/Adventure/all');
  }



  createGame(game: any): Observable<any> {
    return this.http.post('http://localhost:8080/games/new', game);
  }
}
