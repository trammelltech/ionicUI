import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-skeleton-text',
  templateUrl: './ion-skeleton-text.page.html',
  styleUrls: ['./ion-skeleton-text.page.scss'],
})
export class IonSkeletonTextPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data: any;

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 5000);
  }
}
