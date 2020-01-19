import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-note',
  templateUrl: './ion-note.page.html',
  styleUrls: ['./ion-note.page.scss'],
})
export class IonNotePage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/note');
  return browser;
}

}
