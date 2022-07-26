import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dummyDetails } from '../models/projectDetails';

import { ProjectDetailsCardComponent } from './project-details-card.component';

describe('ProjectDetailsCardComponent', () => {
	let component: ProjectDetailsCardComponent;
	let fixture: ComponentFixture<ProjectDetailsCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProjectDetailsCardComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectDetailsCardComponent);
		component = fixture.componentInstance;
		component.project = dummyDetails;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should translate difference to red if negative', () => {
		const project = dummyDetails;
		project.outgoingInvoiceAmount = 0;
		project.invoiceItemTotal.amount = 1000;
		component.project = project;
		expect(component.toColor()).toEqual('red');
	});

	it('should translate difference to green if positive', () => {
		const project = dummyDetails;
		project.outgoingInvoiceAmount = 10000;
		project.invoiceItemTotal.amount = 0;
		component.project = project;
		expect(component.toColor()).toEqual('green');
	});
});
