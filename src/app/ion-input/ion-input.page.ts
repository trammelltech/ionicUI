import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-input',
  templateUrl: './ion-input.page.html',
  styleUrls: ['./ion-input.page.scss'],
})
export class IonInputPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/input');
  return browser;
}

  register(form:any) {
    console.log("input on form example");
  }

}
