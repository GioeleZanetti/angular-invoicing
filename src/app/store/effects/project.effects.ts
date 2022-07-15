import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import {
	loadProjects,
	projectsLoadedSuccessfully,
	projectsLoadedUnsuccessfully,
} from '../actions/project.actions';

@Injectable()
export class ProjectEffects {
	public loadProjects$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadProjects),
			exhaustMap(() =>
				this.service.getProjects().pipe(
					map((projects: Project[]) =>
						projectsLoadedSuccessfully({ projects })
					),
					catchError(() =>
						of(
							projectsLoadedUnsuccessfully({
								error: 'Error while loading projects, please try again later',
							})
						)
					)
				)
			)
		)
	);

	constructor(private actions$: Actions, private service: ProjectService) {}
}
