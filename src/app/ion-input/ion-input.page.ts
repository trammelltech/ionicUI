import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-input',
  templateUrl: './ion-input.page.html',
  styleUrls: ['./ion-input.page.scss'],
})
export class IonInputPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register(form:any) {
    console.log("input on form example");
  }

}
