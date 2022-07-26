import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { State } from '../models/project';
import {
	updateDifference,
	updateExecutive,
	updateId,
	updateName,
	updateState,
	updateTarget,
} from '../store/actions/project.actions';
import { ProjectState } from '../store/reducers/project.reducer';
import { getExecutives } from '../store/selectors/project.selectors';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
	private id?: number;
	private projectName: string = '';
	private invoiceTarget: string = '';
	private executiveOfficer: string = 'all';
	private state?: State;
	private difference: string = 'all';
	public executives$ = this.store.pipe(select(getExecutives));

	public State = State;

	constructor(private store: Store<ProjectState>) {}

	ngOnInit(): void {}

	public updateProjectId(value: string): void {
		const converted = Number(value);
		if (converted !== 0) {
			this.id = converted;
		} else {
			this.id = undefined;
		}
		this.store.dispatch(updateId({ id: this.id }));
	}

	public updateProjectName(value: string): void {
		this.projectName = value;
		this.store.dispatch(updateName({ name: this.projectName }));
	}

	public updateInvoiceTarget(value: string): void {
		this.invoiceTarget = value;
		this.store.dispatch(updateTarget({ target: this.invoiceTarget }));
	}

	public set updateExecutiveOfficer(value: string) {
		this.executiveOfficer = value;
		this.store.dispatch(
			updateExecutive({ executive: this.executiveOfficer })
		);
	}

	public get updateExecutiveOfficer() {
		return this.executiveOfficer;
	}

	public updateState(value?: State) {
		this.state = value;
		this.store.dispatch(updateState({ status: this.state }));
	}

	public get status(): State | undefined {
		return this.state;
	}

	public set updateDifference(value: string) {
		this.difference = value;
		this.store.dispatch(updateDifference({ difference: this.difference }));
	}

	public get updateDifference(): string {
		return this.difference;
	}
}
