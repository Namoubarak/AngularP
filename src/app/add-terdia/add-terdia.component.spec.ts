import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTerdiaComponent } from './add-terdia.component';

describe('AddTerdiaComponent', () => {
  let component: AddTerdiaComponent;
  let fixture: ComponentFixture<AddTerdiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTerdiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTerdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
