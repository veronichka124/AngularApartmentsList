import { Injectable } from '@angular/core';
import { HomeListCard } from '../types/homeListCard';

@Injectable({
  providedIn: 'root',
})
export class HomeListService {
  url = 'http://localhost:3000/locations';

  async getHousingLocations(): Promise<HomeListCard[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HomeListCard | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  //Form
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
