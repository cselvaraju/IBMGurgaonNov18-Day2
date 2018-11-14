import { Component, OnInit } from '@angular/core';
import { Actor } from '../../models/actor';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

import { ActorsService } from '../../services/actors.service';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: [
    './actorlist.component.css',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '../../../../node_modules/font-awesome/css/font-awesome.min.css'
  ]
})
export class ActorlistComponent implements OnInit {

  actors: Actor[];
  showFlag: boolean;
  btnText: string;
  selectedIndex: number;
  

  constructor(private actorsService: ActorsService) { }

  ngOnInit() {
    this.actors = this.actorsService.getActors();
    this.showFlag = true;
    this.btnText = 'Show List';
    this.selectedIndex = -1;
  }

  toggleList() {
    this.showFlag = !this.showFlag;
    this.btnText = (this.showFlag) ? 'Hide List' : 'Show List';
  }

  deleteActor(ndx: number) {
    this.actorsService.deleteActor(ndx);
  }

  editActor(ndx: number) {
    //this.tmpActor = this.actors[ndx]; //SHALLOW COPY!!!

    //DEEP COPY
    //Approach - 1
    // this.tmpActor = {
    //   name: this.actors[ndx].name,
    //   city: this.actors[ndx].city
    // };

    //Approach - 2 (RECOMMENDED APPROACH)
    //this.tmpActor = Object.assign({}, this.actors[ndx]);

    this.actorsService.setTempActor(ndx);
    this.selectedIndex = ndx;
  }

  cancelEdit(ndx: number) {
    this.actorsService.resetActor(ndx);
    this.selectedIndex = -1;
  }

  saveActor(ndx: number) {
    this.selectedIndex = -1;
  }

  keyUp(event, n) {
    //console.log(event);
    if (event.key === 'Escape') {
      this.cancelEdit(n);
    }
  }
}
