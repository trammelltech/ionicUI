import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-segment-button',
  templateUrl: './ion-segment-button.page.html',
  styleUrls: ['./ion-segment-button.page.scss'],
})
export class IonSegmentButtonPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/segment-button');
  return browser;
}

}
