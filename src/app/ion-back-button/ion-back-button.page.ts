import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-back-button',
  templateUrl: './ion-back-button.page.html',
  styleUrls: ['./ion-back-button.page.scss'],
})
export class IonBackButtonPage implements OnInit {

  constructor(
    public router: Router,
    private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/back-button');
  return browser;
}

  go() {
    this.router.navigate(['/back-button-forward'])
  }
}
