import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArbComponent } from './edit-arb.component';

describe('EditArbComponent', () => {
  let component: EditArbComponent;
  let fixture: ComponentFixture<EditArbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
