import { dummyProject } from 'src/app/models/project';
import { ProjectState } from '../reducers/project.reducer';
import { getError, getProjects } from './project.selectors';

describe('ProjectSelectors', () => {
	const initialState: ProjectState = {
		projectList: [dummyProject],
		error: 'error',
	};

	it('should get project list', () => {
		const result = getProjects.projector(initialState);
		expect(result).toEqual([dummyProject]);
	});

	it('should get error', () => {
		const result = getError.projector(initialState);
		expect(result).toEqual(initialState.error);
	});
});
