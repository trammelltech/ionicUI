import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-buttons',
  templateUrl: './ion-buttons.page.html',
  styleUrls: ['./ion-buttons.page.scss'],
})
export class IonButtonsPage implements OnInit {

  clickedstar: boolean;
  clickedsearch: boolean;
  clickedorion: boolean;

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/buttons');
  return browser;
}

  clickedStar() {
    this.clickedstar = ! this.clickedstar
  }

  clickedSearch() {
    this.clickedsearch = ! this.clickedsearch
  }

  clickedOrion() {
    this.clickedorion = ! this.clickedorion
  }

}
