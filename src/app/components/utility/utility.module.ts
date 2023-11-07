import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagePreloadDirective } from 'src/app/directives/image-preload.directive';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { FileViewerModalComponent } from './file-viewer-modal/file-viewer-modal.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    TableComponent,
    TablePaginationComponent,
    ImagePreloadDirective,
    ConfirmModalComponent,
    FileViewerModalComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TableComponent,
    ImagePreloadDirective,
    ConfirmModalComponent,
    FileViewerModalComponent,
    LoadingIndicatorComponent
  ]
})
export class UtilityModule { }
