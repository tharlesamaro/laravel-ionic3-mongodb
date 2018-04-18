import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {PerfilProvider} from "../../providers/perfil/perfil";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    UsuarioProvider,
    PerfilProvider,
  ]
})
export class HomePage {

  public usuarios = [];
  public perfis = [];

  public usuarioCadastro = {
    "_id": "",
    "nome": "",
    "idade": null,
    "perfil":null
  };

  constructor(public navCtrl: NavController, private usuarioService: UsuarioProvider, private perfilProvider: PerfilProvider) {
    this.getUsuarios();
    this.getPerfis();
  }

  public getUsuarios() {
    this.usuarioService.findAll().subscribe(response => this.usuarios = response);
  }

  public salvarUsuario() {

    if (this.usuarioCadastro._id == "") {
      this.usuarioService.salvar(this.usuarioCadastro).subscribe(response => this.getUsuarios());
    } else {
      this.usuarioService.editar(this.usuarioCadastro).subscribe(response => this.getUsuarios());
    }
  }

  public popularForm(usuario) {
    this.usuarioCadastro = usuario;
  }

  public deletar(id) {
    this.usuarioService.deletar(id).subscribe(response => this.getUsuarios());
  }

  public compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

  public getPerfis() {
    this.perfilProvider.findAll().subscribe(response => this.perfis = response);
  }

}
