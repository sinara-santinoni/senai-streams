import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesContent } from './detalhes-content';

describe('DetalhesContent', () => {
  let component: DetalhesContent;
  let fixture: ComponentFixture<DetalhesContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
