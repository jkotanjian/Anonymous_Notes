import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AnonymousNote } from '../models';
import { NoteService } from '../services';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  note = new AnonymousNote();

  constructor(
    private readonly noteService: NoteService,
    private readonly router: Router
  ) { }

  @Output()
    newNote = new EventEmitter<AnonymousNote>();
  
  @Input() 
    errors = [];

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault()
    console.log("Submitting note", this.note);
    this.note = form.value;
    this.newNote.emit(this.note);

    form.reset();
  }
}