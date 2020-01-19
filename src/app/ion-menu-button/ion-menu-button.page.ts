import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-menu-button',
  templateUrl: './ion-menu-button.page.html',
  styleUrls: ['./ion-menu-button.page.scss'],
})
export class IonMenuButtonPage implements OnInit {

  constructor(private menu: MenuController,
    private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/menu-button');
  return browser;
}

  openMenu() {
    this.menu.toggle();
  }

}
