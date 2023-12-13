import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SuperPowers } from '../model/hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css'
})
export class AddHeroComponent implements OnInit {

  powers: string[] = SuperPowers.list;

  newHeroGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    superpower: new FormControl('')
  });

  constructor() {
  }

  ngOnInit():void {
  }
}
