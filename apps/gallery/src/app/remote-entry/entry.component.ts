import { Component } from '@angular/core';
import { CountService } from '@mf-app/shared/counter';

@Component({
  selector: 'mf-app-gallery-entry',
  template: `
  <div style="padding: 100px">
      <h1>Gallery</h1>
      <p>Count: {{ count }}</p>
      <button type="button" (click)="decrease()">Decrease</button>
      <button type="button" (click)="increase()">Increase</button>
    </div>
  `,
})
export class RemoteEntryComponent {
  count = -1;

  constructor(private countService: CountService) {
    this.count = this.countService.getCount();
  }

  decrease() {
    this.countService.decreaseCount();
    this.count = this.countService.getCount();
  }

  increase() {
    this.countService.increaseCount();
    this.count = this.countService.getCount();
  }
}