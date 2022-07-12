import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent implements OnInit {
  @Input() public title = '';
  @Input() public subtitle = '';
  @Input() public iconClasses = '';
  @Input() public value = 0;
  @Input() public max = 100;
  @Input() public min = 10;

  constructor() {}

  ngOnInit(): void {}
}
