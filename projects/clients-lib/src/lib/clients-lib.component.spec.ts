import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsLibComponent } from './clients-lib.component';

describe('ClientsLibComponent', () => {
  let component: ClientsLibComponent;
  let fixture: ComponentFixture<ClientsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
