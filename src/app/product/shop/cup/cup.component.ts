import { Component, OnInit } from '@angular/core';
import { InItService } from '../../../shared/init.service';

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css']
})
export class CupComponent implements OnInit {

  constructor(private inItService: InItService) { }
  ngOnInit() {
    this.inItService.setupStuff();
  }

}
