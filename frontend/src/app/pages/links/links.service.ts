import { Injectable } from '@angular/core';
import { Links } from 'src/app/shared/interfaces/linksInterface';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  private links: Links[] = [{
    name: 'Nuevo destinatario',
    description: 'Crea y guarda un nuevo destinatario',
    url: '/dashboard/nuevo-destinatario',
  },
  {
    name: 'Trasferir',
    description: 'Trasferir un destinatario registrado',
    url: '/dashboard/nueva-transferencia',
  },
  {
    name: 'Lista de destinatarios',
    description: 'Lista de destinatarios registrados',
    url: '/dashboard/destinatarios',
  },
  {
    name: 'Lista de envíos',
    description: 'Lista el historial de envíos realizados',
    url: '/dashboard/historial',
  }
  ]

  constructor() { 
   
  }

  getLinks(): Links[] {
    return this.links;
  }
  getLink(id: number): Links {
    return this.links[id];
  }
  
}
