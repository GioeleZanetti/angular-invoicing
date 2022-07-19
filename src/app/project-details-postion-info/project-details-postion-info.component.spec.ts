import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dummyPosition } from '../models/projectDetails';

import { ProjectDetailsPostionInfoComponent } from './project-details-postion-info.component';

describe('ProjectDetailsPostionInfoComponent', () => {
	let component: ProjectDetailsPostionInfoComponent;
	let fixture: ComponentFixture<ProjectDetailsPostionInfoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProjectDetailsPostionInfoComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectDetailsPostionInfoComponent);
		component = fixture.componentInstance;
		component.position = dummyPosition;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should return even if index is even', () => {
		component.index = 2;
		expect(component.toClass()).toEqual('even');
	});

	it('should return odd if index is odd', () => {
		component.index = 1;
		expect(component.toClass()).toEqual('odd');
	});
});
