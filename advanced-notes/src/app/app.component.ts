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
            author: 'Giovanni Bianchi',
            createdAt: new Date("2020-02-28"),
            imgString: 'user1',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida ante vitae sollicitudin pulvinar. Sed maximus, ex ac viverra tempus, ex nulla condimentum est, sit amet bibendum ligula nisi eget dolor.'
        },
        {
            author: 'Carlo Verde',
            createdAt: new Date("2020-02-25"),
            imgString: 'user3',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
        ,
        {
            author: 'Maria Rossi',
            createdAt: new Date("2020-02-26"),
            imgString: 'user2',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ]
    ownNotes: Note[] = [];
    
    constructor() { }
    
    ngOnInit(): void {
        //parse notes and sort on attribute date
        let ownNotes = JSON.parse(localStorage.getItem("myNote") || '[]');
        if (ownNotes.length) {
            ownNotes.sort((a: Note, b: Note) => (a.createdAt > b.createdAt) ? 1 : -1);
            this.ownNotes = ownNotes;
        }
        this.notes.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1);
    }

    /**
    * add a new note into json myNote
    * @param {Note} note
    * @return {void}
    */
    addNote(note: Note) {
        this.ownNotes.push(note);
        let jsonNote = JSON.stringify(this.ownNotes);
        localStorage.setItem("myNote", jsonNote);
    }
}
