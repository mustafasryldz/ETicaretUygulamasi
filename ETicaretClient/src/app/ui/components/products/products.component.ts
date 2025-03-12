import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { data } from 'jquery';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }


  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);


    /*this.httpClientService.get({
      fullEndPoint: "https://jsonplaceholder.typicode.com/posts"

    }).subscribe(data => console.log(data));

    /*this.httpClientService.post({
      controller: "products"
    }, {
      name: "kalem",
      stock: 100,
      price: 15

    }).subscribe();
*/

  }
}




