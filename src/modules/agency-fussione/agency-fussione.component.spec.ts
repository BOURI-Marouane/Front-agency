import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyFussioneComponent } from './agency-fussione.component';

describe('AgencyFussioneComponent', () => {
  let component: AgencyFussioneComponent;
  let fixture: ComponentFixture<AgencyFussioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyFussioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyFussioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
