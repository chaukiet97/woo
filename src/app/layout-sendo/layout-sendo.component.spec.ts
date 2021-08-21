import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSendoComponent } from './layout-sendo.component';

describe('LayoutSendoComponent', () => {
  let component: LayoutSendoComponent;
  let fixture: ComponentFixture<LayoutSendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
