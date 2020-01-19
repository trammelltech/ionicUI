import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-ripple-effect',
  templateUrl: './ion-ripple-effect.page.html',
  styleUrls: ['./ion-ripple-effect.page.scss'],
})
export class IonRippleEffectPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/ripple-effect');
  return browser;
}

}
