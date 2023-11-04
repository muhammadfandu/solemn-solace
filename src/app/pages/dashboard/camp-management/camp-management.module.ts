import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampManagementRoutingModule } from './camp-management-routing.module';
import { CampManagementComponent } from './camp-management.component';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CampManagementComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CampManagementRoutingModule,
    NgbModule,
    MatTabsModule
  ]
})
export class CampManagementModule { }
