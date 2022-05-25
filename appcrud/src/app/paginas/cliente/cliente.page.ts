import { Component, OnInit } from '@angular/core';
import { Cliente, ClienteService } from 'src/app/servicos/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  clientes: Cliente[];

  constructor( private service: ClienteService) { }

  ngOnInit() {
    this.service.getAll().subscribe(resposta => {
      this.clientes = resposta;
    })
  }

}
