import type { TestFramework } from './QualityReportIsland';

export type ProjectCategory = 'ui-automation' | 'api-testing' | 'manual';

export type ProjectCardData = {
	title: string;
	description: string;
	/** Client/project logo (square-ish); use SVG or PNG with transparency */
	image: string;
	category: ProjectCategory;
	repoUrl?: string;
	stack?: string[];
	featured?: boolean;
	qualityReport?: {
		coverage: string;
		summary: string;
		frameworks?: TestFramework[];
	};
};

export type ProjectSerialized = {
	id: string;
	data: ProjectCardData;
};
