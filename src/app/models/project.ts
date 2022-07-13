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
