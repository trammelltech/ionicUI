import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-radio',
  templateUrl: './ion-radio.page.html',
  styleUrls: ['./ion-radio.page.scss'],
})
export class IonRadioPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/radio');
  return browser;
}

}
