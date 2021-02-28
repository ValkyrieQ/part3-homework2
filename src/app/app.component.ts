import { Component } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationError } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contentTitle = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.contentTitle = event.urlAfterRedirects.replace('/', '');
      }

      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
  clickMenu(target: string) {
    console.log(target);
  }
}
