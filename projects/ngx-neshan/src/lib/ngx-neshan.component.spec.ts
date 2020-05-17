import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNeshanComponent } from './ngx-neshan.component';

describe('NgxNeshanComponent', () => {
  let component: NgxNeshanComponent;
  let fixture: ComponentFixture<NgxNeshanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNeshanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNeshanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
