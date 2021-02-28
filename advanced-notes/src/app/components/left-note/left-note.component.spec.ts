import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNoteComponent } from './left-note.component';

describe('LeftNoteComponent', () => {
  let component: LeftNoteComponent;
  let fixture: ComponentFixture<LeftNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
