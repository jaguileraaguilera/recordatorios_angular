import { Component, OnInit } from '@angular/core';
import { ListaNotasService } from '../lista-notas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  
  lista_tareas: ListaNotasService;
  constructor(almacenDatos : ListaNotasService) {
    this.lista_tareas = almacenDatos;
  }

  ngOnInit(): void {
  }

  // guardarLocalStorage() {
  //   localStorage.removeItem("lista_tareas");
  //   localStorage.setItem("lista_tareas", JSON.stringify(this.lista_tareas.notas));
  // }

  // comprobarListaTareas() {
  //   if (JSON.parse(localStorage.getItem("lista_tareas") || "") != this.lista_tareas.notas) 
  //     this.guardarLocalStorage();
  // }

  completarTarea(index: number): void {
    let tarea = this.lista_tareas.notas[index];
    if (!tarea.completado)
      tarea.completado = true;

    // this.comprobarListaTareas();
  }

  descompletarTarea(index: number): void {
    let tarea = this.lista_tareas.notas[index];
    if (tarea.completado)
      tarea.completado = false;

    // this.comprobarListaTareas();
  }

  ordenarPorPrioridad(): void {
    this.lista_tareas.notas = this.lista_tareas.notas.sort((tarea: any, otra: any) => otra.prioridad - tarea.prioridad);
  }

  prioridadBaja(index: number): void {
    this.lista_tareas.notas[index].prioridad = 0;
    this.ordenarPorPrioridad();

    // this.comprobarListaTareas();
  }

  prioridadMedia(index: number): void {
    this.lista_tareas.notas[index].prioridad = 1;
    this.ordenarPorPrioridad();

    // this.comprobarListaTareas();
  }

  prioridadAlta(index: number): void {
    this.lista_tareas.notas[index].prioridad = 2;
    this.ordenarPorPrioridad();

    // this.comprobarListaTareas();
  }

  // cargarTareasLocalStorage() {
  //   let lista_guardada = JSON.parse(localStorage.getItem("lista_tareas") || "");

  //   if (lista_guardada != null) {
  //     this.lista_tareas.notas = lista_guardada;
  //   }
  // }

  eliminarTarea(index : number) {
    this.lista_tareas.notas.splice(index, 1);

    // this.comprobarListaTareas();
}

  mostrarTareas(): any[] {
    // this.cargarTareasLocalStorage();

    if (this.lista_tareas.filtrar_activas) {
      return this.lista_tareas.notas.filter(tarea => !tarea.completado);
    }
    else if (this.lista_tareas.filtrar_completadas) {
      return this.lista_tareas.notas.filter(tarea => tarea.completado);
    }
    else {
      return this.lista_tareas.notas;
    }
  }

}
