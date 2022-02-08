import { Component, OnInit } from '@angular/core';
import { ListaNotasService } from '../lista-notas.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  lista_tareas: ListaNotasService;
  constructor(almacenDatos : ListaNotasService) {
    this.lista_tareas = almacenDatos;
  }

  ngOnInit(): void {
  }

  calcularPendientes() {
    return this.lista_tareas.notas.filter(tarea => !tarea.completado).length;
  }

}
