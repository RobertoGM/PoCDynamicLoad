import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskAssistanceComponent } from './ask-assistance.component';

describe('AskAssistanceComponent', () => {
  let component: AskAssistanceComponent;
  let fixture: ComponentFixture<AskAssistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskAssistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
