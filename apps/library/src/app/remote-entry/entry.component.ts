import { Component } from '@angular/core';
import { CountService } from '@mf-app/shared/counter';

@Component({
  selector: 'mf-app-library-entry',
  template: `
    <div>
      <h1>Library</h1>
      <p>{{ count }}</p>
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
