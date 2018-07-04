import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Bootstrap import
import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AllRegionComponent } from './all-region/all-region.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { CountriesService } from './countries.service';
import { AboutComponent } from './about/about.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// Toaster
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConvertPipe } from './convert.pipe';
import { PinkToast } from './pink.toast';
import { FormsModule } from '@angular/forms';
// progressbar import
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
@NgModule({
  declarations: [
    AppComponent,
    AllRegionComponent,
    AllCountriesComponent,
    SingleCountryComponent,
    AboutComponent,
    ConvertPipe,
    PinkToast
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgProgressModule.forRoot({
      spinnerPosition: 'right',
      color: '#ed1228',
      thick: true,
      ease: 'easeInQuad'
    }),
    NgProgressHttpModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      toastComponent: PinkToast
    }),
    MDBBootstrapModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  entryComponents: [PinkToast],
  providers: [CountriesService],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
