import { CampManagementModule } from './camp-management/camp-management.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'disaster-management',
        loadChildren: () => import('./disaster-management/disaster-management.module').then(m => m.DisasterManagementModule),
      },
      {
        path: 'camp-management',
        loadChildren: () => import('./camp-management/camp-management.module').then(m => m.CampManagementModule),
      },
      {
        path: 'users-management',
        loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule),
      },
      {
        path: 'logistics-management',
        loadChildren: () => import('./logistics-management/logistics-management.module').then(m => m.LogisticsManagementModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
