import { Component, Input } from '@angular/core';
import { ProjectDetails } from '../models/projectDetails';

@Component({
	selector: 'app-project-details-card',
	templateUrl: './project-details-card.component.html',
	styleUrls: ['./project-details-card.component.scss'],
})
export class ProjectDetailsCardComponent {
	@Input() project!: ProjectDetails;
	constructor() {}

	public toColor(): string {
		return this.project.outgoingInvoiceAmount -
			this.project.invoiceItemTotal.amount >=
			0
			? 'green'
			: 'red';
	}
}
