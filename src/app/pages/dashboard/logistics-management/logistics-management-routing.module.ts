import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogisticsManagementComponent } from './logistics-management.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: LogisticsManagementComponent,
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
export class LogisticsManagementRoutingModule { }
