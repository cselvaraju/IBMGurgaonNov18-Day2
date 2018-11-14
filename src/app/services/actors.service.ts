import { Injectable } from '@angular/core';
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  actors: Actor[];
  tmpActor: Actor;

  constructor() { 
    this.actors = [
      {name: 'Amitabh Bachhan', city: 'Mumbai'},
      {name: 'Kamal Hasan', city: 'Chennai'},
      {name: 'Katrina Kaif', city: 'London'},
      {name: 'Rekha', city: 'Mumbai'},
      {name: 'Rajnikant', city: 'Chennai'}
    ];
    this.tmpActor = null;
  }

  getActors() {
    return this.actors;
  }

  deleteActor(ndx: number) {
    this.actors.splice(ndx, 1);
  }

  setTempActor(ndx: number) {
    this.tmpActor = Object.assign({}, this.actors[ndx]);
  }
  
  resetActor(ndx: number) {
    this.actors.splice(ndx, 1, this.tmpActor);
  }
}
