import { dummyDetails, ProjectDetails } from 'src/app/models/projectDetails';
import {
	releaseCurrentProject,
	setCurrentProject,
	setError,
} from '../actions/project-details.actions';
import { ProjectDetailsState, reducer } from './project-details.reducer';

describe('ProjectDetailsReducer', () => {
	const initialState: ProjectDetailsState = {
		currentProject: <ProjectDetails>{},
		error: '',
	};

	it('should update currentProject on setCurrentProject', () => {
		const action = setCurrentProject({ project: dummyDetails });
		const newState: ProjectDetailsState = {
			currentProject: dummyDetails,
			error: undefined,
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should update currentProject on releaseCurrentProject', () => {
		const action = releaseCurrentProject();
		const state: ProjectDetailsState = {
			currentProject: dummyDetails,
			error: undefined,
		};
		const newState: ProjectDetailsState = {
			currentProject: <ProjectDetails>{},
			error: undefined,
		};
		expect(reducer(state, action)).toEqual(newState);
	});

	it('should update error on setError', () => {
		const action = setError({ error: 'error' });
		const newState: ProjectDetailsState = {
			currentProject: <ProjectDetails>{},
			error: 'error',
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});
});
