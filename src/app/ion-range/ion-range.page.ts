import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-range',
  templateUrl: './ion-range.page.html',
  styleUrls: ['./ion-range.page.scss'],
})
export class IonRangePage implements OnInit {

  dualValue: any = { lower: 33, upper: 80 };

  constructor() { }

  ngOnInit() {
  }

}
