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

	public statusToText(project: Project | ProjectDetails): string {
		const states: Record<State, string> = {
			[State.Open]: 'offen',
			[State.Ready]: 'fertig',
			[State.Waiting]: 'wartend',
			[State.Check]: 'prüfen',
		};
		return states[project.state];
	}

	public statusToClass(project: Project | ProjectDetails): string {
		const states: Record<State, string> = {
			[State.Open]: 'open',
			[State.Ready]: 'done',
			[State.Waiting]: 'waiting',
			[State.Check]: 'check',
		};
		return states[project.state];
	}

	private addDigitIfHasLessThanTwo(number: string): string {
		if (number.length === 1) {
			return '0' + number;
		} else {
			return number;
		}
	}
}
