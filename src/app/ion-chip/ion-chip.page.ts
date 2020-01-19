import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-chip',
  templateUrl: './ion-chip.page.html',
  styleUrls: ['./ion-chip.page.scss'],
})
export class IonChipPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/chip');
  return browser;
}

}
