import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-header',
  templateUrl: './ion-header.page.html',
  styleUrls: ['./ion-header.page.scss'],
})
export class IonHeaderPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/header');
  return browser;
}

}
