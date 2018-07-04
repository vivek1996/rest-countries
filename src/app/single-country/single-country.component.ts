import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../countries.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CountryInterface } from '../country.interface';
@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.scss'],
  providers: [Location]
})
export class SingleCountryComponent implements OnInit {
  public country: CountryInterface;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: CountriesService,
    private location: Location,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // get country
    this.route.params.subscribe(routeParams => {
      // console.log(routeParams);
      this.http.getSingleCountry(routeParams.name).subscribe(
        data => {
          this.country = data;
          this.toastr.success(`Loaded Details of ${this.country.name} 😎`);
          // console.log(this.country);
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  // go back
  public goBackToPreviousPage() {
    this.location.back();
  }
}
