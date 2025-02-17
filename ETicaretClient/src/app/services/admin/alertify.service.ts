import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  //message(message: string, messageType: MessageType, messagePosition: MessagePosition, delay: number = 3, dismissOthers: boolean = false) 
  message(message: string, alertOptions: Partial<AlertifyOptions>) {
    alertify.set('notifier', 'delay', alertOptions.delay);
    alertify.set('notifier', 'position', alertOptions.messagePosition);
    const msj = alertify[alertOptions.messageType](message);
    if (alertOptions.dismissOthers) {
      msj.dismissOthers();
    }

  }
  dismiss() {
    alertify.dismissAll();
  }
}
export class AlertifyOptions {
  messageType: MessageType = MessageType.Message;
  messagePosition: MessagePosition = MessagePosition.BottomLeft;
  delay: number = 3;
  dismissOthers: boolean = false;
}
export enum MessageType {
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}
export enum MessagePosition {
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomCenter = "bottom-center",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left"
}