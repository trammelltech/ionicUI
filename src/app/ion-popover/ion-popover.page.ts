import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificationsComponent } from '../components/notifications/notifications.component';

@Component({
  selector: 'app-ion-popover',
  templateUrl: './ion-popover.page.html',
  styleUrls: ['./ion-popover.page.scss'],
})
export class IonPopoverPage implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
        component: NotificationsComponent,
        event: ev,
        animated: true,
        showBackdrop: true
    });
    return await popover.present();
}

}
