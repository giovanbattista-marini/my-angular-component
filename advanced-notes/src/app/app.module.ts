import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NoteBoxComponent } from './note-box/note-box.component';
import { NoteContainerComponent } from './note-container/note-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    NoteBoxComponent,
    NoteContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
