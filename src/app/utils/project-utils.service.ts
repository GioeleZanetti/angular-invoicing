import { Injectable } from '@angular/core';

import { Project } from '../models/project';
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

	public statusToText(project: Project | ProjectDetails): string {
		const states = ['wartend', 'offen', 'fertig', 'prüfen'];
		return states[project.state - 1];
	}

	public statusToClass(project: Project | ProjectDetails): string {
		const states = ['waiting', 'open', 'done', 'check'];
		return states[project.state - 1];
	}

	private addDigitIfHasLessThanTwo(number: string): string {
		if (number.length === 1) {
			return '0' + number;
		} else {
			return number;
		}
	}
}
