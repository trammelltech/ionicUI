import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-action-sheet-controller',
  templateUrl: './ion-action-sheet-controller.page.html',
  styleUrls: ['./ion-action-sheet-controller.page.scss'],
})
export class IonActionSheetControllerPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/action-sheet-controller');
  return browser;
}

}
