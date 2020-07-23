import { Component, OnInit, Input } from '@angular/core';
import { Establishment } from '../../interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.scss'],
})
export class EstablishmentComponent implements OnInit {
  @Input() establishment: Establishment = {} 
  constructor(private navCtrl: NavController,
    ) {

}

  ngOnInit() {}
  mostrarDetalle( ID ) {
    this.navCtrl.navigateRoot(['/establishment-detail', ID], {animated: true});
  }

}
