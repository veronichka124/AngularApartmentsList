import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

interface DialogData {
  title: string;
  content: string;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  data: DialogData = inject(MAT_DIALOG_DATA);
  title: string = this.data.title;
  content: string = this.data.content;
}
