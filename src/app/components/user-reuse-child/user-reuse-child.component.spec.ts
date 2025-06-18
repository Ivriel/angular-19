import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReuseChildComponent } from './user-reuse-child.component';

describe('UserReuseChildComponent', () => {
  let component: UserReuseChildComponent;
  let fixture: ComponentFixture<UserReuseChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReuseChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReuseChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
