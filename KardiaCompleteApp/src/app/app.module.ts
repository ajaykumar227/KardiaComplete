import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { ProfileSetupComponent } from './components/profile-setup/profile-setup.component';
import { ShippingInfoComponent } from './components/shipping-info/shipping-info.component';
import { HeadComponent } from './components/head/head.component';
import { FooterComponent } from './components/footer/footer.component';

import { EnrollDataService } from './shared/enroll-data.service';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnrollmentComponent,
    ProfileSetupComponent,
    ShippingInfoComponent,
    HeadComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    EnrollDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
