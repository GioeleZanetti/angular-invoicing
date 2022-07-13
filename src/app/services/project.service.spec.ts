import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';

import { ProjectService } from './project.service';

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
});
