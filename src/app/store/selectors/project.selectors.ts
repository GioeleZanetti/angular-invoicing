import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectState } from '../reducers/project.reducer';

const state = createFeatureSelector<ProjectState>('projects');

export const getProjects = createSelector(
  state,
  (state: ProjectState) => state.projectList
)

export const getError = createSelector(
  state,
  (state: ProjectState) => state.error
)
