import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { dummyFilters } from '../models/filter';
import { State } from '../models/project';
import {
	updateExecutive,
	updateId,
	updateName,
	updateState,
	updateTarget,
} from '../store/actions/project.actions';
import { ProjectState } from '../store/reducers/project.reducer';
import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
	let component: FilterComponent;
	let fixture: ComponentFixture<FilterComponent>;
	const initialState: ProjectState = {
		projectList: [],
		error: '',
		filters: dummyFilters,
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FilterComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();

		fixture = TestBed.createComponent(FilterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should set project id to a certain value if value is not zero', () => {
		component.updateProjectId('21');
		expect(component['id']).toEqual(21);
	});

	it('should set project id to undefined if value is zero', () => {
		component.updateProjectId('0');
		expect(component['id']).toEqual(undefined);
	});

	it('should dispatch updateId action', () => {
		const spy = spyOn(component['store'], 'dispatch');
		component.updateProjectId('0');
		expect(spy).toHaveBeenCalledWith(updateId({ id: undefined }));
	});

	it('should set project name to a certain value', () => {
		const projectName = 'Project One';
		component.updateProjectName(projectName);
		expect(component['projectName']).toEqual(projectName);
	});

	it('should dispatch updateName action', () => {
		const spy = spyOn(component['store'], 'dispatch');
		const projectName = 'Project One';
		component.updateProjectName(projectName);
		expect(spy).toHaveBeenCalledWith(updateName({ name: projectName }));
	});

	it('should set invoice target to a certain value', () => {
		const target = 'Bill';
		component.updateInvoiceTarget(target);
		expect(component['invoiceTarget']).toEqual(target);
	});

	it('should dispatch updateTarget action', () => {
		const spy = spyOn(component['store'], 'dispatch');
		const target = 'Bill';
		component.updateInvoiceTarget(target);
		expect(spy).toHaveBeenCalledWith(updateTarget({ target: target }));
	});

	it('should set executive Officer to a certain value', () => {
		const officer = 'Bob';
		component.updateExecutiveOfficer = officer;
		expect(component['executiveOfficer']).toEqual(officer);
	});

	it('should dispatch updateOfficer action', () => {
		const spy = spyOn(component['store'], 'dispatch');
		const officer = 'Bob';
		component.updateExecutiveOfficer = officer;
		expect(spy).toHaveBeenCalledWith(
			updateExecutive({ executive: officer })
		);
	});

	it('should return executiveOfficer', () => {
		const officer = 'Bob';
		component['executiveOfficer'] = officer;
		expect(component.updateExecutiveOfficer).toEqual(officer);
	});

	it('should set state to a certain value', () => {
		const state: State = State.Check;
		component.updateState(state);
		expect(component['state']).toEqual(state);
	});

	it('should dispatch updateState action', () => {
		const spy = spyOn(component['store'], 'dispatch');
		const state: State = State.Check;
		component.updateState(state);
		expect(spy).toHaveBeenCalledWith(updateState({ status: state }));
	});

	it('should return state', () => {
		component['state'] = State.Ready;
		expect(component.status).toEqual(State.Ready);
	});

	it('should set difference to a certain value', () => {
		const difference = 'all';
		component.updateDifference = difference;
		expect(component['difference']).toEqual(difference);
	});

	it('should return difference', () => {
		const difference = 'all';
		component['difference'] = difference;
		expect(component.updateDifference).toEqual(difference);
	});
});
