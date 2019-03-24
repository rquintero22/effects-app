import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor( /*public usuarioService: UsuarioService */
              private store: Store<AppState> ) { }

  ngOnInit() {
    // this.usuarioService.getUsers()
    //   .subscribe( users => {
    //     console.log(users);
    //     this.usuarios = users;
    //   });

    this.store.select('usuarios')
      .subscribe( users => {
        this.usuarios = users.users;
        this.loading = users.loading;
        this.error = users.error;
      });

    this.store.dispatch( new usuariosActions.CargarUsuarios() );
  }

}
