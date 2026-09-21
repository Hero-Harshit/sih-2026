export interface DashboardAssessmentRecord {
  name: string;
  category: string;
  score: number;
  status: string;
  date: string;
}

export const DASHBOARD_STORAGE_KEY = "assessment_history";
