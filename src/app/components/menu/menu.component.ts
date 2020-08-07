import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor() { }
  menu = [
    {
      name: 'Iniciar sesión',
      direcTo: '/login'
    },
    {
      name: 'Interfaz del establecimiento',
      direcTo: '/home-establishment'
    },
    {
      name: 'Inicio',
      direcTo: '/tabs/gallery'
    },
    {
      name: 'Reservaciones',
      direcTo: '/order'
    }
  ];
  ngOnInit() {}

}
