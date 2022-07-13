import { createReducer, Action, on } from '@ngrx/store';
import { Project } from 'src/app/models/project';
import {
	projectsLoadedSuccessfully,
	projectsLoadedUnsuccessfully,
} from '../actions/project.actions';

export interface ProjectState {
	projectList: Project[];
	error: string;
}

const initialState: ProjectState = {
	projectList: [],
	error: '',
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
	}))
);
