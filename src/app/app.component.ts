import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter: number;
  constructor() {
    this.counter = 0;
  }

  upCounter() {
    this.counter++;
  }
  downCounter() {
    this.counter--;
  }
}
