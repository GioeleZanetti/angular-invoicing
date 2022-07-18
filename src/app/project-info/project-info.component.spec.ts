import { LOCALE_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

import { provideMockStore } from '@ngrx/store/testing';

import { dummyProject, State } from '../models/project';
import { ProjectInfoComponent } from './project-info.component';
import { ProjectDetails } from '../models/projectDetails';
import { getProjectDetailsById } from '../store/actions/project-details.actions';

registerLocaleData(localeDe, 'de');
describe('ProjectInfoComponent', () => {
	let component: ProjectInfoComponent;
	let fixture: ComponentFixture<ProjectInfoComponent>;
	const initialState = {
		projectDetails: { currentProject: <ProjectDetails>{} },
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProjectInfoComponent],
			providers: [
				{ provide: LOCALE_ID, useVaule: 'de-DE' },
				provideMockStore({ initialState }),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectInfoComponent);
		component = fixture.componentInstance;
		component.project = dummyProject;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should translate state to "prüfen"', () => {
		component.project.state = State.Check;
		expect(component.toText()).toEqual('prüfen');
	});

	it('should translate state to "offen"', () => {
		component.project.state = State.Open;
		expect(component.toText()).toEqual('offen');
	});

	it('should translate state to "fertig"', () => {
		component.project.state = State.Ready;
		expect(component.toText()).toEqual('fertig');
	});

	it('should translate state to "wartend"', () => {
		component.project.state = State.Waiting;
		expect(component.toText()).toEqual('wartend');
	});

	it('should dispath getProjectDetailsById action', () => {
		component['project'] = dummyProject;
		const action = getProjectDetailsById({ id: dummyProject.projectId });
		const spy = spyOn(component['store'], 'dispatch');
		component.setThisProjectAsCurrentProject();
		expect(spy).toHaveBeenCalledWith(action);
	});
});
