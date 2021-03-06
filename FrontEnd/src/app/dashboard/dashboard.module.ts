import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModulesModule } from '../shared-data/shared-modules.module';
import { DashboardComponent } from './components/dashboard-view/dashboard.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
const routes: Routes = [
  {
    path: '',
   component: DashboardComponent
  }

];


export class AppRoutingModule { }
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModulesModule,
    InfiniteScrollModule
  ]
})
export class DashboardModule { }
