import { createAction, props } from '@ngrx/store';

import { Project, State } from 'src/app/models/project';

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

export const updateIdKey = '[Project Filter] Update Id';
export const updateId = createAction(updateIdKey, props<{ id?: number }>());

export const updateNameKey = '[Project Filter] Update Project Name';
export const updateName = createAction(
	updateNameKey,
	props<{ name: string }>()
);

export const updateTargetKey = '[Project Filter] Update Invoice Target';
export const updateTarget = createAction(
	updateTargetKey,
	props<{ target: string }>()
);

export const updateExecutiveKey = '[Project Filter] Update Executive Officer';
export const updateExecutive = createAction(
	updateExecutiveKey,
	props<{ executive: string }>()
);

export const updateStateKey = '[Project Filter] Update State';
export const updateState = createAction(
	updateStateKey,
	props<{ status?: State }>()
);

export const updateDifferenceKey = '[Project Filter] Update Difference';
export const updateDifference = createAction(
	updateDifferenceKey,
	props<{ difference: string }>()
);
