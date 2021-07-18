import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  template: `
    <div class="card">
    <div *ngIf="state === 'open'; else results">
      <h1>{{ title }}</h1>
      <booth [options]="options" (vote)="vote($event)"></booth>
    </div>

    <ng-template #results>
      <result [options]="options"></result>
    </ng-template>
    </div>
  `,
  styles: [
    `
    .card {
        background-color: azure;
        padding: 15px;
        border-radius: 10px;
        margin: 15px;
    }
    `
  ]
})
export class CardComponent {
  @Input() options: any[] = []
  @Input() state: string = ''
  @Input() title: string = ''

  vote(index: number) {
    this.options[index].votes++
    this.state = 'closed'
  }
}
