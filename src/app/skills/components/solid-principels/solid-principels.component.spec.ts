import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidPrincipelsComponent } from './solid-principels.component';

describe('SolidPrincipelsComponent', () => {
  let component: SolidPrincipelsComponent;
  let fixture: ComponentFixture<SolidPrincipelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidPrincipelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolidPrincipelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
