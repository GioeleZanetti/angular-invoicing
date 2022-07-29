import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Project, State } from 'src/app/models/project';
import { ProjectState } from '../reducers/project.reducer';

const state = createFeatureSelector<ProjectState>('projects');

export const getProjects = createSelector(
	state,
	(state: ProjectState) => state.projectList
);

export const getFilteredProjects = createSelector(
	state,
	(state: ProjectState) => {
		return filterProjects(state);
	}
);

function filterProjects(state: ProjectState): Project[] {
	let filtered = state.projectList;
	const id: number | undefined = state.filters.id;
	const name = state.filters.projectName;
	const traget = state.filters.invoiceTarget;
	const executive = state.filters.executiveOfficer;
	const status: State | undefined = state.filters.state;
	const difference = state.filters.difference;
	if (id !== undefined) {
		filtered = filtered.filter((project: Project) =>
			project.projectId.toString().includes(id.toString())
		);
	}
	filtered = filtered.filter((project: Project) =>
		project.projectName.includes(name)
	);
	filtered = filtered.filter((project: Project) =>
		project.invoiceTarget.includes(traget)
	);
	if (executive !== 'all') {
		filtered = filtered.filter((project: Project) =>
			project.executiveOfficer.includes(executive)
		);
	}
	if (status !== undefined) {
		filtered = filtered.filter(
			(project: Project) => project.state === status
		);
	}
	if (difference === 'positive') {
		filtered = filtered.filter(
			(project: Project) =>
				project.outgoingInvoiceAmount - project.amount > 0
		);
	} else if (difference === 'negative') {
		filtered = filtered.filter(
			(project: Project) =>
				project.outgoingInvoiceAmount - project.amount < 0
		);
	} else if (difference === 'none') {
		filtered = filtered.filter(
			(project: Project) =>
				project.outgoingInvoiceAmount - project.amount === 0
		);
	}
	return filtered;
}

export const getError = createSelector(
	state,
	(state: ProjectState) => state.error
);

export const getExecutives = createSelector(state, (state: ProjectState) => {
	let executives: string[] = [];
	state.projectList.forEach((project: Project) => {
		const alreadyInArray = executives.find(
			(executive: string) => executive === project.executiveOfficer
		);
		if (alreadyInArray === undefined) {
			executives.push(project.executiveOfficer);
		}
	});
	return executives;
});

export const getProjectSum = createSelector(state, (state: ProjectState) => {
	let sum: number = 0;
	filterProjects(state).forEach((project: Project) => {
		sum += project.amount;
	});
	return sum;
});

export const getPartiallyBillable = createSelector(
	state,
	(state: ProjectState) => {
		let sum: number = 0;
		filterProjects(state).forEach((project: Project) => {
			sum += project.amountPartiallyBillable;
		});
		return sum;
	}
);
