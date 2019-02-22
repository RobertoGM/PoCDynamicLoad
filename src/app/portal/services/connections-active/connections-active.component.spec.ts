import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsActiveComponent } from './connections-active.component';

describe('ConnectionsActiveComponent', () => {
  let component: ConnectionsActiveComponent;
  let fixture: ComponentFixture<ConnectionsActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionsActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
