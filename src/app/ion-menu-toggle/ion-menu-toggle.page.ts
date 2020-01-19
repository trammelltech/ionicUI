import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-menu-toggle',
  templateUrl: './ion-menu-toggle.page.html',
  styleUrls: ['./ion-menu-toggle.page.scss'],
})
export class IonMenuTogglePage implements OnInit {

  constructor(private menu: MenuController,
    private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/menu-toggle');
  return browser;
}

  openMenu() {
    this.menu.toggle();
  }

}
