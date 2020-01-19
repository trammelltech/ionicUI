import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ion-menu-toggle',
  templateUrl: './ion-menu-toggle.page.html',
  styleUrls: ['./ion-menu-toggle.page.scss'],
})
export class IonMenuTogglePage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menu.toggle();
  }

}
