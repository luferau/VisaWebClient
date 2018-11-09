import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaHandlerComponent } from './visa-handler.component';

describe('VisaHandlerComponent', () => {
  let component: VisaHandlerComponent;
  let fixture: ComponentFixture<VisaHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
