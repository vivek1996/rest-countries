import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CountryInterface } from '../country.interface';
@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss'],
  providers: [Location]
})
export class AllCountriesComponent implements OnInit {
  public currrentregion;
  public allCountries: CountryInterface[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: CountriesService,
    private location: Location,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {
    this.currrentregion = this.route.snapshot.paramMap.get('region');

    // console.log(this.currrentregion);
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      // console.log('spinner 1');
      this.spinner.hide();
    }, 2000);
    // get allcoutries
    this.http.getAllCountries(this.currrentregion).subscribe(
      data => {
        this.allCountries = data;
        setTimeout(() => {
          // console.log('spinner all country');
          this.spinner.hide();
        }, 2000);
        // console.log(this.allCountries);
      },
      error => {
        console.log(error);
      }
    );
    // this.route.params.subscribe(routeParams => {
    //   console.log(routeParams);
    //   this.http.getAllCountries(routeParams.region).subscribe(
    //     data => {
    //       this.allCountries = data;
    //       console.log(this.allCountries);
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    // });
    // get query params
    this.route.queryParams.subscribe(queryParams => {
      // console.log(queryParams);
      if (queryParams.currency) {
        this.spinner.show();
        this.http
          .getCountriesByCurrency(queryParams.currency)
          .subscribe(data => {
            // console.log(data);
            this.allCountries = data;
            setTimeout(() => {
              //  console.log('spinner params curr');
              this.spinner.hide();
            }, 2000);
            this.toastr.success('Loaded Countries By Same Currency 😉');
          });
      } else if (queryParams.language) {
        this.spinner.show();
        this.http
          .getCountriesByLanguage(queryParams.language)
          .subscribe(data => {
            // console.log(data);
            this.allCountries = data;
            setTimeout(() => {
              // console.log('spinner param lan');
              this.spinner.hide();
            }, 2000);
            // this.spinner.hide();
            this.toastr.success('Loaded Countries By Same Language 😃');
          });
      } else {
        console.log('error in params or No Parameter', { queryParams });
      }
    });
  }
  public goBackToPreviousPage() {
    this.location.back();
  }
}
