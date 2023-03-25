import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListVehiclesComponent } from './vehicles/list-vehicles/list-vehicles.component';
import { CreateVehiclesComponent } from './vehicles/create-vehicles/create-vehicles.component';
import { EditVehiclesComponent } from './vehicles/edit-vehicles/edit-vehicles.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';// *********** HttpServer***********
import { Routes,RouterModule} from '@angular/router';
import { FormComponent } from './vehicles/form/form.component';// *********const routes:Routes**************** 
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { LoginPageComponent } from './home/login-page/login-page.component';
import { SignupPageComponent } from './home/signup-page/signup-page.component';
import { AboutUsPageComponent } from './home/about-us-page/about-us-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Background1Component } from './home/background1/background1.component';
import { BottomPageComponent } from './home/bottom-page/bottom-page.component';


const routes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"vehicles",component:ListVehiclesComponent},
  {path:'vehicles/create',component:CreateVehiclesComponent},
  {path:'vehicles/edit/:id',component:EditVehiclesComponent},
  {path:"home/signup",component:SignupPageComponent},
  {path:"home/login",component:LoginPageComponent},
  {path:"home/aboutus",component:AboutUsPageComponent},
  {path:"**",redirectTo:"home"}

]

@NgModule({
  declarations: [
    AppComponent,
    ListVehiclesComponent,
    CreateVehiclesComponent,
    EditVehiclesComponent,
    HomeComponent,
    FormComponent,
    LoginPageComponent,
    SignupPageComponent,
    AboutUsPageComponent,
    Background1Component,
    BottomPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),// **************Import******************
    HttpClientModule,  //*******************Import***********/
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
