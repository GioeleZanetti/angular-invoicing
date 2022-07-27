import { State } from './project';

export interface ProjectDetails {
	approvedBy: string;
	invoiceFrom: Invoice;
	invoiceTo: Invoice;
	invoiceType: string;
	managingDirector: string;
	outgoingInvoiceApprovalDate: string;
	paymentTarget: string;
	positions: Position[];
	projectEnd: string;
	projectId: number;
	projectManager: string;
	projectName: string;
	projectStart: string;
	state: State;
}

export interface Invoice {
	id: number;
	name: string;
	street: string;
	postalCode: string;
	city: string;
}

export interface Position {
	amount: number;
	conditions: string;
	handlingFee: number;
	hours: number;
	isAssignedToGroup: boolean;
	isMonthClosed: boolean;
	isPartiallyBillable: boolean;
	issueId: string;
	positionInvoiceHint: string;
	positionName: string;
	positionTitle: string;
	rate: number;
	tracker: number;
	userId: number;
}

export const dummyDetails: ProjectDetails = {
	approvedBy: 'Walter White',
	invoiceFrom: {
		id: 22,
		name: 'John',
		street: 'Piccadilly Circus',
		postalCode: '2123',
		city: 'London',
	},
	invoiceTo: {
		id: 23,
		name: 'Mia',
		street: 'Piccadilly Circus',
		postalCode: '2124',
		city: 'London',
	},
	invoiceType: 'Idk',
	managingDirector: 'Jesse Pinkmann',
	outgoingInvoiceApprovalDate: '22.10.2004',
	paymentTarget: 'Gustavo Fring',
	positions: [],
	projectEnd: '22.10.2022',
	projectId: 69,
	projectManager: 'Mike Ehrmantraut',
	projectName: 'Get rich',
	projectStart: '22.10.2004',
	state: 3,
};

export const dummyPosition: Position = {
	amount: 3312,
	conditions: 'None',
	handlingFee: 22,
	hours: 989,
	isAssignedToGroup: false,
	isMonthClosed: false,
	isPartiallyBillable: false,
	issueId: '1',
	positionInvoiceHint: '2',
	positionName: 'Ronny Bonny',
	positionTitle: 'Project Billboard',
	rate: 69,
	tracker: 2,
	userId: 222,
};
