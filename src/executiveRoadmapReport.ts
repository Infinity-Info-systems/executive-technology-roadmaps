import { executiveRoadmapRegistry } from './executiveRoadmapRegistry';

export interface RoadmapReportRow {
  initiative: string;
  horizon: string;
  owner: string;
  outcome: string;
  status: string;
}

export function buildRoadmapReport() {
  const rows: RoadmapReportRow[] = executiveRoadmapRegistry.initiatives.map((initiative) => ({
    initiative: initiative.name,
    horizon: initiative.horizon,
    owner: initiative.owner,
    outcome: initiative.outcome,
    status: initiative.status,
  }));

  return {
    title: executiveRoadmapRegistry.repository,
    purpose: executiveRoadmapRegistry.purpose,
    sequence: executiveRoadmapRegistry.sequence,
    themes: executiveRoadmapRegistry.themes,
    governanceQuestions: executiveRoadmapRegistry.governanceQuestions,
    decisionRule: executiveRoadmapRegistry.decisionRule,
    reportRows: rows,
  };
}

export function buildRoadmapSummary() {
  return {
    highlightedInitiatives: executiveRoadmapRegistry.initiatives.length,
    activeInitiatives: executiveRoadmapRegistry.initiatives.filter(
      (initiative) => initiative.status === 'In Progress'
    ).length,
    plannedInitiatives: executiveRoadmapRegistry.initiatives.filter(
      (initiative) => initiative.status === 'Planned'
    ).length,
    sequenceStages: executiveRoadmapRegistry.sequence.map((entry) => entry.stage),
  };
}
