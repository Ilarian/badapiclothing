import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  products = ["gloves", "facemasks", "beanies"];

  dropdown(): void {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
