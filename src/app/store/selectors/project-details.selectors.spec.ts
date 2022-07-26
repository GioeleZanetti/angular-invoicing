import { dummyDetails } from 'src/app/models/projectDetails';
import { ProjectDetailsState } from '../reducers/project-details.reducer';
import { getCurrentProject } from './project-details.selectors';

describe('ProjectDetailsSelectors', () => {
	const initalState: ProjectDetailsState = {
		currentProject: dummyDetails,
	};
	it('should return current project', () => {
		const result = getCurrentProject.projector(initalState);
		expect(result).toEqual(dummyDetails);
	});
});
