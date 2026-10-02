import { CalculatorConfig } from '../types';
import { allCalculators } from '../data';

// Explicit canonical SEO slug mappings
export const ID_TO_SLUG_MAP: Record<string, string> = {
  // AP STEM Calculators
  'ap-chemistry': 'ap-chem-score-calculator',
  'ap-biology': 'ap-bio-score-calculator',
  'ap-physics': 'ap-physics-1-score-calculator',
  'ap-calculus-ab': 'ap-calc-ab-score-calculator',
  'ap-calculus-bc': 'ap-calc-bc-score-calculator',
  'ap-statistics': 'ap-stats-score-calculator',
  'ap-environmental-science': 'apes-score-calculator',
  'ap-computer-science-a': 'ap-csa-score-calculator',
  'ap-computer-science-principles': 'ap-csp-score-calculator',
  'ap-precalculus': 'ap-precalc-score-calculator',

  // AP Humanities & Social Sciences
  'ap-human-geography': 'ap-human-geography-score-calculator',
  'ap-world-history': 'ap-world-history-score-calculator',
  'ap-us-history': 'apush-score-calculator',
  'ap-psychology': 'ap-psych-score-calculator',
  'ap-english-language': 'ap-lang-score-calculator',
  'ap-english-literature': 'ap-lit-score-calculator',
  'ap-macroeconomics': 'ap-macro-score-calculator',
  'ap-microeconomics': 'ap-micro-score-calculator',
  'ap-us-government': 'ap-government-score-calculator',

  // Graduate Exams
  'gre': 'gre-score-calculator',

  // Academic Tools
  'marks-percentage': 'marks-percentage-calculator',
  'attendance': 'attendance-calculator'
};

// Aliases for alternate or legacy slugs
export const SLUG_ALIASES: Record<string, string> = {
  'ap-chemistry-score-calculator': 'ap-chemistry',
  'ap-biology-score-calculator': 'ap-biology',
  'ap-calculus-bc-score-calculator': 'ap-calculus-bc',
  'ap-statistics-score-calculator': 'ap-statistics',
  'ap-psychology-score-calculator': 'ap-psychology',
  'ap-cs-principles-score-calculator': 'ap-computer-science-principles',
  'ap-precalculus-score-calculator': 'ap-precalculus',
  'ap-chem': 'ap-chemistry',
  'ap-bio': 'ap-biology',
  'attendance-percentage-calculator': 'attendance'
};

/**
 * Returns the canonical SEO slug for a given calculator or calculator ID.
 */
export function getCalculatorSlug(calcOrId: CalculatorConfig | string): string {
  const id = typeof calcOrId === 'string' ? calcOrId : calcOrId.id;
  if (ID_TO_SLUG_MAP[id]) {
    return ID_TO_SLUG_MAP[id];
  }
  // Fallback heuristic if unknown
  if (id.endsWith('-calculator')) return id;
  return `${id}-score-calculator`;
}

/**
 * Returns the clean root path for a given calculator (e.g. "/ap-chem-score-calculator").
 */
export function getCalculatorPath(calcOrId: CalculatorConfig | string): string {
  return `/${getCalculatorSlug(calcOrId)}`;
}

/**
 * Finds a calculator by its SEO slug or ID or alias.
 */
export function getCalculatorBySlug(slugOrId: string): CalculatorConfig | undefined {
  if (!slugOrId) return undefined;
  const clean = slugOrId.replace(/^\//, '').trim().toLowerCase();

  // 1. Direct match by ID in allCalculators
  const direct = allCalculators.find((c) => c.id === clean);
  if (direct) return direct;

  // 2. Check alias map
  if (SLUG_ALIASES[clean]) {
    const targetId = SLUG_ALIASES[clean];
    const found = allCalculators.find((c) => c.id === targetId);
    if (found) return found;
  }

  // 3. Match against canonical slug in ID_TO_SLUG_MAP
  for (const [id, slug] of Object.entries(ID_TO_SLUG_MAP)) {
    if (slug === clean || id === clean) {
      return allCalculators.find((c) => c.id === id);
    }
  }

  // 4. Try stripping -score-calculator or -calculator suffix
  const stripped = clean
    .replace(/-score-calculator$/, '')
    .replace(/-calculator$/, '');

  return allCalculators.find(
    (c) => c.id === stripped || ID_TO_SLUG_MAP[c.id] === clean
  );
}
