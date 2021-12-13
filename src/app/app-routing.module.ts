import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {PrjBmwComponent} from './pages/prj-bmw/prj-bmw.component';
import {PrjSoregiesComponent} from './pages/prj-soregies/prj-soregies.component';
import {AbCompetenceTechnoAngularComponent} from "./pages/ab-competence-techno-angular/ab-competence-techno-angular.component";
import {AbCompetenceTechnoAdobeComponent} from "./pages/ab-competence-techno-adobe/ab-competence-techno-adobe.component";
import {AbCompetenceTechnoNodejsComponent} from "./pages/ab-competence-techno-nodejs/ab-competence-techno-nodejs.component";
import {PrjScoutComponent} from "./pages/prj-scout/prj-scout.component";
import {AbCompetenceTechnoAwsComponent} from "./pages/ab-competence-techno-aws/ab-competence-techno-aws.component";

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
  },
  {
    path: 'prj_scout',
    component: PrjScoutComponent
  },
  {
    path: 'article_angular',
    component: AbCompetenceTechnoAngularComponent
  },
  {
    path: 'article_adobe',
    component: AbCompetenceTechnoAdobeComponent
  },
  {
    path: 'article_nodejs',
    component: AbCompetenceTechnoNodejsComponent
  },
  {
    path: 'article_aws',
    component: AbCompetenceTechnoAwsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
