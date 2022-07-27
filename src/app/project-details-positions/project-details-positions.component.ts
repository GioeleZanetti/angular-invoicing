import { Component, Input } from '@angular/core';

import { ProjectDetails } from '../models/projectDetails';

@Component({
	selector: 'app-project-details-positions',
	templateUrl: './project-details-positions.component.html',
	styleUrls: ['./project-details-positions.component.scss'],
})
export class ProjectDetailsPositionsComponent {
	@Input() project!: ProjectDetails;
	public columns: string[] = [
		'name',
		'tracker',
		'rate',
		'hours',
		'amount',
		'tip',
		'dots',
	];
}
