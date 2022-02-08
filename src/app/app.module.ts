import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EntradaComponent } from './entrada/entrada.component';
import {FormsModule} from '@angular/forms';
import { ContadorComponent } from './contador/contador.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntradaComponent,
    ContadorComponent,
    ListaTareasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
