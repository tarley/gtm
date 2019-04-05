import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoNovoComponent } from './medicamento-novo.component';

describe('MedicamentoNovoComponent', () => {
  let component: MedicamentoNovoComponent;
  let fixture: ComponentFixture<MedicamentoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
