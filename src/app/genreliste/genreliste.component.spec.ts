import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrelisteComponent } from './genreliste.component';

describe('GenrelisteComponent', () => {
  let component: GenrelisteComponent;
  let fixture: ComponentFixture<GenrelisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenrelisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenrelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
