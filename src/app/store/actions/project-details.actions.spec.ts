import { dummyDetails } from 'src/app/models/projectDetails';
import {
	getProjectDetailsById,
	getProjectDetailsByIdKey,
	releaseCurrentProject,
	releaseCurrentProjectKey,
	setCurrentProject,
	setCurrentProjectKey,
	setError,
	setErrorKey,
} from './project-details.actions';

describe('ProjectDetailsAction', () => {
	it('should create getProjectDetailsById action', () => {
		const payload = { id: 21 };
		const action = getProjectDetailsById(payload);
		expect(action.type).toEqual(getProjectDetailsByIdKey);
		expect(action.id).toEqual(payload.id);
	});

	it('should create setCurrentProject action', () => {
		const payload = { project: dummyDetails };
		const action = setCurrentProject(payload);
		expect(action.type).toEqual(setCurrentProjectKey);
		expect(action.project).toEqual(payload.project);
	});

	it('should create setError action', () => {
		const payload = { error: 'error' };
		const action = setError(payload);
		expect(action.type).toEqual(setErrorKey);
		expect(action.error).toEqual(payload.error);
	});

	it('should create releaseCurrentProject action', () => {
		const action = releaseCurrentProject();
		expect(action.type).toEqual(releaseCurrentProjectKey);
	});
});
