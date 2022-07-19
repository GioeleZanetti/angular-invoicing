import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dummyDetails } from '../models/projectDetails';

import { ProjectDetailsPositionsComponent } from './project-details-positions.component';

describe('ProjectDetailsPositionsComponent', () => {
	let component: ProjectDetailsPositionsComponent;
	let fixture: ComponentFixture<ProjectDetailsPositionsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProjectDetailsPositionsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectDetailsPositionsComponent);
		component = fixture.componentInstance;
		component.project = dummyDetails;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
