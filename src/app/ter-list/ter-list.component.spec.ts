import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerListComponent } from './ter-list.component';

describe('TerListComponent', () => {
  let component: TerListComponent;
  let fixture: ComponentFixture<TerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
