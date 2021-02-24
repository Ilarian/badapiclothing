import { Component, OnInit } from '@angular/core';
import { Product} from "../product";
import { GLOVES } from "../mockdata";
import { DataService} from "../data.service";

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css']
})
export class DataviewComponent implements OnInit {

 products: Product[];

  constructor(private dataService: DataService) {
      this.products = [];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getProducts("gloves")
        .subscribe(products => this.products = products);
  }
}
