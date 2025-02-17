import { Component, OnInit } from '@angular/core';
//import { AlertifyService, MessageType, MessagePosition} from 'src/app/services/admin/alertify.service.ts';
//import { AlertifyService } from 'src/app/services/admin/alertify.service';
import { AlertifyService, MessageType, MessagePosition } from '../../../services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
/*export class DashboardComponent implements OnInit{
  constructor(private alertify: AlertifyService) {}
  ngOnInit():void{
    this.alertify.message("Merhaba", MessageType.Error,MessagePosition.TopCenter,1);
  }
}*/
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(private alertify: AlertifyService, spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
  }


  m() {
    this.alertify.message("Merhaba", {
      messageType: MessageType.Success,
      delay: 4,
      messagePosition: MessagePosition.TopRight
    });
  }
  d() {
    this.alertify.dismiss();
  }

}
