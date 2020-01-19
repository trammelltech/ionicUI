import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ion-popover',
  templateUrl: './ion-popover.page.html',
  styleUrls: ['./ion-popover.page.scss'],
})
export class IonPopoverPage implements OnInit {

  constructor(public popoverCtrl: PopoverController,
    private iab: InAppBrowser,
    ) {}

    ngOnInit() {
    }
    
  async presentCode() {
    const browser = this.iab.create('https://ionicframework.com/docs/api/popover');
  return browser;
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
