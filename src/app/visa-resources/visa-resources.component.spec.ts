import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VisaResourcesComponent } from './visa-resources.component';

describe('VisaResourcesComponent', () => {
  let component: VisaResourcesComponent;
  let fixture: ComponentFixture<VisaResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
