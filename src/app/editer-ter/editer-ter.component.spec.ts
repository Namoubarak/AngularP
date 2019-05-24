import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerTerComponent } from './editer-ter.component';

describe('EditerTerComponent', () => {
  let component: EditerTerComponent;
  let fixture: ComponentFixture<EditerTerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerTerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerTerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
