import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Wish } from './wish';

@Injectable()
export class WishSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Wish[]> {
    return this.http
                .get(`api/wishes/?text=${term}`)
                .map(response => response.json().data as Wish[]);
  }
}
