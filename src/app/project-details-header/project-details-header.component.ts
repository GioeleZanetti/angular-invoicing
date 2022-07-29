import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { ProjectDetails } from '../models/projectDetails';
import { releaseCurrentProject } from '../store/actions/project-details.actions';
import { ProjectDetailsState } from '../store/reducers/project-details.reducer';
import { ProjectUtilsService } from '../utils/project-utils.service';

@Component({
	selector: 'app-project-details-header',
	templateUrl: './project-details-header.component.html',
	styleUrls: ['./project-details-header.component.scss'],
})
export class ProjectDetailsHeaderComponent implements OnInit {
	@Input() project!: ProjectDetails;
	public columns: number = 5;

	constructor(
		private service: ProjectUtilsService,
		private store: Store<ProjectDetailsState>
	) {}

	public ngOnInit(): void {
		this.resizeTable({ target: { innerWidth: window.innerWidth } });
	}

	public format(date: string): string {
		return this.service.formatDate(date);
	}

	public resetCurrentProject(): void {
		this.store.dispatch(releaseCurrentProject());
	}

	public toText(): string {
		return this.service.statusToText(this.project);
	}

	public toClass(): string {
		return this.service.statusToClass(this.project);
	}

	public resizeTable(event: any): void {
		this.columns = event.target.innerWidth <= 900 ? 1 : 5;
	}
}
