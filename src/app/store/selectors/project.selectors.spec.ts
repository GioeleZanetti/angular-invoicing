import { dummyFilters } from 'src/app/models/filter';
import { dummyProject, Project, State } from 'src/app/models/project';
import { ProjectState } from '../reducers/project.reducer';
import {
	getError,
	getExecutives,
	getFilteredProjects,
	getProjects,
} from './project.selectors';

describe('ProjectSelectors', () => {
	const initialState: ProjectState = {
		projectList: [dummyProject, dummyProject],
		error: 'error',
		filters: dummyFilters,
	};
	let project: Project = dummyProject;

	beforeEach(() => {
		initialState.projectList = [dummyProject];
		project = dummyProject;
	});

	it('should get project list', () => {
		const result = getProjects.projector(initialState);
		expect(result).toEqual([dummyProject]);
	});

	it('should get error', () => {
		const result = getError.projector(initialState);
		expect(result).toEqual(initialState.error);
	});

	it('should get executive officers of all projects only once if repeated', () => {
		initialState.projectList = [dummyProject, dummyProject];
		const executives = getExecutives.projector(initialState);
		expect(executives).toEqual(['Johnny']);
	});

	it('should get no projects if id isnt present', () => {
		const state: ProjectState = {
			projectList: [dummyProject],
			error: '',
			filters: {
				id: 1111,
				projectName: '',
				invoiceTarget: '',
				executiveOfficer: '',
				difference: '',
			},
		};
		const projects = getFilteredProjects.projector(state);
		expect(projects).toEqual([]);
	});

	it('should get projects if id is present', () => {
		const state: ProjectState = {
			projectList: [dummyProject],
			error: '',
			filters: {
				id: 2131,
				projectName: '',
				invoiceTarget: '',
				executiveOfficer: '',
				difference: '',
			},
		};
		const projects = getFilteredProjects.projector(state);
		expect(projects).toEqual([dummyProject]);
	});

	it('should get projects if name is present', () => {
		const state: ProjectState = {
			projectList: [dummyProject],
			error: '',
			filters: {
				projectName: 'Project Billboard',
				invoiceTarget: '',
				executiveOfficer: '',
				difference: '',
			},
		};
		const projects = getFilteredProjects.projector(state);
		expect(projects).toEqual([dummyProject]);
	});

	it('should get projects if invoice target is present', () => {
		const state: ProjectState = {
			projectList: [dummyProject],
			error: '',
			filters: {
				projectName: '',
				invoiceTarget: 'SuS',
				executiveOfficer: '',
				difference: '',
			},
		};
		const projects = getFilteredProjects.projector(state);
		expect(projects).toEqual([dummyProject]);
	});

	it('should get projects if state is correct', () => {
		project.state = State.Check;
		const state: ProjectState = {
			projectList: [project],
			error: '',
			filters: {
				projectName: '',
				invoiceTarget: '',
				executiveOfficer: '',
				difference: '',
				state: State.Check,
			},
		};
		const projects = getFilteredProjects.projector(state);
		expect(projects).toEqual([project]);
	});

	it('should get projects if difference is negative', () => {
		project.outgoingInvoiceAmount = 0;
		const state: ProjectState = {
			projectList: [project],
			error: '',
			filters: {
				projectName: '',
				invoiceTarget: '',
				executiveOfficer: '',
				difference: 'negative',
			},
		};
		const projects = getFilteredProjects.projector(state);
		expect(projects).toEqual([project]);
	});

	it('should get projects if difference is positive', () => {
		project.outgoingInvoiceAmount = 111111;
		const state: ProjectState = {
			projectList: [project],
			error: '',
			filters: {
				projectName: '',
				invoiceTarget: '',
				executiveOfficer: '',
				difference: 'positive',
			},
		};
		const projects = getFilteredProjects.projector(state);
		expect(projects).toEqual([project]);
	});

	it('should get projects if difference is none', () => {
		project.outgoingInvoiceAmount = project.amount;
		const state: ProjectState = {
			projectList: [project],
			error: '',
			filters: {
				projectName: '',
				invoiceTarget: '',
				executiveOfficer: '',
				difference: 'none',
			},
		};
		const projects = getFilteredProjects.projector(state);
		expect(projects).toEqual([project]);
	});
});
