import { Component, OnInit } from '@angular/core';
import { InItService } from '../../../shared/init.service';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {

  constructor(private inItService: InItService) { }
  ngOnInit() {
    this.inItService.setupStuff();
  }

}
