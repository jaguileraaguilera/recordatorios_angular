import { Component, OnInit, Input, Output } from '@angular/core';
import { ListaNotasService } from '../lista-notas.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})

export class EntradaComponent implements OnInit {
  nueva_tarea : string = "";
  lista_tareas: ListaNotasService;
  constructor(almacenDatos : ListaNotasService) {
    this.lista_tareas = almacenDatos;
  }

  ngOnInit(): void {
  }

  guardarEntrada() {
    let fecha = new Date().toLocaleString(
      undefined, 
      {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
      }
    );

    this.lista_tareas.notas.push({
      nombre : this.nueva_tarea,
      prioridad : 1,
      fecha : fecha,
      completado : false
    });

    this.nueva_tarea = "";
  }


}
