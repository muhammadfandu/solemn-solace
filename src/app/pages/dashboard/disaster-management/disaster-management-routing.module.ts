import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisasterManagementComponent } from './disaster-management.component';
import { HomeComponent } from './home/home.component';
import { DisasterDetailComponent } from './disaster-detail/disaster-detail.component';

const routes: Routes = [
  {
    path: "",
    component: DisasterManagementComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: DisasterDetailComponent
          }
        ]
      },
    ],
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisasterManagementRoutingModule { }
