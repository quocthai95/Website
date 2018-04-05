import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Router, NavigationEnd } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isPopState = false;

  constructor(private router: Router, private locStra: LocationStrategy, private wowService: NgwWowService) {
    this.wowService.init();
  }
  ngOnInit() {
    this.locStra.onPopState(() => {
      this.isPopState = true;
    });

    this.router.events.subscribe(event => {
      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd && !this.isPopState) {
        window.scrollTo(0, 0);
        this.isPopState = false;
      }
      if (event instanceof NavigationEnd) {
        this.isPopState = false;
      }
    });
  }
}


