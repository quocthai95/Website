import { Component, OnInit } from '@angular/core';
import { InItService } from '../../shared/init.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private inItService: InItService) { }
  ngOnInit() {
    this.inItService.setupStuff();
  }

}
