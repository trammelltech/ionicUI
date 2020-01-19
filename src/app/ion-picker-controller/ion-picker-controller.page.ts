import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-picker-controller',
  templateUrl: './ion-picker-controller.page.html',
  styleUrls: ['./ion-picker-controller.page.scss'],
})
export class IonPickerControllerPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/picker-controller');
  return browser;
}

}
