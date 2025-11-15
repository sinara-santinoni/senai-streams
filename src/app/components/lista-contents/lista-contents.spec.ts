import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContents } from './lista-contents';

describe('ListaContents', () => {
  let component: ListaContents;
  let fixture: ComponentFixture<ListaContents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaContents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaContents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
