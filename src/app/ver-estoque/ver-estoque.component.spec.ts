import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEstoqueComponent } from './ver-estoque.component';

describe('VerEstoqueComponent', () => {
  let component: VerEstoqueComponent;
  let fixture: ComponentFixture<VerEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEstoqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
