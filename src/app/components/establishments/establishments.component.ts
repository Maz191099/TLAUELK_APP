import { Component, OnInit, Input } from '@angular/core';
import { Establishment } from '../../interfaces/interfaces';
@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.scss'],
})
export class EstablishmentsComponent implements OnInit {
  @Input() establishments: Establishment[] = [];
  
  constructor() { }

  ngOnInit() {
  }
  
}
