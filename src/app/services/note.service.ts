import { Injectable } from '@angular/core';
import { AnonymousNote } from '../models';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private readonly base = 'http://localhost:8000/api/notes';

  constructor(private readonly http: HttpClient) { }
  getNotes(): Observable<AnonymousNote[]> {
    return this.http.get<AnonymousNote[]>(this.base);
  }
  newNote(note: AnonymousNote): Observable<AnonymousNote> {
    return this.http.post<AnonymousNote>(this.base, note)
  }
}