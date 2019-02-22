import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationBarComponent } from './documentation-bar.component';

describe('DocumentationBarComponent', () => {
  let component: DocumentationBarComponent;
  let fixture: ComponentFixture<DocumentationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
