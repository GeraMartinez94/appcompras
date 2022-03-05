import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appcompras';
  mercadoPagoVersion: any;

  constructor(private window: Window) {}

  ngOnInit() {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js";
    document.body.appendChild(script);

  }
}

