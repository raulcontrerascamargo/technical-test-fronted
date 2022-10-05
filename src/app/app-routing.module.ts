import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { FavPageComponent } from './pages/fav-page/fav-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: EmployeesPageComponent,
  },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'selected', component: FavPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
