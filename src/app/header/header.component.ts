import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showFiller = false;
  isClick = false;
  
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  
  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    this.isClick = !this.isClick;
  }
  
}
