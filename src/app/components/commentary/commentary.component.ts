import { Component, OnInit, Input } from '@angular/core';
import { Commentary } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss'],
})
export class CommentaryComponent implements OnInit {
  @Input() commentary: Commentary = {} 
  constructor() { }

  ngOnInit() {}

}
