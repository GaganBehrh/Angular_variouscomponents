import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public title = '';
  @Input() public subtitle = '';
  @Input() public iconClasses = '';
  constructor() { }

  ngOnInit(): void {
  }

}
