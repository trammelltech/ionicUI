import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-action-sheet-code',
  templateUrl: './ion-action-sheet-code.page.html',
  styleUrls: ['./ion-action-sheet-code.page.scss'],
})
export class IonActionSheetCodePage implements OnInit {

  constructor(public modalController: ModalController,
    private iab: InAppBrowser) { }

  ngOnInit() {
  }

  dismissCode() {
    this.modalController.dismiss();
}

}
