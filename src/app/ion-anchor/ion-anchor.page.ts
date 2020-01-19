import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-anchor',
  templateUrl: './ion-anchor.page.html',
  styleUrls: ['./ion-anchor.page.scss'],
})
export class IonAnchorPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/anchor');
  return browser;
}

}
