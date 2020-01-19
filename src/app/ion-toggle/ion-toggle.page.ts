import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-toggle',
  templateUrl: './ion-toggle.page.html',
  styleUrls: ['./ion-toggle.page.scss'],
})
export class IonTogglePage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/toggle');
  return browser;
}

}
