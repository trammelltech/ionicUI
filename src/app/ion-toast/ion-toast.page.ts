import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ion-toast',
  templateUrl: './ion-toast.page.html',
  styleUrls: ['./ion-toast.page.scss'],
})
export class IonToastPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async showToastOnImage() {
    const toast = await this.toastController.create({
      message: 'On MouseOver event on an image',
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }


  async showToast(position: string) {
    const toast = await this.toastController.create({
      message: 'Mmmm, buttered toast',
      duration: 1000,
      position: position,
    });
    toast.present(toast);
  }

  async showToastWithCloseButton() {
    const toast = await this.toastController.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
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

  async save() {
    console.log(this.brithday);
    debugger
    if (this.name && this.brithday) {
      const toast = await this.toastController.create({
        message: 'User profile was saved successfully',
        position: 'bottom',
        duration: 3000
      });
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'User profile field is not filled',
        position: 'bottom',
        duration: 3000
      });
      toast.present();
    }

  }
}
