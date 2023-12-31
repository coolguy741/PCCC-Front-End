export enum ThemeComponents {
  Theme = "theme",
  ParagraphWithHeading = "paragraph-with-heading",
  SingleImage = "single-image",
  DoubleImage = "double-image",
  AssessmentMultipleChoice = "assessment-multiple-choice",
  AssessmentTrueOrFalse = "assessment-true-or-false",
  AssessmentWritten = "assessment-written",
  Title = "title",
}

// current content component format
export enum ComponentViewMode {
  VIEW = "view",
  EDIT = "edit",
}

export interface CCFormat {
  mode: ComponentViewMode;
  text: string;
  src?: string;
  patternChoice?: number;
  aMode?: string;
  iMode?: string;
  name?: string;
  question?: string;
  option1?: string;
  option2?: string;
  option3?: string;
  option4?: string;
  thumbnail?: string;
  valid?: boolean;
  value?: boolean;
}

export type TitleType =
  | "tag"
  | "heading"
  | "desc"
  | "subHeading"
  | "subDesc"
  | "title"
  | "option1"
  | "option2"
  | "option3"
  | "option4"
  | "timePeriod";
export type PWithPType = "number" | "heading" | "desc";

export type TagTypes = TitleType | PWithPType;

export type TitleState = Record<TitleType, CCFormat>;

export type ObjectState = Record<TagTypes, CCFormat>;

export type State = ObjectState | CCFormat[];

export type ThemeComponentProps = {
  state?: State;
  slideIndex?: number;
  isEditable?: boolean;
  componentIndex?: number;
  updatePageState?: (slideIndex: number, index: number, state: State) => void;
};
