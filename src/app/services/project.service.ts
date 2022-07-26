import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { Project, State } from '../models/project';
import { ProjectDetails } from '../models/projectDetails';

@Injectable({
	providedIn: 'root',
})
export class ProjectService {
	private projectsPath: string = 'assets/data_list.json';
	private detailspath: string = 'assets/data_detail.json';

	constructor(private http: HttpClient) {}

	public getProjects(): Observable<Project[]> {
		return this.http.get<Project[]>(this.projectsPath);
	}

	public getProjectDetailsById(id: number): Observable<ProjectDetails> {
		return this.http
			.get<ProjectDetails[]>(this.detailspath)
			.pipe(
				map(
					(projects: ProjectDetails[]) =>
						projects.filter(
							(project: ProjectDetails) =>
								project.projectId === id
						)[0]
				)
			);
	}
}
