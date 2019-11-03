import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAdminComponent } from './notes-admin.component';

describe('NotesAdminComponent', () => {
  let component: NotesAdminComponent;
  let fixture: ComponentFixture<NotesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
