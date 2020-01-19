import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-fab',
  templateUrl: './ion-fab.page.html',
  styleUrls: ['./ion-fab.page.scss'],
})
export class IonFabPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/fab');
  return browser;
}

}
