import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, RoutesRecognized } from '@angular/router';
import path from 'path';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:HomeComponent}
    ])

  ]
})
export class HomeModule { }
