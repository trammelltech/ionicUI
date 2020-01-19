import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-infinite-scroll-content',
  templateUrl: './ion-infinite-scroll-content.page.html',
  styleUrls: ['./ion-infinite-scroll-content.page.scss'],
})
export class IonInfiniteScrollContentPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/infinite-scroll-content');
  return browser;
}

}
