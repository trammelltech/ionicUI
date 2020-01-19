import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-menu',
  templateUrl: './ion-menu.page.html',
  styleUrls: ['./ion-menu.page.scss'],
})
export class IonMenuPage implements OnInit {

  constructor(private menu: MenuController,
    private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/menu');
  return browser;
}

  openMenu() {
    this.menu.toggle();
  }
}
