import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameCardComponent } from './game-card/game-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, GameCardComponent, CardCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'play4life';
  data: any = [];
  horrorData: any = [];
  adventureData: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
      console.log(this.data.content);
      console.log('check');
      this.data = this.data.content;
    });
    this.dataService.getHorrorGames().subscribe(response => {
      this.horrorData = response;
      console.log(this.horrorData.content);
      console.log('check');
      this.horrorData = this.horrorData.content;
    });
    this.dataService.getAdventureGames().subscribe(response => {
      this.adventureData = response;
      console.log(this.adventureData.content);
      console.log('check');
      this.adventureData = this.adventureData.content;
    });
  }

  craeateGame() {
    this.dataService.createGame({title: 'Game Title 7', description: 'Game Description 7', imgSrc: 'https://via.placeholder.com/150'})
    .subscribe(response => { console.log(response); });
  }
}
