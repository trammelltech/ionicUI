import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-footer',
  templateUrl: './ion-footer.page.html',
  styleUrls: ['./ion-footer.page.scss'],
})
export class IonFooterPage implements OnInit {

  constructor(private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/footer');
  return browser;
}

}
