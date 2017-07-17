import { Component, OnInit } from '@angular/core';
import { Wish } from './wish';
import { WishService } from './wish.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})

export class WishesComponent implements OnInit {
  wishes: Wish[];
  selectedWish: Wish;

  constructor(
    private router: Router,
    private wishService: WishService
  ) { }

  getWishes(): void {
    this.wishService.getWishes().then(wishes => this.wishes = wishes);
  }

  ngOnInit(): void {
    this.getWishes();
  }

  onSelect(wish: Wish): void {
    this.selectedWish = wish;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedWish.id]);
  }

  add(text: string): void {
    text = text.trim();
    if (!text) { return; }
    this.wishService.create(text)
        .then(wish => {
          this.wishes.push(wish);
          this.selectedWish = null;
        });
  }

  delete(wish: Wish): void {
    this.wishService
      .delete(wish.id)
      .then(() => {
        this.wishes = this.wishes.filter(w => w !== wish);
        if (this.selectedWish === wish) { this.selectedWish = null; }
      })
  }
}
