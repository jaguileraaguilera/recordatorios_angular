import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaNotasService {
  notas = new Array();
  constructor() { }
}
