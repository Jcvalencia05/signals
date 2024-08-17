import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingalEjemplo2Component } from './singal-ejemplo2.component';

describe('SingalEjemplo2Component', () => {
  let component: SingalEjemplo2Component;
  let fixture: ComponentFixture<SingalEjemplo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingalEjemplo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingalEjemplo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
