import { CalculatorConfig, SeoArticle } from '../types';

import { apChemistryCalculator } from './calculators/apChemistry';
import { apBiologyCalculator } from './calculators/apBiology';
import { apPhysicsCalculator } from './calculators/apPhysics';
import { apCalculusAbCalculator } from './calculators/apCalculusAb';
import { apCalculusBcCalculator } from './calculators/apCalculusBc';
import { apStatisticsCalculator } from './calculators/apStatistics';
import { apEnvironmentalScienceCalculator } from './calculators/apEnvironmentalScience';
import { apCsaCalculator } from './calculators/apCsa';
import { apHumanGeographyCalculator } from './calculators/apHumanGeography';
import { apWorldHistoryCalculator } from './calculators/apWorldHistory';
import { apUsHistoryCalculator } from './calculators/apUsHistory';
import { apPsychologyCalculator } from './calculators/apPsychology';
import { apEnglishLanguageCalculator } from './calculators/apEnglishLanguage';
import { apEnglishLiteratureCalculator } from './calculators/apEnglishLiterature';
import { apMacroeconomicsCalculator } from './calculators/apMacroeconomics';
import { apMicroeconomicsCalculator } from './calculators/apMicroeconomics';
import { apUsGovernmentCalculator } from './calculators/apUsGovernment';
import { apComputerSciencePrinciplesCalculator } from './calculators/apComputerSciencePrinciples';
import { apPrecalculusCalculator } from './calculators/apPrecalculus';
import { marksPercentageCalculator } from './calculators/marksPercentage';
import { attendanceCalculator } from './calculators/attendance';
import { greCalculator } from './calculators/gre';

export const allCalculators: CalculatorConfig[] = [
  apChemistryCalculator,
  apBiologyCalculator,
  apPhysicsCalculator,
  apCalculusAbCalculator,
  apCalculusBcCalculator,
  apStatisticsCalculator,
  apEnvironmentalScienceCalculator,
  apCsaCalculator,
  apHumanGeographyCalculator,
  apWorldHistoryCalculator,
  apUsHistoryCalculator,
  apPsychologyCalculator,
  apEnglishLanguageCalculator,
  apEnglishLiteratureCalculator,
  apMacroeconomicsCalculator,
  apMicroeconomicsCalculator,
  apUsGovernmentCalculator,
  apComputerSciencePrinciplesCalculator,
  apPrecalculusCalculator,
  marksPercentageCalculator,
  attendanceCalculator,
  greCalculator
];

export function getCalculatorSeoArticle(calc: CalculatorConfig): SeoArticle {
  return calc.seoArticle!;
}

export {
  getCalculatorSlug,
  getCalculatorPath,
  getCalculatorBySlug
} from '../utils/slugs';

export function getRelatedCalculators(calc: CalculatorConfig): CalculatorConfig[] {
  const byId = calc.relatedCalculatorIds
    .map((id) => allCalculators.find((c) => c.id === id))
    .filter((c): c is CalculatorConfig => Boolean(c));

  if (byId.length >= 3) return byId.slice(0, 4);

  // Fallback to same category
  const sameCategory = allCalculators
    .filter((c) => c.id !== calc.id && c.category === calc.category && !byId.some((b) => b.id === c.id))
    .slice(0, 4 - byId.length);

  return [...byId, ...sameCategory];
}

export function getPopularCalculators(): CalculatorConfig[] {
  return allCalculators.filter((c) => c.isPopular);
}

const cardDescriptionsMap: Record<string, string> = {
  'ap-chemistry': 'Estimate your AP Chem score from Section I MCQs and Section II FRQ composite.',
  'ap-biology': 'Calculate your composite score based on 60 MCQs and 6 Free Response questions.',
  'ap-physics': 'Algebra-based composite estimation for the 2027 AP Physics 1 exam.',
  'ap-calculus-ab': 'Calculate estimated AP grade across Calculator and No-Calculator sections.',
  'ap-calculus-bc': 'Complete BC Calculus score calculator including automated AB subscore breakdown.',
  'ap-statistics': 'MCQ and 6 FRQs with investigative task scoring breakdown and scaling curves.',
  'ap-computer-science-a': 'Calculate scaled Java score across 40 Section I MCQs and 4 Free Response coding questions.',
  'ap-environmental-science': 'Estimate your AP Environmental Science score based on 80 MCQs and 3 Free Response questions.',
  'ap-human-geography': 'Calculate your scaled AP score from 60 multiple-choice questions and 3 analytical free response prompts.',
  'ap-world-history': 'Estimate scaled World History grade across Section I MCQs, Short Answers, DBQ, and LEQ.',
  'ap-us-history': 'Calculate your AP US History composite grade across MCQs, Short Answers, DBQ, and Long Essay.',
  'ap-psychology': 'Predict your AP Psychology score using the updated 75-MCQ and 2-FRQ scoring rubric.',
  'ap-english-language': 'Estimate your AP Lang score based on 45 reading MCQs and 3 timed analytical essays.',
  'ap-english-literature': 'Convert your 55 prose/poetry MCQs and 3 Free Response essays into a 1-5 AP score.',
  'ap-macroeconomics': 'Estimate your 1–5 AP Macroeconomics score from 60 MCQs and 3 Free-Response questions.',
  'ap-microeconomics': 'Calculate your AP Microeconomics score based on 60 MCQs and 3 Free-Response questions.',
  'ap-government': 'Estimate your AP US Gov score across 55 MCQs and 4 Free-Response questions.',
  'ap-us-government': 'Estimate your AP US Gov score across 55 MCQs and 4 Free-Response questions.',
  'ap-computer-science-principles': 'Calculate your AP CSP score from the 70-question digital exam and Create Task.',
  'ap-precalculus': 'Estimate your AP Precalculus score across calculator, no-calc, and 4 FRQ tasks.',
  'marks-percentage': 'Convert marks obtained out of total maximum marks into percentage and academic division.',
  'attendance': 'Calculate attendance percentage and find out how many classes you can miss or need to attend.',
  'gre': 'Convert your Verbal and Quantitative raw correct answers into scaled 130-170 scores.'
};

export function getCardDescription(calc: CalculatorConfig): string {
  if (calc.cardDescription) return calc.cardDescription;
  if (cardDescriptionsMap[calc.id]) return cardDescriptionsMap[calc.id];
  return calc.overview;
}

export function searchCalculators(query: string): CalculatorConfig[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return allCalculators;

  const terms = clean.split(/\s+/).filter(Boolean);

  return allCalculators.filter((c) => {
    const cardDesc = getCardDescription(c).toLowerCase();
    const keywords = (c.keywords || []).join(' ').toLowerCase();
    const searchableText = `${c.title} ${c.shortName} ${c.id} ${c.categoryLabel} ${c.overview} ${cardDesc} ${c.yearFormat} ${keywords}`.toLowerCase();

    return terms.every((term) => searchableText.includes(term));
  });
}
