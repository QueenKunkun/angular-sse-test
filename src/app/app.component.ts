import { Component } from '@angular/core';
import { SseClient } from "angular-sse-client";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-sse-test';
  constructor(public sseClient: SseClient) {

  }
}
