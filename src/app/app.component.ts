import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['../assets/styles/sass/base.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works!';
}
