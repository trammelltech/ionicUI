import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-reorder',
  templateUrl: './ion-reorder.page.html',
  styleUrls: ['./ion-reorder.page.scss'],
})
export class IonReorderPage implements OnInit {

  constructor(
    private iab: InAppBrowser,
  ) {
    this.listItems = [
      "1. Item 1",
      "2. Item 2",
      "3. Item 3",
      "4. Item 4",
      "5. Item 5",
      "6. Item 6"
    ];
  }

  ngOnInit() {
  }

  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/reorder');
  return browser;
}

  listItems: any;
 
  onRenderItems(event) {
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
     let draggedItem = this.listItems.splice(event.detail.from,1)[0];
     this.listItems.splice(event.detail.to,0,draggedItem)
    //this.listItems = reorderArray(this.listItems, event.detail.from, event.detail.to);
    event.detail.complete();
  }

  getList() {
    console.table(this.listItems);
  }
}
