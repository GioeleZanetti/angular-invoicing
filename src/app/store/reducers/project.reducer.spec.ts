import { dummyProject } from 'src/app/models/project';
import {
	projectsLoadedSuccessfully,
	projectsLoadedUnsuccessfully,
} from '../actions/project.actions';
import { ProjectState, reducer } from './project.reducer';

describe('ProjectReduer', () => {
	const initialState: ProjectState = {
		projectList: [],
		error: '',
	};

	it('should change projectList on ProjectActions.projectsLoadedSuccessfully', () => {
		const action = projectsLoadedSuccessfully({ projects: [dummyProject] });
		const newState: ProjectState = {
			projectList: [dummyProject],
			error: '',
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should change error on ProjectActions.projectsLoadedUnsuccessfully', () => {
		const action = projectsLoadedUnsuccessfully({ error: 'error' });
		const newState: ProjectState = {
			projectList: [],
			error: 'error',
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});
});
