import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormNoteComponent } from './components/form-note/form-note.component';
import { RightNoteComponent } from './components/right-note/right-note.component';
import { LeftNoteComponent } from './components/left-note/left-note.component';
import { MessageComponent } from './components/message/message.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FormNoteComponent,
    RightNoteComponent,
    LeftNoteComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
