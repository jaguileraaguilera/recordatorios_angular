import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaNotasService {
  notas = new Array();
  filtrar_completadas : boolean = false;
  filtrar_activas : boolean = false;
  constructor() { }
}
