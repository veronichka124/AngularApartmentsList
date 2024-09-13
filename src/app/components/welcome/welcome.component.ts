import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PhotoService } from '../../services/photo.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, AsyncPipe, JsonPipe],

  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent implements OnInit {
  private photoService = inject(PhotoService);
  photoData$!: Observable<any>;
  private photoSubject = new BehaviorSubject<any>(null);
  photo$: Observable<any> = this.photoSubject.asObservable();

  constructor() {}

  ngOnInit(): void {
    const savedPhoto = localStorage.getItem('savedPhoto');
    if (savedPhoto) {
      this.photoData$ = of(JSON.parse(savedPhoto));
    } else {
      this.photoData$ = this.photoService.getRandomPhoto({ query: 'house' });
      this.photoData$.subscribe((photo) => {
        localStorage.setItem('savedPhoto', JSON.stringify(photo));
      });
    }
  }
}
