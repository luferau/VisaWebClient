import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaResourceDetailComponent } from './visa-resource-detail.component';

describe('VisaResourceComponent', () => {
  let component: VisaResourceDetailComponent;
  let fixture: ComponentFixture<VisaResourceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaResourceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaResourceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
