import { Component } from '@angular/core';
import { CountService } from '@mf-app/shared/counter';

@Component({
  selector: 'mf-app-gallery-entry',
  template: `
    <div>
      <h1>Gallery</h1>
      <p>{{ count }}</p>
    </div>
  `,
})
export class RemoteEntryComponent {
  count = -1;

  constructor(private countService: CountService) {
    this.count = this.countService.getCount();
  }
}
