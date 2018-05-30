<<<<<<< HEAD
import { Component, OnInit,Input } from '@angular/core';
import {Hero} from '../hero';
=======
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
>>>>>>> 67e2780b02c9fc16ccd23ad6ef2d7a287f1f100a

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
<<<<<<< HEAD

@Input() hero:Hero;
=======
  @Input() hero: Hero;

>>>>>>> 67e2780b02c9fc16ccd23ad6ef2d7a287f1f100a
  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> 67e2780b02c9fc16ccd23ad6ef2d7a287f1f100a
