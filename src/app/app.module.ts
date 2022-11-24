import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';
import { EmployeeAdminLoginComponent } from './employee-admin-login/employee-admin-login.component';

const myRouter: Routes=[
  {
    path: "add",
    component:EmployeeEntryComponent
  },
  {
    path: "",
    component:EmployeeAdminLoginComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeEntryComponent,
    EmployeeAdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
