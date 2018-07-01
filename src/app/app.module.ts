import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Bootstrap import
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// loader Import
import { NgxSpinnerModule } from 'ngx-spinner';
import { AllRegionComponent } from './all-region/all-region.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { CountriesService } from './countries.service';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    AllRegionComponent,
    AllCountriesComponent,
    SingleCountryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [CountriesService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
