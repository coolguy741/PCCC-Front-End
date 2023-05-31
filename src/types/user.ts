export interface MockUserType {
  userID: string;
  role: string;
  stars?: number;
  image: string;
  name?: string;
  title?: string;
  idCode?: string;
  school?: string;
  email?: string;
  birthYear: number;
  province: string;
  createdDate: string;
  badges: number;
  groups: { name: string; number: number }[];
  activities: {
    type: string;
    content: string;
    date: string;
    name: string;
  }[];
  lessonAssessment: {
    lessons: string;
    group: string;
    date: string;
    status: string;
  }[];
}
