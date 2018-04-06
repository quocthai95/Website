import { Component, OnInit } from '@angular/core';
import { InItService } from '../../shared/init.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private inItService: InItService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.inItService.setupStuff();
  }

}
