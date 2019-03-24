import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as usuariosActions from '../actions';
import { of } from 'rxjs';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';


@Injectable()
export class UsuariosEffects {

    constructor( private actions$: Actions,
                 public usuarioService: UsuarioService ) { }

    // @Effect()
    // cargarUsuarios$ = this.actions$.ofType( usuariosActions.CARGAR_USUARIOS )
    //                         .pipe(
    //                         map( action => {
    //                                 console.log(action);
    //                                 return action;
    //                             })
    //                     );

    @Effect()
    cargarUsuarios$ = this.actions$
                            .pipe(
                                ofType( usuariosActions.CARGAR_USUARIOS ),
                               switchMap( () => {
                                    return this.usuarioService.getUsers()
                                        .pipe(
                                            map( user => new  usuariosActions.CargarUsuariosSuccess( user ) ),
                                            catchError( error => of( new usuariosActions.CargarUsuariosFail( error ) ))
                                        );
                               } )
                            );

}


