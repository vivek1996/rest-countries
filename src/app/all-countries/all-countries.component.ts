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
    // this.currrentregion = this.route.snapshot.paramMap.get('region');
    // console.log(this.currrentregion);
  }

  ngOnInit() {
    // get allcoutries
    this.route.params.subscribe(routeParams => {
      console.log(routeParams);
      this.http.getAllCountries(routeParams.region).subscribe(
        data => {
          this.allCountries = data;
          console.log(this.allCountries);
        },
        error => {
          console.log(error);
        }
      );
    });
    // get query params
    this.route.queryParams.subscribe(queryParams => {
      console.log(queryParams);
      // do something with the query params
    });
  }
}
