import { Component } from '@angular/core';
import { PlaylistElementComponent } from './playlist-element/playlist-element.component';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [PlaylistElementComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {

}
