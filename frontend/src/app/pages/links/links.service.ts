import { Injectable } from '@angular/core';
import { Links } from 'src/app/shared/interfaces/linksInterface';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  private links: Links[] = [{
    name: 'Nuevo destinatario',
    description: 'Crea y guarda un nuevo destinatario',
  },
  {
    name: 'Trasferir',
    description: 'Trasferir un destinatario registrado',
  },
  {
    name: 'Lista de destinatarios',
    description: 'Lista de destinatarios registrados',
  },
  {
    name: 'Lista de envíos',
    description: 'Lista el historial de envíos realizados',
  }
  ]

  constructor() { 
    console.log('LinksService constructor');
  }

  getLinks(): Links[] {
    return this.links;
  }
  getLink(id: number): Links {
    return this.links[id];
  }
  
}
