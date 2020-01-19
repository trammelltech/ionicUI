import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-toolbar',
  templateUrl: './ion-toolbar.page.html',
  styleUrls: ['./ion-toolbar.page.scss'],
})
export class IonToolbarPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/toolbar');
  return browser;
}

}
