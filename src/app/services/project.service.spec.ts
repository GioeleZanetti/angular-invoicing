import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';

import { ProjectService } from './project.service';
import { dummyProject, Project } from '../models/project';

describe('ProjectService', () => {
	let service: ProjectService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		httpMock = TestBed.inject(HttpTestingController);
		service = TestBed.inject(ProjectService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return file content', () => {
		service.getProjects().subscribe((projects: Project[]) => {
			expect(projects).toEqual([dummyProject]);
		});
		const req = httpMock.expectOne('assets/data_list.json');
		req.flush([dummyProject]);
	});
});
