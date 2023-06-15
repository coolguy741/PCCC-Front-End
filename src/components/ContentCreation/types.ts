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
export interface CCFormat {
  mode: "view" | "edit";
  text: string;
}
