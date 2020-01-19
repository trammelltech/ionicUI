import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-thumbnail',
  templateUrl: './ion-thumbnail.page.html',
  styleUrls: ['./ion-thumbnail.page.scss'],
})
export class IonThumbnailPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/thumbnail');
  return browser;
}

}
