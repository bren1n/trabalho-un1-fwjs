import { Component, Input } from '@angular/core';

@Component({
  selector: 'result',
  template: `
    <h1>Resultados</h1>
    <ol>
      <li *ngFor="let option of options">{{ option.name }} - {{ option.votes }} votos ({{ (option.votes / getTotal()) * 100 }}%)</li>
    </ol>
  `,
  styles: [
  ]
})
export class ResultComponent {
  @Input() options: any[] = []
  

  getTotal() {
    if (this.options.length === 0)
      return 1

    return this.options.reduce((x, y) => x + y.votes, 0)
  }

}
