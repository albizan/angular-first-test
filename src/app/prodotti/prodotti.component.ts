import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service'

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss']
})
export class ProdottiComponent implements OnInit {

  mieiProdotti: any;
  constructor(private prodotti: ProductsService) {}

  ngOnInit() {
    this.prodotti.getProducts().subscribe(
      dati => this.mieiProdotti = dati
    );
  }

  riempi(){
    
  }

}
