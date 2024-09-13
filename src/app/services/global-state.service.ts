import { Injectable } from '@angular/core';
import { HomeListCard } from '../types/homeListCard';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private favoriteLocationsSubject = new BehaviorSubject<HomeListCard[]>([]);
  favoriteLocations$ = this.favoriteLocationsSubject.asObservable();

  addFavorite(location: HomeListCard): void {
    const currentFavorites = this.favoriteLocationsSubject.value;
    this.favoriteLocationsSubject.next([...currentFavorites, location]);
  }

  removeFavorite(location: HomeListCard): void {
    const currentFavorites = this.favoriteLocationsSubject.value;
    this.favoriteLocationsSubject.next(
      currentFavorites.filter((fav) => fav.id !== location.id)
    );
  }

  isFavorite(location: HomeListCard): boolean {
    return this.favoriteLocationsSubject.value.some(
      (fav) => fav.id === location.id
    );
  }

  getFavorites(): HomeListCard[] {
    return this.favoriteLocationsSubject.value;
  }
  getFavoritesIds(): number[] {
    return this.favoriteLocationsSubject.value.map((fav) => fav.id);
  }

  toggleFavorite(housingLocation: HomeListCard): void {
    if (this.isFavorite(housingLocation)) this.removeFavorite(housingLocation);
    else this.addFavorite(housingLocation);
  }
}
