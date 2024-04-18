import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { PlaylistElementComponent } from './playlist-element/playlist-element.component';
import { NavigationComponent } from '../shared/components/navigation/navigation.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogElementComponent } from './catalog/catalog-element/catalog-element.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
  RouterOutlet,
  CreatePlaylistComponent,
  PlaylistElementComponent,
  NavigationComponent,
  CatalogComponent,
  CatalogElementComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'binge-builder-fe';
}
