import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopContextualComponent } from './for-loop-contextual.component';

describe('ForLoopContextualComponent', () => {
  let component: ForLoopContextualComponent;
  let fixture: ComponentFixture<ForLoopContextualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForLoopContextualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForLoopContextualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
