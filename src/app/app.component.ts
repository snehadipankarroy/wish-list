import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <img src={{path}} />
    <nav class="navbar navbar-default">
      <ul class="nav navbar-nav">
        <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
        <li><a routerLink="/wishes" routerLinkActive="active">Wishes</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  path = "../assets/images/wishlist-logo.jpg";
}
