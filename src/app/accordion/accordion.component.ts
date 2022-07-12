import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() public title = '';
  @Input() public subtitle = '';
  @Input() public iconClasses = '';
  constructor() {}
  ngOnInit(): void {}
}
