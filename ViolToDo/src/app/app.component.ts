import { Component } from '@angular/core';
import {notesdb} from './Notes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleble = 'ViolToDo';
  notes= notesdb;
}
