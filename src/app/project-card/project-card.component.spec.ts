import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ProjectCardComponent } from './project-card.component';

describe('ProjectCardComponent', () => {
	let component: ProjectCardComponent;
	let fixture: ComponentFixture<ProjectCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProjectCardComponent],
			providers: [provideMockStore({})],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
