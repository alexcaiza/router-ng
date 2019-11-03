import { Note, ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[];

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.apiService.getNotes().then(notes => this.notes = notes);
  }

  onSelect(note: Note) {
    this.router.navigate(['/administration/notes', note.id]);
  }

}
