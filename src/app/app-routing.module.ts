import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {PrjBmwComponent} from './pages/prj-bmw/prj-bmw.component';
import {PrjSoregiesComponent} from './pages/prj-soregies/prj-soregies.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'prj_bmw',
    component: PrjBmwComponent
  },
  {
    path: 'prj_soregies',
    component: PrjSoregiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
