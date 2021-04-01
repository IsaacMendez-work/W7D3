import { Component, OnInit } from '@angular/core';
import { HeroInterface } from '../hero-interface';
import { HEROES } from '../mock-API';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  
  hero: HeroInterface = {
    id: 1,
    name: 'Change the textbox to change this title!',
  }

  constructor() { }

  ngOnInit(): void {
  }
}