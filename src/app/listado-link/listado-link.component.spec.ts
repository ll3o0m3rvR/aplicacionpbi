import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLinkComponent } from './listado-link.component';

describe('ListadoLinkComponent', () => {
  let component: ListadoLinkComponent;
  let fixture: ComponentFixture<ListadoLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
