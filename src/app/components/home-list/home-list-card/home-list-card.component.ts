import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeListCard } from '../../../types/homeListCard';
import { GlobalStateService } from '../../../services/global-state.service';

@Component({
  selector: 'app-home-list-card',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home-list-card.component.html',
  styleUrl: './home-list-card.component.css',
})
export class HomeListCardComponent implements OnInit {
  @Input() housingLocation!: HomeListCard; //non-null assertion operator

  isFavorite: boolean = false;

  constructor(private globalStateService: GlobalStateService) {}

  ngOnInit(): void {
    this.isFavorite = this.globalStateService.isFavorite(this.housingLocation);
  }

  toggleFavorite() {
    this.globalStateService.toggleFavorite(this.housingLocation);
    this.isFavorite = this.globalStateService.isFavorite(this.housingLocation);
  }
}
