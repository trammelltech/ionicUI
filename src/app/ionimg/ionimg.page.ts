import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ionimg',
  templateUrl: './ionimg.page.html',
  styleUrls: ['./ionimg.page.scss'],
})
export class IonimgPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/img');
  return browser;
}

}
