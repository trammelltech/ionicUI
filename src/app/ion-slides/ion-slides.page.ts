import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-slides',
  templateUrl: './ion-slides.page.html',
  styleUrls: ['./ion-slides.page.scss'],
})
export class IonSlidesPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/slides');
  return browser;
}

}
