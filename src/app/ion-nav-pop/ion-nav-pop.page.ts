import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-nav-pop',
  templateUrl: './ion-nav-pop.page.html',
  styleUrls: ['./ion-nav-pop.page.scss'],
})
export class IonNavPopPage implements OnInit {

  constructor(
    public location: Location,
    private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/nav-pop');
  return browser;
}

  pop() {
    this.location.back();
  }
}