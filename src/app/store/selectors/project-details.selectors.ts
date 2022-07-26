import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectDetailsState } from '../reducers/project-details.reducer';

const state = createFeatureSelector<ProjectDetailsState>('projectDetails');

export const getCurrentProject = createSelector(
	state,
	(state: ProjectDetailsState) => state.currentProject
);
