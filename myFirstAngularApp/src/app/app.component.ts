import { Component } from '@angular/core';
import { Hero } from './model/hero';
import { Observable } from 'rxjs';
import { FootballService } from './service/football.service';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myFirst (awsome) AngularApp';
  
  myHero: Hero = new Hero;
  
  listObservable: Observable<any>;

  constructor(
    private fService: FootballService,
    private hService: HeroService
  ) {

    this.listObservable = this.hService.getAll();

    //Angular async - a beépített async pipe használata miatt kommentelve
    /*
    this.hService.getAll().forEach(value => {
      console.log("All hero: ", value);
    });
    
    this.hService.getOne(1).forEach(value => {
      console.log("First hero: ", value);
    });

    this.hService.add({id: 10, name: "Jack", address: "BP", superpower: "biking"})
      .forEach(value => {
        console.log("Add hero: ", value);
    });

    this.hService.update({id: 1, name: "Lucy", address: "BP", superpower: "biking"})
      .forEach(value => {
        console.log("Update hero: ", value);
    });

    this.hService.remove(2)
      .forEach(value => {
        console.log("Remove hero: ", value);
    });
    */
    
    //Angular CRUD - alapvető adatműveletek (gyakorlat) miatt kommentelve
    /*     
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
 */     
  }  

  setHero(hero : Hero) {
    this.myHero = hero;
  }

}
