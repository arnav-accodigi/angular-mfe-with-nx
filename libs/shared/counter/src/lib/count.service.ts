import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  constructor() {}

  count = 0;

  getCount() {
    return this.count;
  }

  increaseCount() {
    this.count++;
  }

  decreaseCount() {
    this.count--;
  }
}
