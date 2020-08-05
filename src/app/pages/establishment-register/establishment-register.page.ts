import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-establishment-register',
  templateUrl: './establishment-register.page.html',
  styleUrls: ['./establishment-register.page.scss'],
})
export class EstablishmentRegisterPage implements OnInit {
  registerEstablishment : any = {
    name: '',
    image: '',
    direction: '',
    description: '',
    schedule: ''
  };
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  register(fRegister: NgForm){
    console.log(fRegister.valid);
    this.navCtrl.navigateRoot(['/tabs/gallery'], {animated: true});
  }
}
