import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientComponent } from './client.component';
import { AddClientComponent } from './addClient.component';

//определение маршрутов
const appRoutes: Routes =
[
    { path: '', component: AppComponent },
    { path: 'clients', component: ClientComponent },
    { path: 'add', component: AddClientComponent }
];
@NgModule
({
  declarations: 
  [
    AppComponent, ClientComponent, AddClientComponent
  ],
  imports: 
  [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
