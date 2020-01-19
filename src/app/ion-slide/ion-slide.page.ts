import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-slide',
  templateUrl: './ion-slide.page.html',
  styleUrls: ['./ion-slide.page.scss'],
})
export class IonSlidePage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/slide');
  return browser;
}

}
