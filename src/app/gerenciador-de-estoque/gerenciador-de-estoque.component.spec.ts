import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorDeEstoqueComponent } from './gerenciador-de-estoque.component';

describe('GerenciadorDeEstoqueComponent', () => {
  let component: GerenciadorDeEstoqueComponent;
  let fixture: ComponentFixture<GerenciadorDeEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciadorDeEstoqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorDeEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
