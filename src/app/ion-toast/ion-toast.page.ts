import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-toast',
  templateUrl: './ion-toast.page.html',
  styleUrls: ['./ion-toast.page.scss'],
})
export class IonToastPage implements OnInit {

  name: string;
  brithday: any;

  constructor(private toastController: ToastController,
    private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/toast');
  return browser;
}

  async showToastOnImage() {
    const toast = await this.toastController.create({
      message: 'On MouseOver event on an image',
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }

  async showToastTop() {
    const toast = await this.toastController.create({
      message: 'Mmmm, buttered toast',
      duration: 1000,
      position: 'top',
    });
    toast.present();
  }

  async showToastMiddle() {
    const toast = await this.toastController.create({
      message: 'Mmmm, buttered toast',
      duration: 1000,
      position: 'middle',
    });
    toast.present();
  }

  async showToastBottom() {
    const toast = await this.toastController.create({
      message: 'Mmmm, buttered toast',
      duration: 1000,
      position: 'bottom',
    });
    toast.present();
  }

  async showToastWithCloseButton() {
    const toast = await this.toastController.create({
      message: 'Your files were successfully saved',
      buttons: [{
        text: 'Close',
        role: 'cancel'}]
    });
    toast.present();
  }

  async showLongToast() {
    const toast = await this.toastController.create({
      message: 'Example of showing long toast',
      duration: 4000,
    });
    toast.present();
  }
}
