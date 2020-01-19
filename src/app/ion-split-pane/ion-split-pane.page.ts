import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-split-pane',
  templateUrl: './ion-split-pane.page.html',
  styleUrls: ['./ion-split-pane.page.scss'],
})
export class IonSplitPanePage implements OnInit {

  constructor(private menu: MenuController,
    private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/split-pane');
  return browser;
}

  openMenu() {
    this.menu.toggle();
  }

}
