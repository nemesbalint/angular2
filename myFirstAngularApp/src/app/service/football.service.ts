import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  jsonUrl: string = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.clubs.json";

  constructor(private http: HttpClient) { 
    this.http.get(this.jsonUrl).subscribe({
      next: () => console.log("football list"),
      error: error => console.error(error),
      complete: () => console.log("complete"),
    });
  }
}
