import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagePreloadDirective } from 'src/app/directives/image-preload.directive';



@NgModule({
  declarations: [
    TableComponent,
    TablePaginationComponent,
    ImagePreloadDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TableComponent,
    ImagePreloadDirective
  ]
})
export class UtilityModule { }
