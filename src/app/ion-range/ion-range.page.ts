import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-range',
  templateUrl: './ion-range.page.html',
  styleUrls: ['./ion-range.page.scss'],
})
export class IonRangePage implements OnInit {

  dualValue: any = { lower: 33, upper: 80 };

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/range');
  return browser;
}

}
