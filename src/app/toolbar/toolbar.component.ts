import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  // Input was used to give the access of title variable to outside element
  @Input() public title = '';
  constructor() { }

  ngOnInit(): void {
  }

}
