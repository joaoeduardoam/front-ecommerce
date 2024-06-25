import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiInteractComponent } from './api-interact.component';

describe('ApiInteractComponent', () => {
  let component: ApiInteractComponent;
  let fixture: ComponentFixture<ApiInteractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiInteractComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiInteractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
