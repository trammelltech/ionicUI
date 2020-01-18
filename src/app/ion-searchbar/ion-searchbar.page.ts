import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-searchbar',
  templateUrl: './ion-searchbar.page.html',
  styleUrls: ['./ion-searchbar.page.scss'],
})
export class IonSearchbarPage implements OnInit {

  constructor() {

    this.initializeItems();
   }

  ngOnInit() {
  }

  items: any[];

  filterItems(event) {

    this.initializeItems();
    const val = event.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item: ResProject) => {
        return (item.value.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  initializeItems() {
    this.items = [
      { value: "One" },
      { value: "Two" }, 
      { value: "Three" },
      { value: "Four" }, 
      { value: "Five" }];
  }
}

export interface ResProject {
  value : string; 
}
