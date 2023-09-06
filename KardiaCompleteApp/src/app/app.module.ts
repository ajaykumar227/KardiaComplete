import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { ProfileSetupComponent } from './components/profile-setup/profile-setup.component';
import { ShippingInfoComponent } from './components/shipping-info/shipping-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnrollmentComponent,
    ProfileSetupComponent,
    ShippingInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
