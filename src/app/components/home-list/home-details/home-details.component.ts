import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { DialogComponent } from '../../ui/dialog/dialog.component';
import { HomeListCard } from '../../../types/homeListCard';
import { HomeListService } from '../../../services/home-list.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home-details',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, TitleCasePipe, RouterLink],
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.css',
})
export class HomeDetailsComponent {
  // route: ActivatedRoute = inject(ActivatedRoute);
  // housingService = inject(HousingService);
  // readonly dialog = inject(MatDialog);
  housingLocation: HomeListCard | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private housingService: HomeListService,
    private router: Router,
    private route: ActivatedRoute,
    readonly dialog: MatDialog
  ) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((location) => {
        this.housingLocation = location;
      })
      .catch((error) => {
        this.router.navigate(['/home-list']);
        console.error(error);
      });
  }

  submitApplication() {
    const { firstName, lastName, email } = this.applyForm.value;
    this.housingService.submitApplication(
      firstName ?? '',
      lastName ?? '',
      email ?? ''
    );
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Application Submitted',
        content: 'Your application has been submitted successfully!',
      },
    });
  }
}
