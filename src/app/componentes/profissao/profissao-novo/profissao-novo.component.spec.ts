import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissaoNovoComponent } from './profissao-novo.component';

describe('ProfissaoNovoComponent', () => {
  let component: ProfissaoNovoComponent;
  let fixture: ComponentFixture<ProfissaoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissaoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissaoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
