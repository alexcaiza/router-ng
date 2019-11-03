import { Note, ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.css']
})
export class NotesDetailComponent implements OnInit {

  note: Note;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.apiService.getNote(id).then(note => this.note = note);
    })
  }

  gotoNotes() {
    this.router.navigate(['/administration/notes']);
  }

}
