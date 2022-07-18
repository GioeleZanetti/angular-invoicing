import { Injectable } from '@angular/core';
import { Project, State } from '../models/project';
import { ProjectDetails } from '../models/projectDetails';

@Injectable({
	providedIn: 'root',
})
export class ProjectUtilsService {
	constructor() {}

	public formatDate(date: string): string {
		const actualDate = new Date(date);
		return (
			this.addDigitIfHasLessThanTwo(actualDate.getDate().toString()) +
			'.' +
			this.addDigitIfHasLessThanTwo(
				(actualDate.getMonth() + 1).toString()
			) +
			'.' +
			this.addDigitIfHasLessThanTwo(actualDate.getFullYear().toString())
		);
	}

	public toText(project: Project | ProjectDetails): string {
		if (project.state === State.Open) {
			return 'offen';
		} else if (project.state === State.Check) {
			return 'prüfen';
		} else if (project.state === State.Ready) {
			return 'fertig';
		} else {
			return 'wartend';
		}
	}

	private addDigitIfHasLessThanTwo(number: string): string {
		if (number.length === 1) {
			return '0' + number;
		} else {
			return number;
		}
	}
}
