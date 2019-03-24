import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducers } from './store/app.reducer';
import { effectsArr } from './store/effects';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot( AppReducers ),
    EffectsModule.forRoot( effectsArr ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    SharedModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
