import { dummyFilters } from 'src/app/models/filter';
import { dummyProject, State } from 'src/app/models/project';
import {
	projectsLoadedSuccessfully,
	projectsLoadedUnsuccessfully,
	updateDifference,
	updateExecutive,
	updateId,
	updateName,
	updateState,
	updateTarget,
} from '../actions/project.actions';
import { ProjectState, reducer } from './project.reducer';

describe('ProjectReduer', () => {
	const initialState: ProjectState = {
		projectList: [],
		error: '',
		filters: dummyFilters,
	};

	it('should change projectList on ProjectActions.projectsLoadedSuccessfully', () => {
		const action = projectsLoadedSuccessfully({ projects: [dummyProject] });
		const newState: ProjectState = {
			projectList: [dummyProject],
			error: '',
			filters: dummyFilters,
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should change error on ProjectActions.projectsLoadedUnsuccessfully', () => {
		const action = projectsLoadedUnsuccessfully({ error: 'error' });
		const newState: ProjectState = {
			projectList: [],
			error: 'error',
			filters: dummyFilters,
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should change id on ProjectActions.updateId', () => {
		const id = 21;
		const action = updateId({ id: id });
		let filters = dummyFilters;
		filters.id = id;
		const newState: ProjectState = {
			projectList: [],
			error: '',
			filters: filters,
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should change projectName on ProjectActions.updateName', () => {
		const name = 'Project Apollo';
		const action = updateName({ name: name });
		let filters = dummyFilters;
		filters.projectName = name;
		const newState: ProjectState = {
			projectList: [],
			error: '',
			filters: filters,
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should change target on ProjectActions.updateTarget', () => {
		const target = 'Bill';
		const action = updateTarget({ target: target });
		let filters = dummyFilters;
		filters.invoiceTarget = target;
		const newState: ProjectState = {
			projectList: [],
			error: '',
			filters: filters,
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should change executive on ProjectActions.updateExecutive', () => {
		const executive = 'Bob';
		const action = updateExecutive({ executive: executive });
		let filters = dummyFilters;
		filters.executiveOfficer = executive;
		const newState: ProjectState = {
			projectList: [],
			error: '',
			filters: filters,
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should change state on ProjectActions.updateState', () => {
		const state: State = State.Open;
		const action = updateState({ status: state });
		let filters = dummyFilters;
		filters.state = state;
		const newState: ProjectState = {
			projectList: [],
			error: '',
			filters: filters,
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});

	it('should change difference on ProjectActions.updateDifference', () => {
		const difference = 'positiv';
		const action = updateDifference({ difference: difference });
		let filters = dummyFilters;
		filters.difference = difference;
		const newState: ProjectState = {
			projectList: [],
			error: '',
			filters: filters,
		};
		expect(reducer(initialState, action)).toEqual(newState);
	});
});
