import { Component, OnInit } from '@angular/core';
import { InItService } from '../../shared/init.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private inItService: InItService) { }
  ngOnInit() {
    this.inItService.setupStuff();
  }

}
