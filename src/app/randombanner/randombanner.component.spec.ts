import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandombannerComponent } from './randombanner.component';

describe('RandombannerComponent', () => {
  let component: RandombannerComponent;
  let fixture: ComponentFixture<RandombannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandombannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandombannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
