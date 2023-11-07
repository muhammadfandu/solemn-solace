import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticsManagementRoutingModule } from './logistics-management-routing.module';
import { LogisticsManagementComponent } from './logistics-management.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemsComponent } from './items/items.component';
import { UtilityModule } from 'src/app/components/utility/utility.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ProductsModalComponent } from './products/products-modal/products-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogisticsManagementComponent,
    HomeComponent,
    ItemsComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductsModalComponent
  ],
  imports: [
    CommonModule,
    LogisticsManagementRoutingModule,
    NgbModule,
    UtilityModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LogisticsManagementModule { }
