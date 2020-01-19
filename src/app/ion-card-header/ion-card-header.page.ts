import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-card-header',
  templateUrl: './ion-card-header.page.html',
  styleUrls: ['./ion-card-header.page.scss'],
})
export class IonCardHeaderPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/card-header');
  return browser;
}

}
