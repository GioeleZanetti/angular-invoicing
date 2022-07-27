import { Action, createReducer, on } from '@ngrx/store';

import { ProjectDetails } from 'src/app/models/projectDetails';
import {
	releaseCurrentProject,
	setCurrentProject,
	setError,
} from '../actions/project-details.actions';

export interface ProjectDetailsState {
	currentProject: ProjectDetails;
	error?: string;
}

const initialState: ProjectDetailsState = {
	currentProject: <ProjectDetails>{},
};

export const projectDetailsReducer = createReducer(
	initialState,
	on(setCurrentProject, (state, { project }) => ({
		...state,
		currentProject: project,
		error: undefined,
	})),
	on(releaseCurrentProject, (state) => ({
		...state,
		currentProject: <ProjectDetails>{},
		error: undefined,
	})),
	on(setError, (state, { error }) => ({
		...state,
		error: error,
		currentProject: <ProjectDetails>{},
	}))
);

export function reducer(state: ProjectDetailsState, action: Action) {
	return projectDetailsReducer(state, action);
}
