import { CalculatorConfig, CalculatorFaq, CalculatorResult, SeoArticle } from '../../types';

export const apPrecalculusFaqs: CalculatorFaq[] = [
  {
    "question": "How many MCQs are on the AP Precalculus exam?",
    "answer": "The AP Precalculus exam has 42 multiple-choice questions. Part A has 29 questions and Part B has 13 questions. The MCQ section makes up 62.5% of the total exam score."
  },
  {
    "question": "Are there FRQs on the AP Precalculus exam?",
    "answer": "Yes. The exam has 4 free-response questions. Together, they make up 37.5% of the total exam score, and each question is worth up to 6 points."
  },
  {
    "question": "What percentage do you need for a 5 on AP Precalculus?",
    "answer": "There is no fixed percentage that always gives you a 5. The score needed can change, so one percentage does not always mean you will get a 5."
  },
];

export const apPrecalculusSeoArticle: SeoArticle = {
  "calculatorId": "ap-precalculus",
  "title": "AP Precalculus Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Precalc Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Precalc Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Precalc Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Precalc Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP Precalc Score Distributions"
    },
    {
      "id": "faqs",
      "label": "Frequently Asked Questions"
    }
  ],
  "blocks": [
    {
      "type": "h2",
      "id": "what-is",
      "title": "What is the AP Precalc Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Precalc Score Calculator** helps you estimate your AP score from 1 to 5. Enter the number of multiple-choice questions you got right and your scores from the 4 free-response questions to see your estimated score out of 100.",
        "The 2027 exam has 42 multiple-choice questions worth 62.5% of the score and 4 free-response questions worth 37.5%. Each free-response question is worth up to 6 points.",
        "**Note:** The result is only an estimate, not an official College Board score."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP Precalc Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "It's quite simple to use the **AP Precalculus Score Calculator**. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "Enter how many questions you got right in Part A (28 questions, no calculator) and Part B (12 questions, calculator allowed).",
        "Enter your scores for the 4 free-response questions. There are 24 points in total.",
        "The calculator combines your multiple-choice and free-response scores using their exam weights to show your estimated score out of 100 and AP score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "The AP Precalculus exam has two main parts. Here’s a quick look at the questions, time, and how much each part counts toward your score."
    },
    {
      "type": "table",
      "id": "exam-structure-table",
      "data": {
        "headers": [
          "Section Name",
          "Number of Questions",
          "Time Allotted",
          "Weighting"
        ],
        "rows": [
          [
            "Section I Part A: MCQs",
            "29 Questions",
            "65 Minutes",
            "43.75%"
          ],
          [
            "Section I Part B: MCQs",
            "13 Questions",
            "40 Minutes",
            "18.75%"
          ],
          [
            "Section II Part A: FRQs",
            "2 Questions (Q1 & Q2)",
            "35 Minutes",
            "18.75%"
          ],
          [
            "Section II Part B: FRQs",
            "2 Questions (Q3 & Q4)",
            "35 Minutes",
            "18.75%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "**Note:** A graphing calculator is required for Section I Part B and Section II Part A. Calculators are not permitted in Section I Part A or Section II Part B."
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Precalc Score Calculator Work?"
    },
     {
    "type": "paragraph",
    "text": "The AP Precalculus exam has two main sections:"
  },
  {
    "type": "bulletList",
    "items": [
      "Multiple-Choice Questions (MCQs)",
      "Free-Response Questions (FRQs)"
    ]
  },
  {
    "type": "h3",
    "title": "Multiple-Choice Questions"
  },
  {
    "type": "paragraph",
    "text": "The multiple-choice section has 42 questions. It has two parts, and each part has a different weight."
  },
  {
    "type": "h3",
    "title": "Part A: No Calculator"
  },
  {
    "type": "paragraph",
    "text": "Part A has 29 questions and makes up 43.75% of your total score."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated Part A Score = (Correct Answers ÷ 29) × 43.75"
  },
  {
    "type": "h3",
    "title": "Part B: Calculator Allowed"
  },
  {
    "type": "paragraph",
    "text": "Part B has 13 questions and makes up 18.75% of your total score."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated Part B Score = (Correct Answers ÷ 13) × 18.75"
  },
  {
    "type": "paragraph",
    "text": "The calculator adds both parts to get your total MCQ score."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Total MCQ Score = Part A Score + Part B Score"
  },
  {
    "type": "h3",
    "title": "Free-Response Questions"
  },
  {
    "type": "paragraph",
    "text": "The free-response section has 4 questions with 24 points in total. Together, the FRQ section makes up 37.5% of your total score."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated FRQ Score = (Total FRQ Points ÷ 24) × 37.5"
  },
  {
    "type": "h3",
    "title": "Estimated Composite Score"
  },
  {
    "type": "paragraph",
    "text": "The calculator adds your total MCQ score and FRQ score to give you an estimated Composite Score out of 100."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Composite Score = Total MCQ Score + FRQ Score"
  },
  {
    "type": "paragraph",
    "text": "The calculator then compares your Composite Score with the estimated score ranges used on this calculator. Based on the range your score comes into, it gives you an estimated AP Precalculus score from 1 to 5."
  },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Precalc Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "These score ranges are only estimates. Your actual AP score from College Board may be different."
    },
    {
      "type": "table",
      "id": "score-scale-table",
      "data": {
        "headers": [
          "Score / Level",
          "Qualification Meaning",
          "Estimated Composite Cutoff"
        ],
        "rows": [
          [
            "5",
            "Extremely Well Qualified",
            "73 - 100 points"
          ],
          [
            "4",
            "Very Well Qualified",
            "58 - 72 points"
          ],
          [
            "3",
            "Qualified",
            "44 - 57 points"
          ],
          [
            "2",
            "Possibly Qualified",
            "30 - 43 points"
          ],
          [
            "1",
            "No Recommendation",
            "0 - 29 points"
          ]
        ]
      }
    },
    {
      "type": "h2",
      "id": "score-distributions",
      "title": "AP Precalc Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The official **AP Precalculus score distribution** shows the percentage of students who received each AP score from 1 to 5."
    },
    {
      "type": "table",
      "id": "score-distribution-table",
      "data": {
        "headers": [
          "AP Score",
          "% of Students"
        ],
        "rows": [
          [
            "5",
            "29%"
          ],
          [
            "4",
            "29%"
          ],
          [
            "3",
            "24%"
          ],
          [
            "2",
            "11%"
          ],
          [
            "1",
            "7%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "In 2026, 82% of students scored 3 or higher on the AP Precalculus exam."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apPrecalculusFaqs,
      "title": "Common Questions About AP Precalculus"
    }
  ]
};

export const apPrecalculusCalculator: CalculatorConfig = {
  "id": "ap-precalculus",
  "title": "AP Precalc Score Calculator",
  "shortName": "AP Precalculus",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 Exam Structure",
  "seoTitle": "AP Precalc Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP Precalc Score Calculator to estimate your AP score from 1 to 5 using your multiple-choice and free-response performance.",
  "overview": "Estimate your AP Precalculus score from 1 to 5 using the 2027 exam format. Enter your 42 MCQ and 4 FRQ scores to see your estimated score out of 100.",
  "cardDescription": "Estimate your AP Precalculus score from 42 MCQs and 4 Free-Response questions.",
  "fields": [
    {
      "id": "mcqPartA",
      "label": "Section I Part A: No-Calculator MCQs",
      "sublabel": "Raw correct answers out of 29 (43.75% weight)",
      "min": 0,
      "max": 29,
      "defaultValue": 21
    },
    {
      "id": "mcqPartB",
      "label": "Section I Part B: Graphing Calculator MCQs",
      "sublabel": "Raw correct answers out of 13 (18.75% weight)",
      "min": 0,
      "max": 13,
      "defaultValue": 9
    },
    {
      "id": "frqPartA",
      "label": "Section II Part A: Calculator FRQs (Q1 & Q2)",
      "sublabel": "Points earned out of 12 combined (18.75% weight)",
      "min": 0,
      "max": 12,
      "defaultValue": 8
    },
    {
      "id": "frqPartB",
      "label": "Section II Part B: No-Calculator FRQs (Q3 & Q4)",
      "sublabel": "Points earned out of 12 combined (18.75% weight)",
      "min": 0,
      "max": 12,
      "defaultValue": 8
    }
  ],
  "relatedCalculatorIds": [
    "ap-calculus-ab",
    "ap-calculus-bc",
    "ap-statistics",
    "ap-physics"
  ]
,
  calculate: (inputs: Record<string, number>): CalculatorResult => {
    const mcqPartA = Math.max(
      0,
      Math.min(29, inputs.mcqPartA ?? 21)
    );

    const mcqPartB = Math.max(
      0,
      Math.min(13, inputs.mcqPartB ?? 9)
    );

    const frqPartA = Math.max(
      0,
      Math.min(12, inputs.frqPartA ?? 8)
    );

    const frqPartB = Math.max(
      0,
      Math.min(12, inputs.frqPartB ?? 8)
    );

    const totalMCQ = mcqPartA + mcqPartB;
    const totalFRQ = frqPartA + frqPartB;

    // Section I = 62.5 points out of 100
    const mcqWeighted =
      (totalMCQ / 42) * 62.5;

    // Section II = 37.5 points out of 100
    const frqWeighted =
      (totalFRQ / 24) * 37.5;

    const composite =
      Math.round((mcqWeighted + frqWeighted) * 10) / 10;

    let score = 1;
    let status = 'No Recommendation';
    let badgeColor: CalculatorResult['qualificationBadgeColor'] = 'rose';
    let percentile = 'Estimated range';

    if (composite >= 73) {
      score = 5;
      status = 'Extremely Well Qualified';
      badgeColor = 'emerald';
      percentile = 'Estimated AP Score 5 range';
    } else if (composite >= 58) {
      score = 4;
      status = 'Very Well Qualified';
      badgeColor = 'blue';
      percentile = 'Estimated AP Score 4 range';
    } else if (composite >= 44) {
      score = 3;
      status = 'Qualified';
      badgeColor = 'amber';
      percentile = 'Estimated AP Score 3 range';
    } else if (composite >= 30) {
      score = 2;
      status = 'Possibly Qualified';
      badgeColor = 'rose';
      percentile = 'Estimated AP Score 2 range';
    }

    return {
      mainScore: score,
      mainScoreLabel: 'Estimated AP Score',
      maxScore: 5,

      qualificationStatus: status,
      qualificationBadgeColor: badgeColor,
      percentileText: percentile,

      compositePoints: composite,
      maxCompositePoints: 100,

      isEstimated: true,

      subscores: [
        {
          label: 'Section I: Multiple Choice (62.5%)',
          value: `${totalMCQ} / 42 raw pts (${Math.round(mcqWeighted * 10) / 10}/62.5 weighted)`
        },
        {
          label: 'Section II: Free Response (37.5%)',
          value: `${totalFRQ} / 24 raw pts (${Math.round(frqWeighted * 10) / 10}/37.5 weighted)`
        },
        {
          label: 'Total Composite Score',
          value: `${composite} / 100 pts`
        }
      ],

      summaryNote:
        `Your estimated Composite Score is ${composite}/100, which falls in the estimated AP Score ${score} range.`
    };
  },
  faqs: apPrecalculusFaqs,
  seoArticle: apPrecalculusSeoArticle
};

export default apPrecalculusCalculator;
