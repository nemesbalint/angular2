import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit{
  hero: Hero = new Hero ;
  constructor(
    private ar: ActivatedRoute,
    private hService: HeroService) 
    {
      this.ar.params.subscribe(params => {
        this.hService.getOne(params['id']).forEach( hero => {
          this.hero = hero;
        })
        ;
    });
  }
  ngOnInit(): void {
  }
}
