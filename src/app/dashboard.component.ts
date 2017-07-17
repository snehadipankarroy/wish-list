import { Component,OnInit } from '@angular/core';

import { Wish }  from "./wish";
import {WishService } from "./wish.service";

@Component({
  selector: 'my-dashboard',
  templateUrl:'./dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  wishes: Wish[] = [];

  constructor(private wishService: WishService) { }

  ngOnInit(): void {
    this.wishService.getWishes()
      .then(wishes => this.wishes = wishes.slice(1, 5));
  }
}
