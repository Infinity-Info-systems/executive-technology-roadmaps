export type RoadmapStage = 'Assess' | 'Align' | 'Prioritize' | 'Plan' | 'Review';

export type RoadmapStatus = 'Planned' | 'In Progress' | 'Blocked' | 'Delivered';

export interface RoadmapInitiative {
  name: string;
  horizon: string;
  outcome: string;
  owner: string;
  dependency?: string;
  status: RoadmapStatus;
}

export interface RoadmapSequenceEntry {
  stage: RoadmapStage;
  question: string;
  output: string;
}

export interface ExecutiveRoadmapRegistry {
  repository: string;
  purpose: string;
  outcomes: string[];
  sequence: RoadmapSequenceEntry[];
  themes: string[];
  initiatives: RoadmapInitiative[];
  governanceQuestions: string[];
  decisionRule: string;
}

export const executiveRoadmapRegistry: ExecutiveRoadmapRegistry = {
  repository: 'Executive Technology Roadmaps',
  purpose:
    'Connect strategy, governance, and delivery into a sequenced enterprise transformation roadmap.',
  outcomes: [
    'Roadmaps stay tied to business outcomes.',
    'Dependencies and owners remain visible.',
    'Executive reporting follows a repeatable cadence.',
    'Prioritization stays linked to risk, value, and readiness.',
  ],
  sequence: [
    {
      stage: 'Assess',
      question: 'What is the current state?',
      output: 'Gap summary',
    },
    {
      stage: 'Align',
      question: 'What outcomes matter?',
      output: 'Target outcomes',
    },
    {
      stage: 'Prioritize',
      question: 'What should happen first?',
      output: 'Ordered initiative list',
    },
    {
      stage: 'Plan',
      question: 'Who does what and when?',
      output: 'Delivery roadmap',
    },
    {
      stage: 'Review',
      question: 'What changed?',
      output: 'Executive status update',
    },
  ],
  themes: [
    'business alignment',
    'governance maturity',
    'platform modernization',
    'resilience improvement',
    'operating model clarity',
    'measurable execution',
    'decision visibility',
  ],
  initiatives: [
    {
      name: 'Cloud governance alignment',
      horizon: 'Q1',
      outcome: 'Standardize policy and control ownership',
      owner: 'Governance lead',
      dependency: 'Executive sponsorship and policy baseline',
      status: 'In Progress',
    },
    {
      name: 'Platform modernization',
      horizon: 'Q2',
      outcome: 'Improve delivery speed and resilience',
      owner: 'Platform lead',
      dependency: 'Capability gap review',
      status: 'Planned',
    },
    {
      name: 'DR modernization',
      horizon: 'Q2',
      outcome: 'Reduce recovery risk',
      owner: 'Resilience lead',
      dependency: 'Recovery tier mapping',
      status: 'Planned',
    },
    {
      name: 'FinOps optimization',
      horizon: 'Q3',
      outcome: 'Improve cost transparency and savings',
      owner: 'FinOps lead',
      dependency: 'Cost allocation baseline',
      status: 'Planned',
    },
    {
      name: 'SRE maturity uplift',
      horizon: 'Q3',
      outcome: 'Improve operational stability',
      owner: 'Reliability lead',
      dependency: 'Service reliability metrics',
      status: 'Planned',
    },
  ],
  governanceQuestions: [
    'Which initiatives are on track?',
    'What is blocked?',
    'What needs executive decisions?',
    'What changed since the last review?',
    'Where do we need a decision now?',
  ],
  decisionRule:
    'If an initiative cannot be tied to an outcome, dependency, or owner, it should not be placed on the executive roadmap yet.',
};

export function getRoadmapOverview() {
  return {
    repository: executiveRoadmapRegistry.repository,
    purpose: executiveRoadmapRegistry.purpose,
    stageCount: executiveRoadmapRegistry.sequence.length,
    initiativeCount: executiveRoadmapRegistry.initiatives.length,
    outcomes: executiveRoadmapRegistry.outcomes,
  };
}
