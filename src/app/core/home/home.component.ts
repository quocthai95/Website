import { Component, OnInit } from '@angular/core';
import { InItService } from '../../shared/init.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private inItService: InItService) {}
  ngOnInit() {
    this.inItService.setupStuff();
  }

}
