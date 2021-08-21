import { ApiSendoService } from './core/service/api-sendo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-sendo',
  templateUrl: './layout-sendo.component.html',
  styleUrls: ['./layout-sendo.component.css']
})
export class LayoutSendoComponent implements OnInit {
  products = []
  constructor(private apiSendo: ApiSendoService) { }

  ngOnInit(): void {
    this.getAllProduct()
  }
  getAllProduct() {
    this.apiSendo.getAllProduct().subscribe((res) => {
      this.products = res.data.products;

    })
  }
  configPrice(price) {
    return price.toString().replace(/(\d)(?=(\d\d)+\d$)/g, ".")
  }
}
