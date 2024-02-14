import type { jsPDFOptions } from "jspdf";

export interface IContent {
  type: "h1" | "body1" | "body2" | "small" | "list" | "normal";
  content: string | IContent[];
  fontWeight?: "bold" | "semi-bold" | "normal";
  color?: string;
  link?: string;
  fontFamily?: string;
  style?: string;
  marginBottom?: number;
  marginTop?: number;
  align?: "center" | "left" | "right" | "justify";
}

export interface TemplateOptions extends jsPDFOptions {
  marginX: number;
  marginY: number;
}

export interface ITemplate {
  layout: "4/2" | "full";
  contents: Array<IContent[]>;
}
