import { Component } from '@angular/core';
import { Hero } from './model/hero';
import { Observable } from 'rxjs';
import { FootballService } from './service/football.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myFirst (awsome) AngularApp';
  myHero: Hero = {
    name: "Magneto",
    address: "New York",
    superpower: "magnetic"
  };
  
  listObservable: Observable<any>;

  constructor(
    private fService: FootballService
  ) {
    this.listObservable = new Observable( observer => {

      let to = setTimeout( () => {
        observer.next("I am arrived...");
      }, 15000);

      let to2 = setTimeout( () => {
        observer.complete();
      }, 15000);

    });

    this.listObservable.subscribe({
      next: value => console.log(value),
      error: error => console.error(error),
      complete: () => console.log("Complete")
    });
     
  }

}
