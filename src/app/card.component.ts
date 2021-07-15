import { Component, ɵresetJitOptions } from '@angular/core';

@Component({
  selector: 'card',
  template: `
    <div class="card">
    <div *ngIf="state === 'open'; else results">
      <booth [title]="title" [options]="options" (vote)="vote($event)"></booth>
    </div>

    <ng-template #results>
      <result [options]="options" [total]="total"></result>
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
  options = [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]
  state = 'open'
  title = 'Isso é um projeto Angular?'
  total = this.options.reduce((x, y) => x + y.votes, 0)

  vote(index: number) {
    this.options[index].votes++
    this.state = 'closed'
    this.total++
  }
}
