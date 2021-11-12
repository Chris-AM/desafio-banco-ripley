import { Component, OnInit } from '@angular/core';
import { LinksService } from './links.service';
import { Links } from '../../shared/interfaces/linksInterface';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  links: Links[] = [];
  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.links = this.linksService.getLinks();
    console.log('links', this.links);
  }
}
