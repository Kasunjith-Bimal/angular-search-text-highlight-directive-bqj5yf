import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  content = 'Angular highlight text';
  arrayData = [
    { name: 'sss' },
    { name: 'aaa' },
    { name: 'abc' },
    { name: 'fdfdfdf' },
  ];
}
