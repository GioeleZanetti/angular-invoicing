import { Component, Input } from '@angular/core';
import { Position } from '../models/projectDetails';

@Component({
	selector: 'app-project-details-postion-info',
	templateUrl: './project-details-postion-info.component.html',
	styleUrls: ['./project-details-postion-info.component.scss'],
})
export class ProjectDetailsPostionInfoComponent {
	@Input() position!: Position;
	@Input() index!: number;

	constructor() {}

	public toClass(): string {
		if (this.index % 2 == 0) {
			return 'even';
		} else {
			return 'odd';
		}
	}
}
