import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsTabsComponent } from './project-details-tabs.component';

describe('ProjectDetailsTabsComponent', () => {
  let component: ProjectDetailsTabsComponent;
  let fixture: ComponentFixture<ProjectDetailsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
