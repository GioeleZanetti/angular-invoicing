import { createAction, props } from '@ngrx/store';
import { Project } from 'src/app/models/project';

export const loadProjectsKey = '[Projects] Load Projects';
export const loadProjects = createAction(loadProjectsKey);

export const projectsLoadedSuccessfullyKey =
	'[Projects] Projects Loaded Successfully';
export const projectsLoadedSuccessfully = createAction(
	projectsLoadedSuccessfullyKey,
	props<{ projects: Project[] }>()
);

export const projectsLoadedUnsuccessfullyKey =
	'[Projects] Projects Loaded Unsuccessfully';
export const projectsLoadedUnsuccessfully = createAction(
	projectsLoadedUnsuccessfullyKey,
	props<{ error: string }>()
);
