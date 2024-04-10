import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-playlist',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-playlist.component.html',
  styleUrl: './create-playlist.component.css'
})

export class CreatePlaylistComponent {
 playlistForm = new FormGroup({
  title: new FormControl(' '),
  description: new FormControl(' '),
 });
};
