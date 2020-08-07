import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  reservacion = {
    esta: 'Nombre del local',
    fecha: '15/02/2020',
    status: 'En espera'
  };
  constructor() { }

  ngOnInit() {
  }

}
