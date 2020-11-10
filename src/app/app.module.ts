import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { AbPresentationComponent } from './components/ab-presentation/ab-presentation.component';
import { AbPhotoComponent } from './components/ab-photo/ab-photo.component';
import { AbExperienceComponent } from './components/ab-experience/ab-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AboutComponent,
    AbPresentationComponent,
    AbPhotoComponent,
    AbExperienceComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
