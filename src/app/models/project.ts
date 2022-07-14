export interface Project {
	amount: number;
	amountCompleted: number;
	amountPartiallyBillable: number;
	executiveOfficer: string;
	invoiceTarget: string;
	outgoingInvoiceAmount: number;
	positionIds: string;
	projectId: number;
	projectName: string;
	state: State;
}

export enum State {
	Waiting = 1,
	Open,
	Ready,
	Check,
}

export const dummyProject: Project = {
	amount: 13122,
	amountCompleted: 0,
	amountPartiallyBillable: 0,
	executiveOfficer: 'Johnny',
	invoiceTarget: 'SuS',
	outgoingInvoiceAmount: 0,
	positionIds: '1888',
	projectId: 2131,
	projectName: 'Project Billboard',
	state: State.Check,
};
