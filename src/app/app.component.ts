import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ng-switch';
  selectedOption: string = '';

  setSelectedOption(option: string) {
    this.selectedOption = option;
  }
}
