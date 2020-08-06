import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.page.html',
  styleUrls: ['./form-product.page.scss'],
})
export class FormProductPage implements OnInit {
  product = {
    name: 'prueba',
    //image: '',
    description: 'prueba',
    precio: '15',
    //id_establishment: '',
  };
  constructor(private navCtrl: NavController, ) { }

  ngOnInit() {
  }
  cancelar(){
    this.navCtrl.navigateRoot(['/home-establishment'], {animated: true});
  }
  register(fRegister: NgForm){
    if(fRegister.valid){
      console.log(this.product);
      this.navCtrl.navigateRoot(['/home-establishment'], {animated: true}); 
    }
    console.log(fRegister.valid);
    
  }
}
