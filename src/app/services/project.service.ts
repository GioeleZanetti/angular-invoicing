import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
	providedIn: 'root',
})
export class ProjectService {
	private filepath: string = 'assets/data_list.json';

	constructor(private http: HttpClient) {}

	public getProjects(): Observable<Project[]> {
		return this.http.get<Project[]>(this.filepath);
	}
}
