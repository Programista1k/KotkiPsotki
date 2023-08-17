import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CatFactResponse } from '../models/fact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getRandomFacts(count: number = 80): Observable<CatFactResponse> {
    return this.http.get<CatFactResponse>('https://meowfacts.herokuapp.com/?count=' + count);
  }
}
