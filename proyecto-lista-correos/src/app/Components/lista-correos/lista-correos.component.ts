import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correos',
  templateUrl: './lista-correos.component.html',
  styleUrls: ['./lista-correos.component.scss']
})
export class ListaCorreosComponent implements OnInit {

  correos: any[];
  constructor() { 
    const correo1 ={
      titulo: "Título del 1",
      cuerpo: `webrfliwbelrgbpiwnedfñiwnmcpeoirnguiherjytjñwhnñkjnd.lkjfnñwejhrtñ`,
      emisor: "correoEmisor1@gmail.com",
      destinatario: "correoDestinatario1@gmail.com",
      leido: true
    };
    const correo2 ={
      titulo: "Título del 2",
      cuerpo: `webrfliwbelrgbpiwnedfñiwnmcpeoirnguiherjytjñwhnñkjnd.lkjfnñwejhrtñ`,
      emisor: "correoEmisor2@gmail.com",
      destinatario: "correoDestinatario1@gmail.com",
      leido: false
    };
    this.correos = [];
    this.correos.push(correo1);
    this.correos.push(correo2);
  }

  ngOnInit(): void {
  }

}
