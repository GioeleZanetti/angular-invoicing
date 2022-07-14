import { LOCALE_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dummyProject, State } from '../models/project';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe, 'de');

import { ProjectInfoComponent } from './project-info.component';
import { registerLocaleData } from '@angular/common';

describe('ProjectInfoComponent', () => {
	let component: ProjectInfoComponent;
	let fixture: ComponentFixture<ProjectInfoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProjectInfoComponent],
			providers: [{ provide: LOCALE_ID, useVaule: 'de-DE' }],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectInfoComponent);
		component = fixture.componentInstance;
		component.project = dummyProject;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should change color to yellow if state is check', () => {
		component.project.state = State.Check;
		const spy = spyOn<any>(component, 'changeColor');
		component.ngAfterViewInit();
		expect(spy).toHaveBeenCalledWith('#ffff00');
	});

	it('should change color to red if state is open', () => {
		component.project.state = State.Open;
		const spy = spyOn<any>(component, 'changeColor');
		component.ngAfterViewInit();
		expect(spy).toHaveBeenCalledWith('#ff0000');
	});

	it('should change color to gray if state is waiting', () => {
		component.project.state = State.Waiting;
		const spy = spyOn<any>(component, 'changeColor');
		component.ngAfterViewInit();
		expect(spy).toHaveBeenCalledWith('#cccccc');
	});

	it('should change color to green if state is ready', () => {
		component.project.state = State.Ready;
		const spy = spyOn<any>(component, 'changeColor');
		component.ngAfterViewInit();
		expect(spy).toHaveBeenCalledWith('#00ff00');
	});

	it('should translate state to "prüfen"', () => {
		component.project.state = State.Check;
		expect(component.toText()).toEqual('prüfen');
	});

	it('should translate state to "offen"', () => {
		component.project.state = State.Open;
		expect(component.toText()).toEqual('offen');
	});

	it('should translate state to "fertig"', () => {
		component.project.state = State.Ready;
		expect(component.toText()).toEqual('fertig');
	});

	it('should translate state to "wartend"', () => {
		component.project.state = State.Waiting;
		expect(component.toText()).toEqual('wartend');
	});
});
