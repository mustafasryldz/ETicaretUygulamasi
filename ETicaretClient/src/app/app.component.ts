import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
//import * as $ from 'jquery';

declare var $: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
constructor(){}
  title = 'ETicaretClient';
  /*constructor(private toastrService: CustomToastrService) {
    toastrService.message("merhaba", "Inmek", {
      messageType:ToastrMessageType.Success,
      position:ToastrPosition.TopCenter
    });
    toastrService.message("merhaba", "Inmek", {
      messageType:ToastrMessageType.Info,
      position:ToastrPosition.TopLeft
    });
    toastrService.message("merhaba", "Inmek", {
      messageType:ToastrMessageType.Error,
      position:ToastrPosition.BottomFullWidth
    });
    toastrService.message("merhaba", "Inmek", {
      messageType:ToastrMessageType.Warning,
      position:ToastrPosition.TopRight
    });
  }*/
    ngOnInit(): void {
      $.get("https://localhost:7040/api/products");
      //jQuery.get("https://localhost:7040/api/products");
    }
}

//$.get("https://localhost:7040/api/products")


