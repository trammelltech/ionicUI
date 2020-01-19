import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-textarea',
  templateUrl: './ion-textarea.page.html',
  styleUrls: ['./ion-textarea.page.scss'],
})
export class IonTextareaPage implements OnInit {

  constructor(private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/textarea');
  return browser;
}

}
