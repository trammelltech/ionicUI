import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-card-title',
  templateUrl: './ion-card-title.page.html',
  styleUrls: ['./ion-card-title.page.scss'],
})
export class IonCardTitlePage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/card-title');
  return browser;
}

}
