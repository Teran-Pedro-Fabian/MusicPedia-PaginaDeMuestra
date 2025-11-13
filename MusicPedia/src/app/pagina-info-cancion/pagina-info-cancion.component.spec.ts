import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInfoCancionComponent } from './pagina-info-cancion.component';

describe('PaginaInfoCancionComponent', () => {
  let component: PaginaInfoCancionComponent;
  let fixture: ComponentFixture<PaginaInfoCancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaInfoCancionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaInfoCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
