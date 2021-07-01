import { Component } from '@angular/core';
import {LoginStateService} from "./service/login-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public loginStateService: LoginStateService) {
  }
}
