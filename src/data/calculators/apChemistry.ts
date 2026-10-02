import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apChemistryFaqs: CalculatorFaq[] = [
  {
    "question": "Is 4 a Good AP Chem Score?",
    "answer": "Yes, a score of 4 is considered “Very well qualified” on the AP grading scale. Many colleges accept a 4 for credit or placement, although requirements vary by colleges. If the AP Chem Score Calculator gives you a 4, that means you’re performing at a strong level."
  },
  {
    "question": "How is AP Chem Score Calculated?",
    "answer": "Your AP Chem score is calculated by combining your MCQ and FRQ performance, with each section contributing 50% to the composite score. The calculator then compares your composite score with the score ranges used for the 1–5 scale to give you an AP score. These ranges are estimates and may vary from year to year."
  },
  {
    "question": "How Many Students Get a 5 on AP Chem?",
    "answer": "According to the 2026 AP Chemistry score distribution, 15% of students scored a 5."
  },
  {
    "question": "How Many Questions Are on AP Chemistry?",
    "answer": "The MCQ section of the AP Chemistry exam has 60 questions, while the FRQ section has 7 questions (3 long-answer and 4 short-answer). The AP Chem Score Calculator uses your performance across both sections to calculate your composite score."
  }
];

export const apChemistrySeoArticle: SeoArticle = {
  "calculatorId": "ap-chemistry",
  "title": "AP Chem Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Chem Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Chem Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Chem Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Chemistry Score Ranges"
    },
    {
      "id": "score-distribution",
      "label": "AP Chemistry Score Distribution"
    },
    {
      "id": "grading-scale",
      "label": "AP Chem Grading Scale 1 to 5"
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
      "title": "What is AP Chem Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Chem Score Calculator** is a free online tool that estimates your AP score based on your performance in the Multiple-Choice (MCQ) and Free-Response (FRQ) sections.",
        "Enter the number of correct MCQs and your FRQ points to calculate your combined score and see your estimated AP score on a scale of 1 to 5. Whether you’re studying independently or preparing through school, the **AP Chemistry Score Calculator** can help you understand your current performance."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use AP Chem Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "It's quite simple to use the **AP Chem Score Calc**. Follow this steps:"
    },
    {
      "type": "orderedList",
      "items": [
        "Enter your correct MCQs – AP Chemistry exam consists of 60 multiple-choice questions. Enter the number of questions you answered correctly.",
        "Enter your FRQ points: The 'Free Response' section has 7 questions (3 long + 4 short).Enter your total FRQ points.",
        "View your result: The calculator combines your MCQ and FRQ scores based on their 50% weightings and shows your estimated AP score from 1 to 5 along with percentile."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "Before using the calculator, it's helpful to know how the **AP Chemistry Exam** is divided, how much  time you get for each section, and how each section contributes to your Score."
    },
    {
      "type": "table",
      "id": "exam-structure-table",
      "data": {
        "headers": [
          "Section Name",
          "Number of Questions",
          "Time Allotted",
          "Weighting in Total Score"
        ],
        "rows": [
          [
            "Section I: Multiple Choice",
            "60 Questions",
            "90 Minutes",
            "50% of Total"
          ],
          [
            "Section II: Free Response",
            "3 Long (10 pts) + 4 Short (4 pts)",
            "105 Minutes",
            "50% of Total"
          ]
        ]
      }
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Chem Score Calculator Work?"
    },
    {
      "type": "paragraph",
      "text": "The chemistry exam has two main sections:"
    },
    {
      "type": "bulletList",
      "items": [
        "Section I: Multiple-Choice Questions (MCQ)",
        "Section II: Free-Response Questions (FRQ)"
      ]
    },
    {
      "type": "paragraph",
      "text": "Both sections are worth 50% of the exam. The calculator converts your performance in each section into a score out of 50 and combines them to get a composite score out of 100."
    },
    {
      "type": "h3",
      "title": "Section I: Multiple-Choice Questions"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The AP Chemistry multiple-choice section has 60 questions, with 90 minutes to complete them. This section is worth 50% of the exam. A scientific or graphing calculator is permitted and recommended.",
        "Your correct answers are converted to a maximum of 50 points using:"
      ]
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Estimated MCQ Score = (Correct Answers ÷ 60) × 50"
    },
    {
      "type": "h3",
      "title": "Section II: Free-Response Questions"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The Free-Response section has 7 questions and 105 minutes (1 hour 45 minutes) to complete them.",
        "In includes:"
      ]
    },
    {
      "type": "bulletList",
      "items": [
        "3 long free-response questions — 10 points each",
        "4 short free-response questions — 4 points each",
        "Total: 46 raw points"
      ]
    },
    {
      "type": "paragraph",
      "text": "The AP Chem Score Calculator converts your FRQ points into a maximum of 50 points using the formula below:"
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Estimated FRQ Score = (FRQ Raw Points ÷ 46) × 50"
    },
    {
      "type": "h3",
      "title": "AP Chemistry Composite Score"
    },
    {
      "type": "paragraph",
      "text": "The calculator adds the scores from both sections to get your composite score out of 100."
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Composite Score = MCQ Score + FRQ Score"
    },
    {
      "type": "paragraph",
      "text": "Your composite score is then matched with the score ranges used by the calculator to give you an estimated AP score from 1 to 5."
    },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Chemistry Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "The score ranges below are used to convert your composite score into an estimated AP score from 1 to 5."
    },
    {
      "type": "table",
      "id": "composite-cutoffs-table",
      "data": {
        "headers": [
          "AP Score",
          "Estimated Cutoff"
        ],
        "rows": [
          [
            "5",
            "71 – 100"
          ],
          [
            "4",
            "57 – 70"
          ],
          [
            "3",
            "42 – 56"
          ],
          [
            "2",
            "27 – 41"
          ],
          [
            "1",
            "0 – 26"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "These score ranges are estimates used by this calculator and may differ from the official score set by the College Board."
    },
    {
      "type": "h2",
      "id": "score-distribution",
      "title": "AP Chemistry Score Distribution"
    },
    {
      "type": "paragraph",
      "text": "The AP Chemistry score distribution for 2026 was:"
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
            "15%"
          ],
          [
            "4",
            "31%"
          ],
          [
            "3",
            "30%"
          ],
          [
            "2",
            "18%"
          ],
          [
            "1",
            "6%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "In 2026, 76% of students scored 3 or higher."
    },
    {
      "type": "h2",
      "id": "grading-scale",
      "title": "AP Chem Grading Scale 1 to 5"
    },
    {
      "type": "paragraph",
      "text": "The AP Chem grading scale ranges from 1 to 5. Here’s what each score means:"
    },
    {
      "type": "table",
      "id": "grading-scale-table",
      "data": {
        "headers": [
          "AP Score",
          "Meaning"
        ],
        "rows": [
          [
            "5",
            "Extremely well qualified"
          ],
          [
            "4",
            "Very well qualified"
          ],
          [
            "3",
            "Qualified"
          ],
          [
            "2",
            "Possibly qualified"
          ],
          [
            "1",
            "No recommendation"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "Many colleges and universities grant credit and placement based on AP Chemistry scores; however, credit policies vary from college to college."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apChemistryFaqs
    }
  ]
};

export const apChemistryCalculator: CalculatorConfig = {
  "id": "ap-chemistry",
  "title": "AP Chem Score Calculator",
  "shortName": "AP Chem",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "AP Chem Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP Chem Score Calculator: enter your MCQ & FRQ points to predict your 1–5 score. No sign-up. Try it now!",
  "overview": "The AP Chemistry exam has 60 MCQs and 7 FRQs, with each section carrying 50% of the total score. Enter your scores to estimate your AP score from 1 to 5.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I: Multiple-Choice Questions (MCQ)",
      "sublabel": "60 individual questions (1 point each)",
      "min": 0,
      "max": 60,
      "defaultValue": 45,
      "unit": "/ 60"
    },
    {
      "id": "frq_long_1",
      "label": "Long FRQ 1",
      "sublabel": "",
      "min": 0,
      "max": 10,
      "defaultValue": 7,
      "group": "Section II: Long Free-Response Questions",
      "groupTotalMax": 30,
      "groupTotalLabel": "Long FRQ Total"
    },
    {
      "id": "frq_long_2",
      "label": "Long FRQ 2",
      "sublabel": "",
      "min": 0,
      "max": 10,
      "defaultValue": 7,
      "group": "Section II: Long Free-Response Questions",
      "groupTotalMax": 30,
      "groupTotalLabel": "Long FRQ Total"
    },
    {
      "id": "frq_long_3",
      "label": "Long FRQ 3",
      "sublabel": "",
      "min": 0,
      "max": 10,
      "defaultValue": 7,
      "group": "Section II: Long Free-Response Questions",
      "groupTotalMax": 30,
      "groupTotalLabel": "Long FRQ Total"
    },
    {
      "id": "frq_short_1",
      "label": "Short FRQ 1",
      "sublabel": "0–4 points",
      "min": 0,
      "max": 4,
      "defaultValue": 3,
      "group": "Section II: Short Free-Response Questions",
      "groupTotalMax": 16,
      "groupTotalLabel": "Short FRQ Total"
    },
    {
      "id": "frq_short_2",
      "label": "Short FRQ 2",
      "sublabel": "0–4 points",
      "min": 0,
      "max": 4,
      "defaultValue": 3,
      "group": "Section II: Short Free-Response Questions",
      "groupTotalMax": 16,
      "groupTotalLabel": "Short FRQ Total"
    },
    {
      "id": "frq_short_3",
      "label": "Short FRQ 3",
      "sublabel": "0–4 points",
      "min": 0,
      "max": 4,
      "defaultValue": 3,
      "group": "Section II: Short Free-Response Questions",
      "groupTotalMax": 16,
      "groupTotalLabel": "Short FRQ Total"
    },
    {
      "id": "frq_short_4",
      "label": "Short FRQ 4",
      "sublabel": "0–4 points",
      "min": 0,
      "max": 4,
      "defaultValue": 2,
      "group": "Section II: Short Free-Response Questions",
      "groupTotalMax": 16,
      "groupTotalLabel": "Short FRQ Total"
    }
  ],
  "relatedCalculatorIds": [
    "ap-biology",
    "ap-physics",
    "ap-calculus-bc",
    "ap-statistics"
  ],
  "isPopular": true
,
  calculate: (inputs) => {
      const mcq = Math.min(60, Math.max(0, inputs.mcq || 0));
      const frqLong = inputs.frq_long_1 !== undefined
        ? Math.min(30, Math.max(0, (inputs.frq_long_1 || 0) + (inputs.frq_long_2 || 0) + (inputs.frq_long_3 || 0)))
        : Math.min(30, Math.max(0, inputs.frq_long || 0));
      const frqShort = inputs.frq_short_1 !== undefined
        ? Math.min(16, Math.max(0, (inputs.frq_short_1 || 0) + (inputs.frq_short_2 || 0) + (inputs.frq_short_3 || 0) + (inputs.frq_short_4 || 0)))
        : Math.min(16, Math.max(0, inputs.frq_short || 0));
      const totalFrqRaw = frqLong + frqShort;

      // Section 1: 50% = (mcq / 60) * 50
      const mcqWeighted = (mcq / 60) * 50;
      // Section 2: 50% = (totalFrqRaw / 46) * 50
      const frqWeighted = (totalFrqRaw / 46) * 50;
      const composite = Math.round((mcqWeighted + frqWeighted) * 10) / 10;

      let score = 1;
      let status = 'No Recommendation';
      let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'rose';
      let percentile = '~25th Percentile';

      if (composite >= 71) {
        score = 5;
        status = 'Extremely Well Qualified';
        badgeColor = 'emerald';
        percentile = 'Top ~15% (85th+ Percentile)';
      } else if (composite >= 57) {
        score = 4;
        status = 'Well Qualified';
        badgeColor = 'blue';
        percentile = '~65th-84th Percentile';
      } else if (composite >= 42) {
        score = 3;
        status = 'Qualified (College Credit Eligible)';
        badgeColor = 'amber';
        percentile = '~45th-64th Percentile';
      } else if (composite >= 27) {
        score = 2;
        status = 'Possibly Qualified';
        badgeColor = 'rose';
        percentile = '~20th-44th Percentile';
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
        summaryNote: `Your estimated composite score is ${composite.toFixed(1)} / 100. The score ranges used by this calculator are estimates and are not official College Board cutoffs.`,
        subscores: [
          { label: 'MCQ Weighted Contribution', value: `${mcqWeighted.toFixed(1)} pts`, max: 50, percent: Math.round((mcqWeighted / 50) * 100) },
          { label: 'FRQ Weighted Contribution', value: `${frqWeighted.toFixed(1)} pts`, max: 50, percent: Math.round((frqWeighted / 50) * 100) },
          { label: 'Raw Section I Correct', value: `${mcq} / 60` },
          { label: 'Raw Section II Points', value: `${totalFrqRaw} / 46` }
        ]
      };
    },
  faqs: apChemistryFaqs,
  seoArticle: apChemistrySeoArticle
};

export default apChemistryCalculator;
