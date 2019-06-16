import { Component, OnInit } from '@angular/core';
import { NoteService } from './services';
import { AnonymousNote } from './models';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 	title = 'Anonymous Notes';
  	notes: AnonymousNote[] = [];
  	errors: String[] = [];

  	constructor(private readonly noteService: NoteService) { }

 	ngOnInit(): void {
    	this.getNotes();
  	}
  
  	createNote(note: AnonymousNote) {
    	this.noteService.newNote(note)
      	.subscribe(newNote => {
        	this.notes = [newNote, ...this.notes];
      	},
        error => {
        	this.handleErrors(error);
        })
  	}
  	getNotes() {
    	this.noteService.getNotes()
      	.subscribe(notes => {
        	this.notes = notes;
      })
  	}
  	private handleErrors(errors: string[] | string) {
    	this.errors = Array.isArray(errors) ? errors : [errors];
 	}
}