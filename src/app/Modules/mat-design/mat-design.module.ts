import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatInputModule, MatButtonModule, MatFormFieldModule,
    MatSnackBarModule
  ]
})
export class MatDesignModule { }
