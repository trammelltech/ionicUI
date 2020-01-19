import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-menu-controller',
  templateUrl: './ion-menu-controller.page.html',
  styleUrls: ['./ion-menu-controller.page.scss'],
})
export class IonMenuControllerPage implements OnInit {

  constructor(private menu: MenuController,
    private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/menu-controller');
  return browser;
}

  openMenu() {
    this.menu.toggle();
  }

}
