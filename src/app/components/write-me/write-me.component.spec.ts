import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteMeComponent } from './write-me.component';

describe('WriteMeComponent', () => {
  let component: WriteMeComponent;
  let fixture: ComponentFixture<WriteMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
