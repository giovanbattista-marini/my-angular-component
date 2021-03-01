import { Component , OnInit } from '@angular/core';
import { Note } from './interfaces/note';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    notes: Note[] = [
        {
            author: 'Francesco Rossi',
            createdAt: new Date("2020-09-01"),
            imgString: 'user1',
            msg: 'a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a '
        },
        {
            author: 'Paola Bianchi',
            createdAt: new Date("2020-09-05"),
            imgString: 'user2',
            msg: 'lorem impsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum '
        },
        {
            author: 'Carlo Verde',
            createdAt: new Date("2020-09-02"),
            imgString: 'user3',
            msg: 'lorem impsumlorem ipsum lorem ipsum lorem ipsum '
        }
    ]
    ownNotes: Note[] = [];
    
    constructor() { }
    
    ngOnInit(): void {
        let ownNotes = JSON.parse(localStorage.getItem("myNote") || '[]');
        if (ownNotes.length) {
            ownNotes.sort((a: Note, b: Note) => (a.createdAt > b.createdAt) ? 1 : -1);
            this.ownNotes = ownNotes;
        }
        this.notes.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1);
    }

    addNote(note: Note) {
        this.ownNotes.push(note);
        let jsonNote = JSON.stringify(this.ownNotes);
        localStorage.setItem("myNote", jsonNote);
    }
}
