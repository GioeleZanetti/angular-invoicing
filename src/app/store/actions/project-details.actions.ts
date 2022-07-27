import { createAction, props } from '@ngrx/store';

import { ProjectDetails } from 'src/app/models/projectDetails';

export const getProjectDetailsByIdKey = '[Project Details] Get Project Details';
export const getProjectDetailsById = createAction(
	getProjectDetailsByIdKey,
	props<{ id: number }>()
);

export const setCurrentProjectKey = '[Project Details] Set Current Project';
export const setCurrentProject = createAction(
	setCurrentProjectKey,
	props<{ project: ProjectDetails }>()
);

export const setErrorKey = '[Project Details] Cannot Find Project Id';
export const setError = createAction(setErrorKey, props<{ error: string }>());

export const releaseCurrentProjectKey =
	'[Project Details] Release Current Project';
export const releaseCurrentProject = createAction(releaseCurrentProjectKey);
