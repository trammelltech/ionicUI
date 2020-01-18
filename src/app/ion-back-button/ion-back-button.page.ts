import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ion-back-button',
  templateUrl: './ion-back-button.page.html',
  styleUrls: ['./ion-back-button.page.scss'],
})
export class IonBackButtonPage implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  go() {
    this.router.navigate(['/back-button-forward'])
  }
}
