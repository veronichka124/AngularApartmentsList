import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private favoriteLocationsIds: number[] = [];

  addFavorite(id: number): void {
    this.favoriteLocationsIds.push(id);
  }

  removeFavorite(id: number): void {
    this.favoriteLocationsIds = this.favoriteLocationsIds.filter(
      (locationId) => locationId !== id
    );
  }

  isFavorite(id: number): boolean {
    return this.favoriteLocationsIds.includes(id);
  }

  getFavoriteLocationsIds(): number[] {
    return this.favoriteLocationsIds;
  }
}
