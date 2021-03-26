import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { AbPresentationComponent } from './components/ab-presentation/ab-presentation.component';
import { AbPhotoComponent } from './components/ab-photo/ab-photo.component';
import { AbExperienceComponent } from './components/ab-experience/ab-experience.component';
import { ProjectComponent } from './pages/project/project.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AbLinkComponent } from './components/ab-link/ab-link.component';
import { PrjBmwComponent } from './pages/prj-bmw/prj-bmw.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrjSoregiesComponent } from './pages/prj-soregies/prj-soregies.component';
import { CardsComponent } from './components/cards/cards.component';
import { AbCompetenceComponent } from './components/ab-competence/ab-competence.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AboutComponent,
    AbPresentationComponent,
    AbPhotoComponent,
    AbExperienceComponent,
    ProjectComponent,
    ContactComponent,
    AbLinkComponent,
    PrjBmwComponent,
    FooterComponent,
    PrjSoregiesComponent,
    CardsComponent,
    AbCompetenceComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TextareaAutosizeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
