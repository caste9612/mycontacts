import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  title = 'Angular6FirebaseCrud';

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 3000);
  }


}
