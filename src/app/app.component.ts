import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  constructor(private spinner: NgxSpinnerService) {
    this.spinner.show();
  }
  ngOnInit() {}
  ngAfterContentChecked() {
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 1500);
    this.spinner.hide();
  }
}
