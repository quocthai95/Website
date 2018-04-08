import { Component, OnInit } from '@angular/core';
import { InItService } from '../../../shared/init.service';

@Component({
  selector: 'app-bowl',
  templateUrl: './bowl.component.html',
  styleUrls: ['./bowl.component.css']
})
export class BowlComponent implements OnInit {

  constructor(private inItService: InItService) { }
  ngOnInit() {
    this.inItService.setupStuff();
  }

}
