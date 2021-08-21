import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseAppComponent } from './chose-app.component';

describe('ChoseAppComponent', () => {
  let component: ChoseAppComponent;
  let fixture: ComponentFixture<ChoseAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoseAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
