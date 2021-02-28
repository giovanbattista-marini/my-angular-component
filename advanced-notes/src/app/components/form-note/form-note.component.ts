import { Component, EventEmitter, OnInit , Output} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.scss']
})
export class FormNoteComponent implements OnInit {

    noteForm!: FormGroup;
    @Output() formSubmitted  = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.noteForm = new FormGroup({
            author : new FormControl("You"),
            createdAt : new FormControl(),
            imgString : new FormControl("You"),
            msg : new FormControl('', Validators.required)
        })
    }

    onFormSubmitted() {
        this.noteForm.controls.createdAt.setValue(new Date());
        this.formSubmitted.emit(this.noteForm.value);
        this.noteForm.controls.msg.setValue("");
    }
}
