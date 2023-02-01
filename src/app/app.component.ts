import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Steve';
  userData = {
    email: 'steve.jobs@email.com',
    role: 'Admin',
  }
  title = 'angular-learning';
}
