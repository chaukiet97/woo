import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chose-app',
  templateUrl: './chose-app.component.html',
  styleUrls: ['./chose-app.component.css']
})
export class ChoseAppComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router,) { }

  ngOnInit(): void {
  }
  goLayoutSendo() {
    this.router.navigate(['layout-sendo']);
  }
}
