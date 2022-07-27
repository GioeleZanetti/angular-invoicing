import { TestBed } from '@angular/core/testing';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { dummyDetails } from 'src/app/models/projectDetails';
import { ProjectService } from 'src/app/services/project.service';
import {
	getProjectDetailsById,
	setCurrentProject,
	setError,
} from '../actions/project-details.actions';
import { ProjectDetailsState } from '../reducers/project-details.reducer';
import { ProjectDetailsEffects } from './project-details.effects';

describe('ProjectDetailsEffects', () => {
	const initialState: ProjectDetailsState = {
		currentProject: dummyDetails,
	};
	const service = jasmine.createSpyObj('ProjectService', [
		'getProjectDetailsById',
	]);
	let effects: ProjectDetailsEffects;
	let actions: Observable<any>;
	let testScheduler: TestScheduler;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProjectDetailsEffects,
				provideMockStore({ initialState }),
				provideMockActions(() => actions),
				{ provide: ProjectService, useValue: service },
			],
		});
		effects = TestBed.inject(ProjectDetailsEffects);
		testScheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});
	});

	it('should return setCurrentProject on ProjectDetailsAction.getProjectDetailsById', () => {
		const action = getProjectDetailsById({ id: 1 });
		const outcome = setCurrentProject({
			project: dummyDetails,
		});
		testScheduler.run(({ hot, cold, expectObservable }) => {
			actions = hot('-a', { a: action });
			const response = cold('-b|', { b: dummyDetails });
			service.getProjectDetailsById.and.returnValue(response);
			expectObservable(effects.getProjectsDetailsById$).toBe('--b', {
				b: outcome,
			});
		});
	});

	it('should return setError on ProjectDetailsAction.getProjectDetailsById if error occurs', () => {
		const error = 'Could not find id 1';
		const action = getProjectDetailsById({ id: 1 });
		const outcome = setError({
			error: error,
		});
		testScheduler.run(({ hot, cold, expectObservable }) => {
			actions = hot('-a', { a: action });
			const response = cold('-#|', {}, dummyDetails);
			service.getProjectDetailsById.and.returnValue(response);
			expectObservable(effects.getProjectsDetailsById$).toBe('--b', {
				b: outcome,
			});
		});
	});
});
