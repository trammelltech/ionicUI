import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ion-action-sheet-code',
  templateUrl: './ion-action-sheet-code.page.html',
  styleUrls: ['./ion-action-sheet-code.page.scss'],
})
export class IonActionSheetCodePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismissCode() {
    this.modalController.dismiss();
}

}
