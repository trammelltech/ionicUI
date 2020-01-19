import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ion-menu-controller',
  templateUrl: './ion-menu-controller.page.html',
  styleUrls: ['./ion-menu-controller.page.scss'],
})
export class IonMenuControllerPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menu.toggle();
  }

}
