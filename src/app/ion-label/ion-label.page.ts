import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-label',
  templateUrl: './ion-label.page.html',
  styleUrls: ['./ion-label.page.scss'],
})
export class IonLabelPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/label');
  return browser;
}

}
