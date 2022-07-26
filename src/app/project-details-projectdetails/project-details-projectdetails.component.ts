import { Component, Input } from '@angular/core';
import { ProjectDetails } from '../models/projectDetails';
import { ProjectUtilsService } from '../utils/project-utils.service';

@Component({
	selector: 'app-project-details-projectdetails',
	templateUrl: './project-details-projectdetails.component.html',
	styleUrls: ['./project-details-projectdetails.component.scss'],
})
export class ProjectDetailsProjectdetailsComponent {
	@Input() project!: ProjectDetails;
	constructor(private service: ProjectUtilsService) {}

	public formatDate(date: string): string {
		return this.service.formatDate(date);
	}
}
