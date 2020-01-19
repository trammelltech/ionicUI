import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-progress-bar',
  templateUrl: './ion-progress-bar.page.html',
  styleUrls: ['./ion-progress-bar.page.scss'],
})
export class IonProgressBarPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/progress-bar');
  return browser;
}

}
