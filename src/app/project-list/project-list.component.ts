import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Project } from '../models/project';
import { loadProjects } from '../store/actions/project.actions';
import { ProjectState } from '../store/reducers/project.reducer';
import { getFilteredProjects } from '../store/selectors/project.selectors';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
	public projects$: Observable<Project[]> = this.store.pipe(
		select(getFilteredProjects)
	);

	constructor(private store: Store<ProjectState>) {}

	ngOnInit(): void {
		this.store.dispatch(loadProjects());
	}
}
