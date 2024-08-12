import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { GameCardComponent } from "../game-card/game-card.component";

@Component({
  selector: 'card-carousel',
  standalone: true,
  imports: [GameCardComponent],
  templateUrl: './card-carousel.component.html',
  styleUrl: './card-carousel.component.css'
})
export class CardCarouselComponent {
  @ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef;
  @Input() categorie = '';
  @Input() gameCards = [{title:'', description:'', imgSrc:'', price:0.00, stock:0}];

  scrollLeft() {
    this.carouselContainer.nativeElement.scrollBy({ left: -500, behavior: 'smooth' });
  }

  scrollRight() {
    this.carouselContainer.nativeElement.scrollBy({ left: 500, behavior: 'smooth' });
  }

}
