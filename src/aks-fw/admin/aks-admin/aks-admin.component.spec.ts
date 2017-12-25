import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AksAdminComponent } from './aks-admin.component';

describe('AksAdminComponent', () => {
  let component: AksAdminComponent;
  let fixture: ComponentFixture<AksAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AksAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
