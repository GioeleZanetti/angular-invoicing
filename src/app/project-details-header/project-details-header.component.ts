import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectDetails } from '../models/projectDetails';
import { ProjectService } from '../services/project.service';
import { releaseCurrentProject } from '../store/actions/project-details.actions';
import { ProjectDetailsState } from '../store/reducers/project-details.reducer';
import { ProjectUtilsService } from '../utils/project-utils.service';

@Component({
	selector: 'app-project-details-header',
	templateUrl: './project-details-header.component.html',
	styleUrls: ['./project-details-header.component.scss'],
})
export class ProjectDetailsHeaderComponent {
	@Input() project!: ProjectDetails;

	constructor(
		private service: ProjectUtilsService,
		private store: Store<ProjectDetailsState>
	) {}

	public format(date: string): string {
		return this.service.formatDate(date);
	}

	public resetCurrentProject(): void {
		this.store.dispatch(releaseCurrentProject());
	}

	public statusToText(): string {
		return this.service.statusToText(this.project);
	}
}
