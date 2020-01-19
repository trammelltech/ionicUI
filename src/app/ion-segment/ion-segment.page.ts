import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-segment',
  templateUrl: './ion-segment.page.html',
  styleUrls: ['./ion-segment.page.scss'],
})
export class IonSegmentPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/segment');
  return browser;
}

}
