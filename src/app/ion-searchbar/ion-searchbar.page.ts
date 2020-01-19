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
  items2: any[];

  filterItems(event) {

    this.initializeItems();
    const val = event.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item: Arrays) => {
        return (item.value.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

    if (val && val.trim() != '') {
      this.items2 = this.items2.filter((items2: Arrays) => {
        return (items2.value.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  initializeItems() {
    this.items = [
      { value: "One" },
      { value: "Two" }, 
      { value: "Three" },
      { value: "Four" }, 
      { value: "Five" },
      { value: "six" }];

      this.items2 = [
        { value: "six" },
        { value: "seven" }];
  }
}

export interface Arrays {
  value : string; 
}
