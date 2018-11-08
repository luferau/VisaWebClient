import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaResourcesListComponent } from './visa-resources-list.component';

describe('VisaResourcesListComponent', () => {
  let component: VisaResourcesListComponent;
  let fixture: ComponentFixture<VisaResourcesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaResourcesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaResourcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
