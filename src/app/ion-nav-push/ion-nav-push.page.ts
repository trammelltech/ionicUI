import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-nav-push',
  templateUrl: './ion-nav-push.page.html',
  styleUrls: ['./ion-nav-push.page.scss'],
})
export class IonNavPushPage implements OnInit {

  constructor(
    public router: Router,
    private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/nav-push');
  return browser;
}

  push() {
    this.router.navigate(['/ion-nav-pop'])
  }
}
