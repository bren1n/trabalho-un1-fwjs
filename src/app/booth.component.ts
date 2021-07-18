import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'booth',
  template: `
    <button class="button" *ngFor="let option of options; index as i" (click)="vote.emit(i)">{{ option.name }}</button>
  `,
  styles: [
    `
    .button {
      margin-right: 10px;
    }
    `
  ]
})
export class BoothComponent {
  @Input() options: any[] = []
  @Output() vote = new EventEmitter()

}
