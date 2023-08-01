import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Home1Component } from './display/home1/home1.component';
import { Home2Component } from './display/home2/home2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ModalControlService } from './modal-control.service';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { MarineComponent } from './marine/marine.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginRegisterService } from './loginRegister.service';
import { HowtostartComponent } from './display/home2/howtostart/howtostart.component';
import { HomeSelectorService } from './display/homeSelector.service';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { PiratesComponent } from './pirates/pirates.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import {newsObtainerService } from './news/newsObtainer.service';
import { NewPostModalComponent } from './news/new-post-modal/new-post-modal.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DetailedNewsComponent } from './news/detailed-news/detailed-news.component';



@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ErrorComponent,
    HeaderComponent,
    Home1Component,
    Home2Component,
    LoginModalComponent,
    RegisterModalComponent,
    MarineComponent,
    HowtostartComponent,
    ProfileComponent,
    NewsComponent,
    PiratesComponent,
    AbilitiesComponent,
    NewPostModalComponent,
    DetailedNewsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AngularEditorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ModalControlService,
    LoginRegisterService, 
    HomeSelectorService,
    newsObtainerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
