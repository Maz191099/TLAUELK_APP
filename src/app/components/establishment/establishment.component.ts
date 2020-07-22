import { Component, OnInit, Input } from '@angular/core';
import { Establishment } from '../../interfaces/interfaces';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.scss'],
})
export class EstablishmentComponent implements OnInit {
  @Input() establishment: Establishment = {} 
  constructor() { }

  ngOnInit() {}

}
