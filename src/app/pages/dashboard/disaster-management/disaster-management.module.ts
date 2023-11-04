import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisasterManagementRoutingModule } from './disaster-management-routing.module';
import { HomeComponent } from './home/home.component';
import { DisasterManagementComponent } from './disaster-management.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UtilityModule } from 'src/app/components/utility/utility.module';


@NgModule({
  declarations: [
    HomeComponent,
    DisasterManagementComponent
  ],
  imports: [
    CommonModule,
    DisasterManagementRoutingModule,
    NgbModule,
    UtilityModule
  ]
})
export class DisasterManagementModule { }
