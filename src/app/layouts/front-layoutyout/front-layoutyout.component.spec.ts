import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontLayoutyoutComponent } from './front-layoutyout.component';

describe('FrontLayoutyoutComponent', () => {
  let component: FrontLayoutyoutComponent;
  let fixture: ComponentFixture<FrontLayoutyoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontLayoutyoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontLayoutyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
