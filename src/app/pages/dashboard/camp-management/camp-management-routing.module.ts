import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampManagementComponent } from './camp-management.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: CampManagementComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampManagementRoutingModule { }
