import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentData: number;
  parent2childData: number;
  favCountry: string;

  constructor() { }

  ngOnInit() {
    this.parentData = 55;
    this.parent2childData = 99;
    this.favCountry = '';
  }

  handleEvent(event) {
    alert("OUCH!! That hurt!");
    this.favCountry = event;
  }

}
