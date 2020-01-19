import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-spinner',
  templateUrl: './ion-spinner.page.html',
  styleUrls: ['./ion-spinner.page.scss'],
})
export class IonSpinnerPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/spinner');
  return browser;
}

}
