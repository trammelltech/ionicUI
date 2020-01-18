import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-buttons',
  templateUrl: './ion-buttons.page.html',
  styleUrls: ['./ion-buttons.page.scss'],
})
export class IonButtonsPage implements OnInit {

  clickedstar: boolean;
  clickedsearch: boolean;
  clickedorion: boolean;

  constructor() { }

  ngOnInit() {
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
