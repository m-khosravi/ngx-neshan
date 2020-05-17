import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeshanStaticComponent } from './neshan-static.component';

describe('NeshanStaticComponent', () => {
  let component: NeshanStaticComponent;
  let fixture: ComponentFixture<NeshanStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeshanStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeshanStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
