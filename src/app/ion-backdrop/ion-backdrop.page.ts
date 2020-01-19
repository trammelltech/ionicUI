import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-backdrop',
  templateUrl: './ion-backdrop.page.html',
  styleUrls: ['./ion-backdrop.page.scss'],
})
export class IonBackdropPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/backdrop');
  return browser;
}

}
