import { Component } from '@angular/core';
import { DataServiceService } from './services/data-service.service';
import { formConfig } from '../data/form.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  counter: number;
  formConfig = formConfig;
  constructor(private dataService: DataServiceService) {
    this.counter = 0;
  }

  upCounter() {
    this.counter++;
  }
  downCounter() {
    this.counter--;
  }

  getData() {
    this.dataService.getData().subscribe((data) => {
     // this.data = data;
      console.log(data);
    });
  }
}
