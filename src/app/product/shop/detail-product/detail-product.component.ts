import { Component, OnInit } from '@angular/core';
import { InItService } from '../../../shared/init.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(private inItService: InItService) { }

  ngOnInit() {
    this.inItService.setupStuff();
  }

}
