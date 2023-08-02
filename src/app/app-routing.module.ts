import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { ErrorComponent } from './error/error.component';
import { MarineComponent } from './marine/marine.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { PiratesComponent } from './pirates/pirates.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { DetailedNewsComponent } from './news/detailed-news/detailed-news.component';
import { MapComponent } from './map/map.component';
import { ConfirmationModalComponent } from './news/detailed-news/confirmation-modal/confirmation-modal.component';


const routes: Routes = [
  {path: '', component: DisplayComponent},
  {path: 'news', component: NewsComponent},
  {path: 'pirates', component: PiratesComponent},
  {path: 'mariness', component: MarineComponent},
  {path: 'abilities', component: AbilitiesComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'detailed-news', component :DetailedNewsComponent},
  {path: 'map', component: MapComponent},
  {path: 'confirmation-modal', component :ConfirmationModalComponent},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
