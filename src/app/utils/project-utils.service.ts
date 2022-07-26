import { Injectable } from '@angular/core';
import { Project, State } from '../models/project';

@Injectable({
	providedIn: 'root',
})
export class ProjectUtilsService {
	constructor() {}

	public statusToText(project: Project): string {
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
}
