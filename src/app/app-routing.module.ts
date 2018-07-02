import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRegionComponent } from './all-region/all-region.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: AllRegionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'all-countries/:region', component: AllCountriesComponent },
  { path: 'all-countries/:code', component: AllCountriesComponent },
  { path: 'country/:name', component: SingleCountryComponent },
  { path: '**', component: AllRegionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
