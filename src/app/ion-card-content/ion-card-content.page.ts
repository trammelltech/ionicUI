import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-card-content',
  templateUrl: './ion-card-content.page.html',
  styleUrls: ['./ion-card-content.page.scss'],
})
export class IonCardContentPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/card-content');
  return browser;
}

}
