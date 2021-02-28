import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
@Component({
  selector: 'left-note',
  templateUrl: './left-note.component.html',
  styleUrls: ['./left-note.component.scss']
})
export class LeftNoteComponent implements OnInit {

    @Input() note!: Note;
    
    constructor() {
    }

    ngOnInit(): void {
    }

}
