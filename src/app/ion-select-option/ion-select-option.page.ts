import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-select-option',
  templateUrl: './ion-select-option.page.html',
  styleUrls: ['./ion-select-option.page.scss'],
})
export class IonSelectOptionPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/select-option');
  return browser;
}

}
