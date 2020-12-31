import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button class="btn btn-primary btn-lg h-100 w-100" *ngIf="!value">
      <div class="display-2">{{ value }}</div>
    </button>
    <button class="btn btn-danger btn-lg h-100 w-100" *ngIf="value == 'X'" disabled>
      <div class="display-2">{{ value }}</div>
    </button>
    <button class="btn btn-warning btn-lg h-100 w-100" *ngIf="value == 'O'" disabled>
      <div class="display-2">{{ value }}</div>
    </button>
  `,
  styles: [],
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
}
