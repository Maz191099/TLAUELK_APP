import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('slide') slides: IonSlides;
  regis: any = {
    name: 'prueba',
    email: 'prueba@gmail.com',
    pass: '123456789',
    
  };
  loginUser = {
    username: 'miguel',
    password: '123456789'
  };

  estActive: boolean = false;
  constructor(private navCtrl: NavController) { 
    
  }

  ngOnInit() {
    
  }
  
  // Funtion login
  login(fLogin: NgForm){
    console.log(fLogin.valid);
    this.navCtrl.navigateRoot(['/tabs/gallery'], {animated: true});
  }
  
  // Funtion Register
  register(fRegister: NgForm){
    //console.log(fRegister.valid);
    if(this.estActive){
      console.log('registrar establecimiento')
      this.navCtrl.navigateRoot(['/establishment-register'], {animated: true});
    } else{
      console.log('registrar solo usuario')
      this.navCtrl.navigateRoot(['/tabs/gallery'], {animated: true});
    }
  }

  // Botones del footer
  mostrarRegister(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }
  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
  activarEst(){
    this.estActive = !this.estActive;
  }
}
