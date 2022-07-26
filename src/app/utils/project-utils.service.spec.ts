import { TestBed } from '@angular/core/testing';
import { dummyProject, State } from '../models/project';

import { ProjectUtilsService } from './project-utils.service';

describe('ProjectUtilsService', () => {
	let service: ProjectUtilsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ProjectUtilsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should translate state to offen', () => {
		const dummy = dummyProject;
		dummy.state = State.Open;
		expect(service.statusToText(dummy)).toEqual('offen');
	});

	it('should translate state to prüfen', () => {
		const dummy = dummyProject;
		dummy.state = State.Check;
		expect(service.statusToText(dummy)).toEqual('prüfen');
	});

	it('should translate state to fertig', () => {
		const dummy = dummyProject;
		dummy.state = State.Ready;
		expect(service.statusToText(dummy)).toEqual('fertig');
	});

	it('should translate state to wartend', () => {
		const dummy = dummyProject;
		dummy.state = State.Waiting;
		expect(service.statusToText(dummy)).toEqual('wartend');
	});

	it('should add digit if string has less than two characters', () => {
		expect(service['addDigitIfHasLessThanTwo']('1')).toEqual('01');
	});

	it('should not add digit if string has two or more characters', () => {
		expect(service['addDigitIfHasLessThanTwo']('12')).toEqual('12');
	});

	it('should format date', () => {
		expect(service.formatDate('2022-07-18T08:43:08Z')).toEqual(
			'18.07.2022'
		);
	});
});
