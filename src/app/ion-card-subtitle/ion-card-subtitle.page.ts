import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-card-subtitle',
  templateUrl: './ion-card-subtitle.page.html',
  styleUrls: ['./ion-card-subtitle.page.scss'],
})
export class IonCardSubtitlePage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/card-subtitle');
  return browser;
}

}
