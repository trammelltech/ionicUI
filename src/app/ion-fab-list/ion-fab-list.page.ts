import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-fab-list',
  templateUrl: './ion-fab-list.page.html',
  styleUrls: ['./ion-fab-list.page.scss'],
})
export class IonFabListPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/fab-list');
  return browser;
}

}
