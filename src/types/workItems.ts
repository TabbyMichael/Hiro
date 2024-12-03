export interface WorkItemBase {
    id: string;
    title: string;
    description: string;
    state: 'New' | 'Active' | 'Resolved' | 'Closed';
    assignedTo?: string;
    createdDate: string;
    priority: 'Low' | 'Medium' | 'High' | 'Critical';
    tags: string[];
}

export interface UserStory extends WorkItemBase {
    type: 'User Story';
    storyPoints?: number;
    acceptanceCriteria: string[];
}

export interface Bug extends WorkItemBase {
    type: 'Bug';
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
    stepsToReproduce: string[];
    systemInfo?: string;
}

export interface Epic extends WorkItemBase {
    type: 'Epic';
    businessValue: string;
    timeframe: string;
    childItems: string[]; // IDs of child work items
}

export interface Feature extends WorkItemBase {
    type: 'Feature';
    targetDate: string;
    epicId?: string;
    businessOutcome: string;
}

export interface TestCase extends WorkItemBase {
    type: 'Test Case';
    steps: {
        stepNumber: number;
        action: string;
        expectedResult: string;
    }[];
    testSuite: string;
    automationStatus: 'Not Automated' | 'Planned' | 'Automated';
}

export type WorkItem = UserStory | Bug | Epic | Feature | TestCase;

export interface Query {
    id: string;
    name: string;
    type: 'Flat' | 'Tree' | 'OneHop';
    wiql: string;
    createdBy: string;
    lastModified: string;
    favorite: boolean;
}

export interface DeliveryPlan {
    id: string;
    name: string;
    description: string;
    timeframe: {
        start: string;
        end: string;
    };
    teams: string[];
    epics: string[];
}
