import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsDokumenteComponent } from './project-details-dokumente.component';

describe('ProjectDetailsDokumenteComponent', () => {
  let component: ProjectDetailsDokumenteComponent;
  let fixture: ComponentFixture<ProjectDetailsDokumenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsDokumenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsDokumenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
