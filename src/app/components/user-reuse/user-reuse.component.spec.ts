import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReuseComponent } from './user-reuse.component';

describe('UserReuseComponent', () => {
  let component: UserReuseComponent;
  let fixture: ComponentFixture<UserReuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReuseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
