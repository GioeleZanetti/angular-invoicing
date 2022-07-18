import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { getProjectDetailsById } from '../store/actions/project-details.actions';
import { ProjectDetailsState } from '../store/reducers/project-details.reducer';
import { ProjectUtilsService } from '../utils/project-utils.service';

@Component({
	selector: 'app-project-info',
	templateUrl: './project-info.component.html',
	styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent {
	@Input() project!: Project;

	constructor(
		private store: Store<ProjectDetailsState>,
		private service: ProjectUtilsService
	) {}

	public toText(): string {
		return this.service.toText(this.project);
	}

	public setThisProjectAsCurrentProject() {
		this.store.dispatch(
			getProjectDetailsById({ id: this.project.projectId })
		);
	}
}
