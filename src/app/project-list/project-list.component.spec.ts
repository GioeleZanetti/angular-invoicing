import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { dummyProject, State } from '../models/project';
import { getProjectDetailsById } from '../store/actions/project-details.actions';
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

	it('should dispatch getProjectDetailsById action', () => {
		const spy = spyOn(component['store'], 'dispatch');
		component.getDetailsOfProject(dummyProject);
		expect(spy).toHaveBeenCalledWith(
			getProjectDetailsById({ id: dummyProject.projectId })
		);
	});

	it('should translate state to offen', () => {
		const dummy = dummyProject;
		dummy.state = State.Open;
		expect(component.statusToText(dummy)).toEqual('offen');
	});

	it('should translate state to prüfen', () => {
		const dummy = dummyProject;
		dummy.state = State.Check;
		expect(component.statusToText(dummy)).toEqual('prüfen');
	});

	it('should translate state to fertig', () => {
		const dummy = dummyProject;
		dummy.state = State.Ready;
		expect(component.statusToText(dummy)).toEqual('fertig');
	});

	it('should translate state to wartend', () => {
		const dummy = dummyProject;
		dummy.state = State.Waiting;
		expect(component.statusToText(dummy)).toEqual('wartend');
	});
});
