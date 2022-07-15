import { State } from './project';

export interface Filter {
	id?: number;
	projectName: string;
	invoiceTarget: string;
	executiveOfficer: string;
	state?: State;
	difference: string;
}

export const dummyFilters: Filter = {
	projectName: '',
	invoiceTarget: '',
	executiveOfficer: 'all',
	difference: 'all',
};
