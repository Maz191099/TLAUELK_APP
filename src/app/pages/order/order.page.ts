import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  mostrarDetalle(){
    console.log('Mostrar detalles de la reservación');
    this.navCtrl.navigateRoot(['/order-detail'], {animated: true}); 
  }
}
