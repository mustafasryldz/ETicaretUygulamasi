import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ETicaretClient';

  ngOnInit() {
    $(document).ready(() => {
      alert("ejehe");
    });
  }

}
