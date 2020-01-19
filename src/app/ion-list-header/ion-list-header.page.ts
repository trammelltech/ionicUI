import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-list-header',
  templateUrl: './ion-list-header.page.html',
  styleUrls: ['./ion-list-header.page.scss'],
})
export class IonListHeaderPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/list-header');
  return browser;
}

}
