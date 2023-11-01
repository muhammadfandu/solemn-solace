import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampManagementRoutingModule } from './camp-management-routing.module';
import { CampManagementComponent } from './camp-management.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    CampManagementComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CampManagementRoutingModule
  ]
})
export class CampManagementModule { }
