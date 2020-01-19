import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-title',
  templateUrl: './ion-title.page.html',
  styleUrls: ['./ion-title.page.scss'],
})
export class IonTitlePage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/title');
  return browser;
}

}
