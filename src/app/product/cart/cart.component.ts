import { Component, OnInit } from '@angular/core';
import { InItService } from '../../shared/init.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private inItService: InItService) { }

  ngOnInit() {
    this.inItService.setupStuff();
  }

}
