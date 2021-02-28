import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
@Component({
  selector: 'right-note',
  templateUrl: './right-note.component.html',
  styleUrls: ['./right-note.component.scss']
})
export class RightNoteComponent implements OnInit {

  @Input() note!: Note
  
  constructor() { }

  ngOnInit(): void {
  }

}
