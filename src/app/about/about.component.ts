import { Component, OnInit, AfterContentInit } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterContentInit {
  constructor() {}

  ngOnInit() {
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 1500);
  }
  ngAfterContentInit() {
    // this.spinner.hide();
  }
}
