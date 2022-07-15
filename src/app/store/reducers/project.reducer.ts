import { createReducer, Action, on } from '@ngrx/store';

import { Filter } from 'src/app/models/filter';
import { Project } from 'src/app/models/project';
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

export interface ProjectState {
	projectList: Project[];
	error: string;
	filters: Filter;
}

const initialState: ProjectState = {
	projectList: [],
	error: '',
	filters: {
		projectName: '',
		invoiceTarget: '',
		executiveOfficer: 'all',
		difference: 'all',
	},
};

export const projectReducer = createReducer(
	initialState,
	on(projectsLoadedSuccessfully, (state, { projects }) => ({
		...state,
		projectList: projects,
	})),
	on(projectsLoadedUnsuccessfully, (state, { error }) => ({
		...state,
		error: error,
	})),
	on(updateId, (state, { id }) => ({
		...state,
		filters: { ...state.filters, id: id },
	})),
	on(updateName, (state, { name }) => ({
		...state,
		filters: { ...state.filters, projectName: name },
	})),
	on(updateTarget, (state, { target }) => ({
		...state,
		filters: { ...state.filters, invoiceTarget: target },
	})),
	on(updateExecutive, (state, { executive }) => ({
		...state,
		filters: { ...state.filters, executiveOfficer: executive },
	})),
	on(updateState, (state, { status }) => ({
		...state,
		filters: { ...state.filters, state: status },
	})),
	on(updateDifference, (state, { difference }) => ({
		...state,
		filters: { ...state.filters, difference: difference },
	}))
);

export function reducer(state: ProjectState, action: Action) {
	return projectReducer(state, action);
}
