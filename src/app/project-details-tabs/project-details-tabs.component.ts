import { Component, Input } from '@angular/core';
import { ProjectDetails } from '../models/projectDetails';

@Component({
	selector: 'app-project-details-tabs',
	templateUrl: './project-details-tabs.component.html',
	styleUrls: ['./project-details-tabs.component.scss'],
})
export class ProjectDetailsTabsComponent {
	@Input() project!: ProjectDetails;
}
