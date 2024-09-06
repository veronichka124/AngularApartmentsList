import { Component, inject, OnInit } from '@angular/core';
import { HomeListCardComponent } from './home-list-card/home-list-card.component';
import { HomeListService } from '../../services/home-list.service';
import { HomeListCard } from '../../types/homeListCard';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-list',
  standalone: true,
  imports: [HomeListCardComponent, NgFor, FormsModule],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css',
})
export class HomeListComponent implements OnInit {
  housingService: HomeListService = inject(HomeListService);
  housingLocationList: HomeListCard[] = [];
  filteredLocationList: HomeListCard[] = [];
  private _search: string = '';

  // Getter and Setter for search
  get search(): string {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
    this.filterResults(value);
  }

  get totalHomes(): number {
    return this.filteredLocationList.length;
  }

  // constructor is the first function that runs when this component is created
  constructor(private router: Router, private route: ActivatedRoute) {
    this.housingService.getHousingLocations().then((locations) => {
      this.housingLocationList = locations;
      this.filteredLocationList = locations;
      this.route.queryParams.subscribe((params) => {
        const searchTerm = params['search'];
        if (searchTerm) {
          this.search = searchTerm;
          this.filterResults(searchTerm); // Call filterResults with the search term from query params
        }
      });
    });
  }

  ngOnInit() {
    console.log('ngOnInit', this.housingLocationList);
  }

  trackByItems(index: number, item: HomeListCard): number {
    return item.id;
  }

  filterResults(searchTerm: string) {
    console.log(searchTerm);
    // Update the query parameter
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: searchTerm },
      queryParamsHandling: 'merge', // merge with existing query params
    });
    if (!searchTerm) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((location) =>
      location.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
