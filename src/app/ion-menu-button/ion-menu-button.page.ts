import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ion-menu-button',
  templateUrl: './ion-menu-button.page.html',
  styleUrls: ['./ion-menu-button.page.scss'],
})
export class IonMenuButtonPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menu.toggle();
  }

}
