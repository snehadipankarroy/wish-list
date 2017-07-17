import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Wish } from './wish';
import { WishService } from './wish.service';

@Component({
  selector: 'wish-detail',
  templateUrl: 'wish-detail.component.html',
  styleUrls: ['./wish-detail.component.css']
})

export class WishDetailComponent implements OnInit{
  wish: Wish;

  constructor(
    private wishService: WishService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.wishService.getWish(+params.get('id')))
      .subscribe(wish => this.wish = wish);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.wishService.update(this.wish)
        .then(() => this.goBack());
  }
}
