import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-radio-group',
  templateUrl: './ion-radio-group.page.html',
  styleUrls: ['./ion-radio-group.page.scss'],
})
export class IonRadioGroupPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/radio-group');
  return browser;
}

}
