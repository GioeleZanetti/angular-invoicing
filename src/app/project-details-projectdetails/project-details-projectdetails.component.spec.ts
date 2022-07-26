import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dummyDetails } from '../models/projectDetails';

import { ProjectDetailsProjectdetailsComponent } from './project-details-projectdetails.component';

describe('ProjectDetailsProjectdetailsComponent', () => {
	let component: ProjectDetailsProjectdetailsComponent;
	let fixture: ComponentFixture<ProjectDetailsProjectdetailsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProjectDetailsProjectdetailsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(
			ProjectDetailsProjectdetailsComponent
		);
		component = fixture.componentInstance;
		component.project = dummyDetails;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
