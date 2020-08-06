import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home-establishment',
  templateUrl: './home-establishment.page.html',
  styleUrls: ['./home-establishment.page.scss'],
})
export class HomeEstablishmentPage implements OnInit {
  local = {
    name: 'Nombre del establecimiento',
    image: 'assets/local.png',
    direction: 'A El Carmen Xalpatlahuaya s/n, Huamantla, Tlax.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vero reprehenderit repellendus iste! Itaque officia perspiciatis dolores cumque eos nemo perferendis suscipit natus. Et soluta non voluptatum temporibus dicta illo?',
    schedule: 'Todos los días de 11:00 am  a 23:00 pm'
  };
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  addProduct(){
    this.navCtrl.navigateRoot(['/form-product'], {animated: true}); 
  }
}
