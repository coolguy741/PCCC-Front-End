export type Pattern = "apples" | "grapes" | "lemons" | "oranges" | "yellows";
export interface PatternProps {
  pattern: number;
  className?: string;
  children?: React.ReactNode;
}
