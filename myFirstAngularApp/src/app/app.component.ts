import { Component } from '@angular/core';
import { Hero } from './model/hero';

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
  }
}
