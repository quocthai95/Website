import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

   constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onBackHome() {
    this.router.navigate(['/home'], {relativeTo: this.route});
  }

}
