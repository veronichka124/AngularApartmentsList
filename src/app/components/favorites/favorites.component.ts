import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from '../../services/global-state.service';
import { HomeListCard } from '../../types/homeListCard';
import { HomeListCardComponent } from '../home-list/home-list-card/home-list-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [HomeListCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent implements OnInit {
  favoriteLocations: HomeListCard[] = [];

  constructor(private globalStateService: GlobalStateService) {}

  ngOnInit(): void {
    this.globalStateService.favoriteLocations$.subscribe(
      (favorites: HomeListCard[]) => {
        this.favoriteLocations = favorites;
      }
    );
  }
}
