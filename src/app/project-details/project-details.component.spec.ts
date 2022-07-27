import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { ProjectDetailsComponent } from './project-details.component';

describe('ProjectDetailsComponent', () => {
	let component: ProjectDetailsComponent;
	let fixture: ComponentFixture<ProjectDetailsComponent>;
	const initialState = {};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProjectDetailsComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
