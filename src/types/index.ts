export type ExamCategory = 'all' | 'ap' | 'academic' | 'grad';

export interface InputField {
  id: string;
  label: string;
  sublabel?: string;
  min: number;
  max: number;
  step?: number;
  defaultValue: number;
  unit?: string;
  placeholder?: string;
  group?: string;
  groupTotalMax?: number;
  groupTotalLabel?: string;
  optional?: boolean;
}

export interface SubScoreItem {
  label: string;
  value: string | number;
  max?: number;
  percent?: number;
  note?: string;
}

export interface CalculatorResult {
  mainScore: string | number;
  mainScoreLabel: string;
  maxScore?: string | number;
  qualificationStatus: string;
  qualificationBadgeColor: 'emerald' | 'blue' | 'amber' | 'rose' | 'indigo';
  percentileText?: string;
  percentileNumber?: number;
  subscores: SubScoreItem[];
  summaryNote: string;
  compositePoints?: string | number;
  maxCompositePoints?: string | number;
  isEstimated: boolean;
  hideStatsGrid?: boolean;
  error?: string;
}

export interface CalculatorFaq {
  question: string;
  answer: string;
}

export interface SeoTableData {
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
  footnote?: string;
}

export interface SeoFaqItem {
  question: string;
  answer: string;
}

export type SeoBlock =
  | { type: 'h2'; id: string; title: string }
  | { type: 'h3'; id?: string; title: string }
  | { type: 'paragraph'; text: string }
  | { type: 'paragraphs'; texts: string[] }
  | { type: 'bulletList'; items: string[] }
  | { type: 'orderedList'; items: string[] }
  | { type: 'table'; data: SeoTableData; id?: string }
  | { type: 'callout'; text: string; variant?: 'info' | 'warning' | 'note' | 'formula'; title?: string }
  | { type: 'formula'; title?: string; formula: string }
  | { type: 'faqs'; items: SeoFaqItem[]; title?: string };

export interface SeoArticle {
  calculatorId: string;
  title: string;
  tableOfContents: { id: string; label: string }[];
  blocks: SeoBlock[];
}

export interface CalculatorConfig {
  id: string; // slug, e.g. "ap-chemistry"
  title: string; // "AP Chem Score Calculator"
  shortName: string; // "AP Chem"
  category: ExamCategory;
  categoryLabel: string;
  badge?: string;
  yearFormat: string; // "2027 Exam Structure"
  seoTitle: string;
  metaDescription: string;
  overview: string;
  cardDescription?: string;
  fields: InputField[];
  validate?: (inputs: Record<string, number | ''>) => Record<string, string> | null;
  calculate: (inputs: Record<string, number>) => CalculatorResult;
  faqs: CalculatorFaq[];
  relatedCalculatorIds: string[];
  isPopular?: boolean;
  keywords?: string[];
  seoArticle?: SeoArticle;
}

export type PageRoute =
  | 'home'
  | 'all-calculators'
  | 'calculator'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'disclaimer'
  | 'terms'
  | 'sitemap';
