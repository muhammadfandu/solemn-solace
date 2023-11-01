import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticsManagementRoutingModule } from './logistics-management-routing.module';
import { LogisticsManagementComponent } from './logistics-management.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    LogisticsManagementComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LogisticsManagementRoutingModule
  ]
})
export class LogisticsManagementModule { }
