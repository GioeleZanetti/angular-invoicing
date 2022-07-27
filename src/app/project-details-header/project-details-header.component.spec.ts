import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { State } from '../models/project';
import { dummyDetails } from '../models/projectDetails';
import { ProjectDetailsHeaderComponent } from './project-details-header.component';

describe('ProjectDetailsHeaderComponent', () => {
	let component: ProjectDetailsHeaderComponent;
	let fixture: ComponentFixture<ProjectDetailsHeaderComponent>;
	const initialState = {};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProjectDetailsHeaderComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectDetailsHeaderComponent);
		component = fixture.componentInstance;
		component['project'] = dummyDetails;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should dispatch releaseCurrentProject action', () => {
		const spy = spyOn(component['store'], 'dispatch');
		component.resetCurrentProject();
		expect(spy).toHaveBeenCalled();
	});

	it('should translate state to offen', () => {
		const dummy = dummyDetails;
		dummy.state = State.Open;
		component.project = dummy;
		expect(component.toText()).toEqual('offen');
	});

	it('should translate state to prüfen', () => {
		const dummy = dummyDetails;
		dummy.state = State.Check;
		component.project = dummy;
		expect(component.toText()).toEqual('prüfen');
	});

	it('should translate state to fertig', () => {
		const dummy = dummyDetails;
		dummy.state = State.Ready;
		component.project = dummy;
		expect(component.toText()).toEqual('fertig');
	});

	it('should translate state to wartend', () => {
		const dummy = dummyDetails;
		dummy.state = State.Waiting;
		component.project = dummy;
		expect(component.toText()).toEqual('wartend');
	});

	it('should format date', () => {
		expect(component.format('2022-07-18T08:43:08Z')).toEqual('18.07.2022');
	});
});
