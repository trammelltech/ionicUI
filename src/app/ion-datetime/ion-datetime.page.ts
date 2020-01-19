import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-datetime',
  templateUrl: './ion-datetime.page.html',
  styleUrls: ['./ion-datetime.page.scss'],
})
export class IonDatetimePage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/datetime');
  return browser;
}

}
