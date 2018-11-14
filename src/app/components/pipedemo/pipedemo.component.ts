import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  myText: string;
  today: Date;
  obj: object;
  cost: number;

  constructor() { }

  ngOnInit() {
    this.myText = 'Hello world';
    this.today = new Date();
    this.obj = {
      country: 'India',
      capital: 'New Delhi'
    };
    this.cost = 45.6;
  }

}
