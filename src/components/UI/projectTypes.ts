import type { TestFramework } from './QualityReportIsland';

export type ProjectCardData = {
	title: string;
	description: string;
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
