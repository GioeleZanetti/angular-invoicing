import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, of } from 'rxjs';
import { map } from 'rxjs';
import { ProjectDetails } from 'src/app/models/projectDetails';
import { ProjectService } from 'src/app/services/project.service';
import {
	getProjectDetailsById,
	setCurrentProject,
	setError,
} from '../actions/project-details.actions';

@Injectable()
export class ProjectDetailsEffects {
	public getProjectsDetailsById$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getProjectDetailsById),
			exhaustMap((action) =>
				this.service.getProjectDetailsById(action.id).pipe(
					map((project: ProjectDetails) =>
						setCurrentProject({ project: project })
					),
					catchError(() =>
						of(
							setError({
								error: `Could not find id ${action.id}`,
							})
						)
					)
				)
			)
		)
	);

	constructor(private actions$: Actions, private service: ProjectService) {}
}
