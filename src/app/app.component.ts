import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private wowService: NgwWowService){
    this.wowService.init();
  }
  ngOnInit() {
    this.loadScript();
  }

public loadScript() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/js/main.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
}


