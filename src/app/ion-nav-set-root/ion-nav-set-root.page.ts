import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-nav-set-root',
  templateUrl: './ion-nav-set-root.page.html',
  styleUrls: ['./ion-nav-set-root.page.scss'],
})
export class IonNavSetRootPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/nav-set-root');
  return browser;
}

}
