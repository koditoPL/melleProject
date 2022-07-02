import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsLoggedComponent } from './is-logged.component';

describe('IsLoggedComponent', () => {
  let component: IsLoggedComponent;
  let fixture: ComponentFixture<IsLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsLoggedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
