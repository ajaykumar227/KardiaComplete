import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileSetupComponent } from './components/profile-setup/profile-setup.component';
import { ShippingInfoComponent } from './components/shipping-info/shipping-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'profilesetup', component: ProfileSetupComponent },
  { path: 'shipping-info', component: ShippingInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
