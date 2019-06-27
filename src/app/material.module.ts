import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Se realizan las importaciones de los componentes de Material Design a utilizar.
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class MaterialModule { }
