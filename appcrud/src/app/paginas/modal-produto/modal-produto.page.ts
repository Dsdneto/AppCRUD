import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ClienteService } from 'src/app/servicos/cliente.service';
import { Produto, ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.page.html',
  styleUrls: ['./modal-produto.page.scss'],
})
export class ModalProdutoPage implements OnInit {
  
  @Input() p: Produto;
  atualizar = false;
  
  dadosProduto = {
    descricao: '',
    valor: 0
  };

  constructor(private modalCtrl: ModalController, private service: ProdutoService) { }

  ngOnInit() {
    if(this.p){
      this.atualizar=true;
      this.dadosProduto = this.p;
    }
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviarFormulario(form: NgForm){
    const cliente = form.value;
    if(this.atualizar){
      this.service.update(cliente, this.p.id).subscribe(resposta => {
        this.modalCtrl.dismiss(resposta);
    });
    }else{
      this.service.create(cliente).subscribe(resposta => {
        this.modalCtrl.dismiss();
      });
    }
  }

}
