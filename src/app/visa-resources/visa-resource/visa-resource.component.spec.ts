import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaResourceComponent } from './visa-resource.component';

describe('VisaResourceComponent', () => {
  let component: VisaResourceComponent;
  let fixture: ComponentFixture<VisaResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
