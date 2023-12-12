import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  heroList: Observable<Hero[]>;

  constructor(
    private hService :HeroService,
    private router: Router) {
    this.heroList = this.hService.getAll();
  }

  ngOnInit() {

  }

  jumpToHero(hero: Hero): void {
    this.router.navigateByUrl(`/hero/${hero.id}`);
  }

}
