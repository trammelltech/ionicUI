import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-grid',
  templateUrl: './ion-grid.page.html',
  styleUrls: ['./ion-grid.page.scss'],
})
export class IonGridPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/grid');
  return browser;
}

}
