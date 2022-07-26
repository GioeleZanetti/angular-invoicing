import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Project } from '../models/project';
import { getProjectDetailsById } from '../store/actions/project-details.actions';
import { loadProjects } from '../store/actions/project.actions';
import { ProjectState } from '../store/reducers/project.reducer';
import { getFilteredProjects } from '../store/selectors/project.selectors';
import { ProjectUtilsService } from '../utils/project-utils.service';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
	public projects$: Observable<Project[]> = this.store.pipe(
		select(getFilteredProjects)
	);
	public columnToDisplay: string[] = [
		'status',
		'id',
		'name',
		'invoiceTarget',
		'amount',
		'billable',
		'minus',
		'arrow',
	];

	constructor(
		private store: Store<ProjectState>,
		private service: ProjectUtilsService
	) {}

	ngOnInit(): void {
		this.store.dispatch(loadProjects());
	}

	public statusToText(project: Project): string {
		return this.service.statusToText(project);
	}

	public getDetailsOfProject(project: Project): void {
		this.store.dispatch(getProjectDetailsById({ id: project.projectId }));
	}
}
