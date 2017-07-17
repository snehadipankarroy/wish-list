import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { WishSearchService } from './wish-search.service';
import { Wish } from './wish';

@Component({
  selector: 'wish-search',
  templateUrl: './wish-search.component.html',
  styleUrls: [ './wish-search.component.css' ],
  providers: [WishSearchService]
})
export class WishSearchComponent implements OnInit {
  wishes: Observable<Wish[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private wishSearchService: WishSearchService,
    private router: Router) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.wishes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.wishSearchService.search(term)
        : Observable.of<Wish[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Wish[]>([]);
      });
  }

  gotoDetail(wish: Wish): void {
    let link = ['/detail', wish.id];
    this.router.navigate(link);
  }
}
