import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ion-split-pane',
  templateUrl: './ion-split-pane.page.html',
  styleUrls: ['./ion-split-pane.page.scss'],
})
export class IonSplitPanePage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menu.toggle();
  }

}
