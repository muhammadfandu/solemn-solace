import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminLayoutModule } from 'src/app/layouts/admin-layout/admin-layout.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [DashboardComponent, HomeComponent, ProfileComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule
  ]
})
export class DashboardModule { }
