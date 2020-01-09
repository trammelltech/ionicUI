import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ion-nav-push',
  templateUrl: './ion-nav-push.page.html',
  styleUrls: ['./ion-nav-push.page.scss'],
})
export class IonNavPushPage implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  push() {
    this.router.navigate(['/ion-nav-pop'])
  }
}
