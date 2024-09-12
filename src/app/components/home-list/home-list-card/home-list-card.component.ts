import { Component, Input } from '@angular/core';
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
export class HomeListCardComponent {
  @Input() housingLocation!: HomeListCard; //non-null assertion operator

  isFavorite: boolean = false;

  constructor(private globalStateService: GlobalStateService) {}

  ngOnInit(): void {
    this.isFavorite = this.globalStateService.isFavorite(
      this.housingLocation.id
    );
  }

  toggleFavorite() {
    if (this.globalStateService.isFavorite(this.housingLocation.id)) {
      this.globalStateService.removeFavorite(this.housingLocation.id);
    } else {
      this.globalStateService.addFavorite(this.housingLocation.id);
    }
    this.isFavorite = this.globalStateService.isFavorite(
      this.housingLocation.id
    );
  }
}
