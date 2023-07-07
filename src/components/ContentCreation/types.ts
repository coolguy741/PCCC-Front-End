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
}

export type TitleType =
  | "tag"
  | "heading"
  | "desc"
  | "subHeading"
  | "subDesc"
  | "title"
  | "timePeriod";
export type PWithPType = "number" | "heading" | "desc";

export type TagTypes = TitleType | PWithPType;

export type TitleState = Record<TitleType, CCFormat>;

export type State = Record<TagTypes, CCFormat>;

export type ThemeComponentProps = {
  state?: State;
  slideIndex?: number;
  isEditable?: boolean;
  componentIndex?: number;
  updatePageState?: (slideIndex: number, index: number, state: State) => void;
};
