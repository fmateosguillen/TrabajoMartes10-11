import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() { 
    this.correo = {
      titulo: "Título del correo",
      cuerpo: `p2nrfp2nrpnp3wintv
              wpwiuerpfiuwbperibgpwibergpwbpergb
              wrñfgbnwñbgrpiwjbergpñibwñpierbg
              worenñpwbnergñwbertgpñibwptrgbw`,
      emisor: "emisor@gmail.com",
      destinatario: "destinatario@gmail.com"
    }
  }

  ngOnInit(): void {
  }

}
