import { Component, Input } from '@angular/core';

@Component({
  selector: 'result',
  template: `
    <h1>Resultados</h1>
    <ol>
      <li *ngFor="let option of options">{{ option.name }} - {{ option.votes }} votos ({{ (option.votes / total) * 100 }}%)</li>
    </ol>
  `,
  styles: [
  ]
})
export class ResultComponent {
  @Input() options: any[] = []
  @Input() total: number = 0

}
