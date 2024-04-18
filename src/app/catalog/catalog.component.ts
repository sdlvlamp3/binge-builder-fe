import { Component } from '@angular/core';
import { CatalogElementComponent } from './catalog-element/catalog-element.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CatalogElementComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

}
