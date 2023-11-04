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


@NgModule({
  declarations: [
    LogisticsManagementComponent,
    HomeComponent,
    ItemsComponent,
    CategoriesComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    LogisticsManagementRoutingModule,
    NgbModule,
    UtilityModule
  ]
})
export class LogisticsManagementModule { }
