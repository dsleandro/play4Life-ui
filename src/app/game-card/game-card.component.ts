import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
  @Input() cardTitle = '';
  @Input() cardDesc = '';
  @Input() cardImg = '';
  @Input() cardPrice = 0.00;
  @Input() cardStock = 0;
}
