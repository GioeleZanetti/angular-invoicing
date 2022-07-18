import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { dummyDetails } from '../models/projectDetails';

import { ProjectDetailsHeaderComponent } from './project-details-header.component';

describe('ProjectDetailsHeaderComponent', () => {
	let component: ProjectDetailsHeaderComponent;
	let fixture: ComponentFixture<ProjectDetailsHeaderComponent>;
	const initialState = {};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProjectDetailsHeaderComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectDetailsHeaderComponent);
		component = fixture.componentInstance;
		component['project'] = dummyDetails;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should dispatch releaseCurrentProject action', () => {
		const spy = spyOn(component['store'], 'dispatch');
		component.resetCurrentProject();
		expect(spy).toHaveBeenCalled();
	});
});
