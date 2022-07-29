import { Component } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProjectState } from '../store/reducers/project.reducer';
import {
	getPartiallyBillable,
	getProjectSum,
} from '../store/selectors/project.selectors';

@Component({
	selector: 'app-project-card',
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
	public sum: Observable<number> = this.store.pipe(select(getProjectSum));
	public billable: Observable<number> = this.store.pipe(
		select(getPartiallyBillable)
	);

	constructor(private store: Store<ProjectState>) {}
}
