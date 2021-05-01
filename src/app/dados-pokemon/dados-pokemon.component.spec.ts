import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPokemonComponent } from './dados-pokemon.component';

describe('DadosPokemonComponent', () => {
  let component: DadosPokemonComponent;
  let fixture: ComponentFixture<DadosPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
