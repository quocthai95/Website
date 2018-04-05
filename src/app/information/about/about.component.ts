import { Component, OnInit } from '@angular/core';
import { InItService } from '../../shared/init.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private inItService: InItService) { }
  ngOnInit() {
    this.inItService.setupStuff();
  }
}
