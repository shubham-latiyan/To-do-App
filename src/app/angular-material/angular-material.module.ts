import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule, MatButtonModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableDataSource,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatTableDataSource,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class AngularMaterialModule { }
