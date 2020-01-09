import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ion-nav-pop',
  templateUrl: './ion-nav-pop.page.html',
  styleUrls: ['./ion-nav-pop.page.scss'],
})
export class IonNavPopPage implements OnInit {

  constructor(
    public location: Location,
  ) { }

  ngOnInit() {
  }

  pop() {
    this.location.back();
  }
}