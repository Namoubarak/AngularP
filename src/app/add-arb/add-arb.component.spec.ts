import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArbComponent } from './add-arb.component';

describe('AddArbComponent', () => {
  let component: AddArbComponent;
  let fixture: ComponentFixture<AddArbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
