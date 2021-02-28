import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightNoteComponent } from './right-note.component';

describe('RightNoteComponent', () => {
  let component: RightNoteComponent;
  let fixture: ComponentFixture<RightNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
