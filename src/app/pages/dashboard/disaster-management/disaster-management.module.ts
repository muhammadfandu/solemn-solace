import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisasterManagementRoutingModule } from './disaster-management-routing.module';
import { HomeComponent } from './home/home.component';
import { DisasterManagementComponent } from './disaster-management.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UtilityModule } from 'src/app/components/utility/utility.module';
import { DisasterDetailComponent } from './disaster-detail/disaster-detail.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
    HomeComponent,
    DisasterManagementComponent,
    DisasterDetailComponent
  ],
  imports: [
    CommonModule,
    DisasterManagementRoutingModule,
    NgbModule,
    UtilityModule,
    LeafletModule,
  ]
})
export class DisasterManagementModule { }
