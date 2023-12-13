import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SuperPowers } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css'
})
export class AddHeroComponent implements OnInit {
  powers: string[] = SuperPowers.list;

  newHeroGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    address: new FormControl('', [Validators.required, Validators.minLength(8)]),
    superpower: new FormControl('')
  });

  constructor(
    private hService: HeroService
  ) {
    console.log(this.newHeroGroup);
  }

  ngOnInit():void {
  }

  onSubmit(): void {
    //console.log(this.newHeroGroup.value);
    this.hService.add(this.newHeroGroup.value)
    .then(
      () => console.log("Save success"),
      () => console.log("Error in request")
    )  ;    

  }
    
}
