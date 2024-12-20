import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindReplaceComponent } from './find-replace.component';

describe('FindReplaceComponent', () => {
  let component: FindReplaceComponent;
  let fixture: ComponentFixture<FindReplaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FindReplaceComponent]
    });
    fixture = TestBed.createComponent(FindReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
