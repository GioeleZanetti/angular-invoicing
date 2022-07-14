import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { ProjectState } from '../reducers/project.reducer';
import { ProjectEffects } from './project.effects';
import { ProjectService } from 'src/app/services/project.service';
import {
	loadProjects,
	projectsLoadedSuccessfully,
	projectsLoadedUnsuccessfully,
} from '../actions/project.actions';
import { dummyProject } from 'src/app/models/project';

describe('ProjectEffects', () => {
	const initialState: ProjectState = {
		projectList: [],
		error: '',
	};
	const service = jasmine.createSpyObj('ProjectService', ['getProjects']);
	let effects: ProjectEffects;
	let actions: Observable<any>;
	let testScheduler: TestScheduler;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProjectEffects,
				provideMockStore({ initialState }),
				provideMockActions(() => actions),
				{ provide: ProjectService, useValue: service },
			],
		});
		effects = TestBed.inject(ProjectEffects);
		testScheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});
	});

	it('should return projectsLoadedSuccessfully on loadProjects', () => {
		const action = loadProjects();
		const outcome = projectsLoadedSuccessfully({
			projects: [dummyProject],
		});
		testScheduler.run(({ hot, cold, expectObservable }) => {
			actions = hot('-a', { a: action });
			const response = cold('-b|', { b: [dummyProject] });
			service.getProjects.and.returnValue(response);
			expectObservable(effects.loadProjects$).toBe('--b', { b: outcome });
		});
	});

	it('should return projectsLoadedUnsuccessfully on loadProjects if error occurs', () => {
		const error = 'Error while loading projects, please try again later';
		const action = loadProjects();
		const outcome = projectsLoadedUnsuccessfully({
			error: error,
		});
		testScheduler.run(({ hot, cold, expectObservable }) => {
			actions = hot('-a', { a: action });
			const response = cold('-#|', {}, error);
			service.getProjects.and.returnValue(response);
			expectObservable(effects.loadProjects$).toBe('--b', { b: outcome });
		});
	});
});
