import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { dummyProject } from '../models/project';
import { loadProjects } from '../store/actions/project.actions';

import { ProjectListComponent } from './project-list.component';

describe('ProjectListComponent', () => {
	let component: ProjectListComponent;
	let fixture: ComponentFixture<ProjectListComponent>;
	let initialState = { project: { projectList: [dummyProject] } };

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProjectListComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should dispatch load projects actions when created', () => {
		const spy = spyOn(component['store'], 'dispatch');
		component.ngOnInit();
		expect(spy).toHaveBeenCalledWith(loadProjects());
	});
});
