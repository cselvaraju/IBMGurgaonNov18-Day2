import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childData: number;
  @Input() favActor: string

  @Output() childEvent = new EventEmitter();

  favCountry: string;

  constructor() { }

  ngOnInit() {
    this.favCountry = "Sweden";
  }

  touchMeNot() {
    this.childEvent.emit(this.favCountry);
  }

}
