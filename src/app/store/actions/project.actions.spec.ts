import { dummyProject, State } from 'src/app/models/project';
import {
	loadProjects,
	loadProjectsKey,
	projectsLoadedSuccessfully,
	projectsLoadedSuccessfullyKey,
	projectsLoadedUnsuccessfully,
	projectsLoadedUnsuccessfullyKey,
	updateDifference,
	updateDifferenceKey,
	updateExecutive,
	updateExecutiveKey,
	updateId,
	updateIdKey,
	updateName,
	updateNameKey,
	updateState,
	updateStateKey,
	updateTarget,
	updateTargetKey,
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

	it('should create updateId action', () => {
		const payload = { id: 11 };
		const action = updateId(payload);
		expect(action.type).toEqual(updateIdKey);
		expect(action.id).toEqual(payload.id);
	});

	it('should create updateName action', () => {
		const payload = { name: 'Project Six' };
		const action = updateName(payload);
		expect(action.type).toEqual(updateNameKey);
		expect(action.name).toEqual(payload.name);
	});

	it('should create updateTarget action', () => {
		const payload = { target: 'Bill' };
		const action = updateTarget(payload);
		expect(action.type).toEqual(updateTargetKey);
		expect(action.target).toEqual(payload.target);
	});

	it('should create updateId action', () => {
		const payload = { executive: 'Bob' };
		const action = updateExecutive(payload);
		expect(action.type).toEqual(updateExecutiveKey);
		expect(action.executive).toEqual(payload.executive);
	});

	it('should create updateState action', () => {
		const payload = { status: State.Waiting };
		const action = updateState(payload);
		expect(action.type).toEqual(updateStateKey);
		expect(action.status).toEqual(payload.status);
	});

	it('should create updateDifference action', () => {
		const payload = { difference: 'None' };
		const action = updateDifference(payload);
		expect(action.type).toEqual(updateDifferenceKey);
		expect(action.difference).toEqual(payload.difference);
	});
});
