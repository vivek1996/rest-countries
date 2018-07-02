import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss'],
  providers: [Location]
})
export class AllCountriesComponent implements OnInit {
  public currrentregion;
  public allCountries;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: CountriesService,
    private location: Location
  ) {
    this.currrentregion = this.route.snapshot.paramMap.get('region');
    // console.log(this.currrentregion);
  }

  ngOnInit() {
    // get allcoutries
    this.http.getAllCountries(this.currrentregion).subscribe(
      data => {
        this.allCountries = data;
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
        this.http
          .getCountriesByCurrency(queryParams.currency)
          .subscribe(data => {
            // console.log(data);
            this.allCountries = data;
          });
      } else if (queryParams.language) {
        this.http
          .getCountriesByLanguage(queryParams.language)
          .subscribe(data => {
            // console.log(data);
            this.allCountries = data;
          });
      } else {
        console.log('error in params or No Parameter', { queryParams });
      }
    });
  }
}
