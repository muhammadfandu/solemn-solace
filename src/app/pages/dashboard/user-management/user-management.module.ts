import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserModalComponent } from './user/user-modal/user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UtilityModule } from 'src/app/components/utility/utility.module';


@NgModule({
  declarations: [
    UserManagementComponent,
    HomeComponent,
    UserComponent,
    UserModalComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    NgbModule,
    UtilityModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserManagementModule { }
