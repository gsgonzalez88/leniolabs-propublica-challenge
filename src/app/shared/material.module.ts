import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class MaterialModule {}
