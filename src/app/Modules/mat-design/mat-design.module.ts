import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatInputModule, MatButtonModule, MatFormFieldModule
  ]
})
export class MatDesignModule { }
