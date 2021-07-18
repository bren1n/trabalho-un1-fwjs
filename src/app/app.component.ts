import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options = [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]
  state = 'open'
  title = 'Isso é um projeto Angular?'
}
