import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PhotoService } from '../../services/photo.service';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, AsyncPipe, JsonPipe],

  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  private photoService = inject(PhotoService);
  photoData$!: Observable<any>;

  constructor() {
    this.photoData$ = this.photoService.getRandomPhoto({ query: 'house' });
  }
}
