import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { IonActionSheetCodePage } from '../ion-action-sheet-code/ion-action-sheet-code.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-action-sheet',
  templateUrl: './ion-action-sheet.page.html',
  styleUrls: ['./ion-action-sheet.page.scss'],
})
export class IonActionSheetPage {

  constructor(public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    private iab: InAppBrowser
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/action-sheet');
  return browser;

    /*
    const modal = await this.modalController.create({
        component: IonActionSheetCodePage,
        componentProps: { item: Object.assign({}, ) }
    });
    await modal.present();*/
}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'play',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
