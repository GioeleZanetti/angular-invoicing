import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProjectDetails } from '../models/projectDetails';
import { ProjectDetailsState } from '../store/reducers/project-details.reducer';
import { getCurrentProject } from '../store/selectors/project-details.selectors';

@Component({
	selector: 'app-project-details',
	templateUrl: './project-details.component.html',
	styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
	public project$: Observable<ProjectDetails> = this.store.pipe(
		select(getCurrentProject)
	);

	constructor(private store: Store<ProjectDetailsState>) {}
}
