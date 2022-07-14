import { dummyProject } from 'src/app/models/project';
import {
	loadProjects,
	loadProjectsKey,
	projectsLoadedSuccessfully,
	projectsLoadedSuccessfullyKey,
	projectsLoadedUnsuccessfully,
	projectsLoadedUnsuccessfullyKey,
} from './project.actions';

describe('ProjectActions', () => {
	it('should create loadProjects action', () => {
		const action = loadProjects();
		expect(action.type).toEqual(loadProjectsKey);
	});

	it('should create projectsLoadedSuccessfully action', () => {
		const payload = { projects: [dummyProject] };
		const action = projectsLoadedSuccessfully(payload);
		expect(action.type).toEqual(projectsLoadedSuccessfullyKey);
		expect(action.projects).toEqual(payload.projects);
	});

	it('should create projectsLoadedUnsuccessfully action', () => {
		const payload = { error: 'error' };
		const action = projectsLoadedUnsuccessfully(payload);
		expect(action.type).toEqual(projectsLoadedUnsuccessfullyKey);
		expect(action.error).toEqual(payload.error);
	});
});
