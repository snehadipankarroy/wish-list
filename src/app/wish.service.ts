import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Wish } from './wish';

@Injectable()

export class WishService {
  private wishesUrl = 'api/wishes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getWishes(): Promise<Wish[]> {
    return this.http.get(this.wishesUrl)
                .toPromise()
                .then(response => response.json().data as Wish[])
                .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getWish(id: number): Promise<Wish> {
    const url = `${this.wishesUrl}/${id}`;
    return this.http.get(url)
                .toPromise()
                .then(response => response.json().data as Wish)
                .catch(this.handleError);
  }

  update(wish: Wish): Promise<Wish> {
    const url = `${this.wishesUrl}/${wish.id}`;
    return this.http
      .put(url, JSON.stringify(wish), {headers: this.headers})
      .toPromise()
      .then(() => wish)
      .catch(this.handleError);
  }

  create(text: string): Promise<Wish> {
    return this.http
      .post(this.wishesUrl, JSON.stringify({text: text}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Wish)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.wishesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // getWishesSlowly(): Promise<Wish[]> {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(this.getWishes()), 8000);
  //   });
  // }
}
