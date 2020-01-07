import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-ion-picker',
  templateUrl: './ion-picker.page.html',
  styleUrls: ['./ion-picker.page.scss'],
})
export class IonPickerPage {

  constructor(public pickerCtrl: PickerController) { }
  
  async openPickerSingle() {
    let pickerAction;
    const picker = await this.pickerCtrl.create({
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: value => {
          pickerAction = 'cancel';
        }
      },
      {
        text: 'Done',
        role: 'done',
        handler: value => {
          pickerAction = 'done';
        }
      }],
      columns: [
        {
          name: 'days',
          options: [
            {
              text: '1',
              value: 1
            },
            {
              text: '2',
              value: 2
            },
            {
              text: '3',
              value: 3
            },
          ]
        },
      ]
    });
    await picker.present();
  }

  async openPickerMulti() {
    let pickerAction;
    const picker = await this.pickerCtrl.create({
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: value => {
          pickerAction = 'cancel';
        }
      },
      {
        text: 'Done',
        role: 'done',
        handler: value => {
          pickerAction = 'done';
        }
      }],
      columns: [
        {
          name: 'days',
          options: [
            {
              text: '1',
              value: 1
            },
            {
              text: '2',
              value: 2
            },
            {
              text: '3',
              value: 3
            },
          ]
        },
        {
          name: 'years',
          options: [
            {
              text: '1992',
              value: 1992
            },
            {
              text: '1993',
              value: 1993
            },
            {
              text: '1994',
              value: 1994
            },
          ]
        },
      ]
    });
    await picker.present();
  }
}
