import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeListCard } from '../../../types/homeListCard';

@Component({
  selector: 'app-home-list-card',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home-list-card.component.html',
  styleUrl: './home-list-card.component.css',
})
export class HomeListCardComponent {
  @Input() housingLocation!: HomeListCard; //non-null assertion operator
}
