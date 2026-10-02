import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apPhysicsFaqs: CalculatorFaq[] = [
  {
    "question": "How can I calculate my AP Physics 1 score?",
    "answer": "To calculate your AP Physics 1 score, add your multiple-choice and free-response results using their weightings. You can also enter your scores into an AP Physics 1 Score Calculator to get an estimated score from 1 to 5."
  },
  {
    "question": "How is AP Physics 1 scored?",
    "answer": "Ap Physics 1 scored using both multiple-choice and free-response questions. Your performance in both sections is added to calculate a composite score, which is then converted into an AP score from 1 to 5."
  },
  {
    "question": "What score do you need to pass AP Physics 1?",
    "answer": "A 3 or higher is considered a passing AP score. However, college credit or placement depends on the college or university policies."
  },
  {
    "question": "What percent is a 5 on AP Physics 1?",
    "answer": "There is no fixed percentage that gurantees a 5 on AP Physics 1. A score calculator can give you an estimated range, but the official AP score comes from the College Board."
  },
  {
    "question": "How are AP Physics 1 FRQs scored?",
    "answer": "AP Physics 1 FRQs are scored based on the points you earn in each part of the questions. Your FRQ points are added with your multiple-choice performance to determine your overall AP Physics 1 score."
  }
];

export const apPhysicsSeoArticle: SeoArticle = {
  "calculatorId": "ap-physics",
  "title": "AP Physics 1 Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Physics 1 Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Physics 1 Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Physics 1 Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Physics 1 Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP Physics 1 Score Distributions"
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
      "title": "What is the AP Physics 1 Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Physics 1 Score Calculator** is a free educational tool that helps students to calculate their estimated AP score based on their performance in the multiple-choice (MCQ) and free-response (FRQ) sections.",
        "The format of the **2027 AP Physics 1 exam** includes 42 multiple-choice questions and 4 free-response questions. Each section contributes 50% to the overall exam score."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP Physics 1 Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "Using the AP Physics 1 Score Calculator is simple. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "**Enter your correct MCQs –** The AP Physics 1 exam has 42 multiple-choice questions. Enter the number of questions you answered correctly.",
        "**Enter your FRQ points –** The Free-Response section consists of 4 questions worth 40 raw points in total (FRQ 1: 10 pts, FRQ 2: 12 pts, FRQ 3: 10 pts, FRQ 4: 8 pts). Enter the points you scored on each question.",
        "**View your result –** The calculator combines your weighted MCQ and FRQ scores (50% each) to give you an estimated composite score out of 100 and your predicted AP score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "To understand how your AP Physics 1 score is determined, it is helpful to know the exam structure, time limits, and section weightings:"
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
            "42 Questions",
            "85 Minutes",
            "50% of Total"
          ],
          [
            "Section II: Free Response",
            "4 Questions (40 pts)",
            "95 Minutes",
            "50% of Total"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "**Note on Format:** 42 MCQs in 85 minutes (50%) + 4 FRQs in 95 minutes (50%). **The 2027 exam is a hybrid digital exam.** Scientific or graphing calculators are permitted on both sections."
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Physics 1 Score Calculator Work?"
    },
    {
      "type": "paragraph",
      "text": "The **AP Physics 1 exam** is divided into two equally weighted sections:"
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
      "text": "Each section accounts for 50% of your total composite score. The AP Physics 1 Score Calculator converts your raw section points into weighted scores, combines them into a 100-point composite score, and maps that score to an estimated AP grade from 1 to 5."
    },
    {
      "type": "h3",
      "title": "Section I: Multiple-Choice Questions"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The multiple-choice section contains 42 single-select questions with 85 minutes allotted.",
        "Your raw correct answers are converted to a weighted score out of 50 using this formula:"
      ]
    },
    {
      "type": "formula",
      "title": "",
      "formula": "MCQ Weighted Score = (Correct Answers ÷ 42) × 50"
    },
    {
      "type": "h3",
      "title": "Section II: Free-Response Questions"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The free-response section contains 4 multi-part questions with 95 minutes allotted, totaling 40 raw points (50% of the total score):"
      ]
    },
    {
      "type": "bulletList",
      "items": [
        "FRQ 1: Mathematical Routines (10 points)",
        "FRQ 2: Translation Between Representations (12 points)",
        "FRQ 3: Experimental Design and Analysis (10 points)",
        "FRQ 4: Qualitative/Quantitative Translation (8 points)"
      ]
    },
    {
      "type": "paragraph",
      "text": "Your total raw FRQ points are converted into a weighted score out of 50 using:"
    },
    {
      "type": "formula",
      "title": "",
      "formula": "FRQ Weighted Score = (Total FRQ Points ÷ 40) × 50"
    },
    {
      "type": "h3",
      "title": "AP Physics 1 Composite Score"
    },
    {
      "type": "paragraph",
      "text": "The calculator adds your weighted MCQ and FRQ scores together to determine your composite score out of 100:"
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Composite Score = MCQ Weighted Score + FRQ Weighted Score"
    },
    {
      "type": "paragraph",
      "text": "Your composite score is then compared with estimated AP score ranges used by this calculator to determine your predicted AP grade from 1 to 5."
    },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Physics 1 Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "The score ranges below are used to convert your composite score (out of 100) into an estimated AP score from 1 to 5:"
    },
    {
      "type": "table",
      "id": "score-ranges-table",
      "data": {
        "headers": [
          "AP Score",
          "Estimated Composite Cutoff",
          "Qualification Meaning"
        ],
        "rows": [
          [
            "5",
            "72 – 100",
            "Extremely Well Qualified"
          ],
          [
            "4",
            "57 – 71.9",
            "Well Qualified"
          ],
          [
            "3",
            "43 – 56.9",
            "Qualified (College Credit Eligible)"
          ],
          [
            "2",
            "29 – 42.9",
            "Possibly Qualified"
          ],
          [
            "1",
            "0 – 28.9",
            "No Recommendation"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "These score ranges are estimates used by this calculator based on historical equating and scoring models. Official score cutoffs are determined  by the College Board."
    },
    {
      "type": "h2",
      "id": "score-distributions",
      "title": "AP Physics 1 Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The **AP Physics 1 score distribution** shows the proportion of test-takers achieving each score level:"
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
            "19%"
          ],
          [
            "4",
            "24%"
          ],
          [
            "3",
            "25%"
          ],
          [
            "2",
            "15%"
          ],
          [
            "1",
            "17%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "In 2026, 68% of students scored 3 or higher."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apPhysicsFaqs
    }
  ]
};

export const apPhysicsCalculator: CalculatorConfig = {
  "id": "ap-physics",
  "title": "AP Physics 1 Score Calculator",
  "shortName": "AP Physics 1",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "AP Physics 1 Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP Physics 1 Score Calculator to estimate your 1-5 AP score. Enter your scores and get an estimate for the 2027 AP Physics 1 exam.",
  "overview": "AP Physics 1 has 42 multiple-choice questions worth 50% and 4 free-response questions worth the other 50%. Enter your scores to get an estimate of your AP score.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I: Multiple-Choice Questions (MCQ)",
      "sublabel": "42 multiple-choice questions",
      "min": 0,
      "max": 42,
      "defaultValue": 29,
      "unit": "/ 42"
    },
    {
      "id": "frq_1",
      "label": "FRQ 1: Mathematical Routines",
      "sublabel": "10 points maximum",
      "min": 0,
      "max": 10,
      "defaultValue": 7,
      "unit": "/ 10"
    },
    {
      "id": "frq_2",
      "label": "FRQ 2: Translation Between Representations",
      "sublabel": "12 points maximum",
      "min": 0,
      "max": 12,
      "defaultValue": 8,
      "unit": "/ 12"
    },
    {
      "id": "frq_3",
      "label": "FRQ 3: Experimental Design and Analysis",
      "sublabel": "10 points maximum",
      "min": 0,
      "max": 10,
      "defaultValue": 6,
      "unit": "/ 10"
    },
    {
      "id": "frq_4",
      "label": "FRQ 4: Qualitative/Quantitative Translation",
      "sublabel": "8 points maximum",
      "min": 0,
      "max": 8,
      "defaultValue": 5,
      "unit": "/ 8"
    }
  ],
  "relatedCalculatorIds": [
    "ap-calculus-ab",
    "ap-calculus-bc",
    "ap-chemistry",
    "ap-biology"
  ],
  "isPopular": true
,
  calculate: (inputs) => {
    const mcq = Math.min(42, Math.max(0, inputs.mcq || 0));

    const frq1 = Math.min(10, Math.max(0, inputs.frq_1 || 0));
    const frq2 = Math.min(12, Math.max(0, inputs.frq_2 || 0));
    const frq3 = Math.min(10, Math.max(0, inputs.frq_3 || 0));
    const frq4 = Math.min(8, Math.max(0, inputs.frq_4 || 0));

    const frq = frq1 + frq2 + frq3 + frq4;

    // Section I = 50%
    const mcqWeighted = (mcq / 42) * 50;

    // Section II = 50%
    const frqWeighted = (frq / 40) * 50;

    const composite =
      Math.round((mcqWeighted + frqWeighted) * 10) / 10;

    let score = 1;
    let status = 'No Recommendation';
    let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'rose';
    let percentile = '~25th Percentile';

    if (composite >= 72) {
      score = 5;
      status = 'Extremely Well Qualified';
      badgeColor = 'emerald';
      percentile = 'Top ~9% (91st+ Percentile)';
    } else if (composite >= 57) {
      score = 4;
      status = 'Well Qualified';
      badgeColor = 'blue';
      percentile = '~68th-90th Percentile';
    } else if (composite >= 43) {
      score = 3;
      status = 'Qualified (College Credit Eligible)';
      badgeColor = 'amber';
      percentile = '~44th-67th Percentile';
    } else if (composite >= 29) {
      score = 2;
      status = 'Possibly Qualified';
      badgeColor = 'rose';
      percentile = '~22nd-43rd Percentile';
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

      summaryNote:
        `Your composite score is ${composite.toFixed(1)} / 100. Both Section I and Section II contribute equally at 50% each.`,

      subscores: [
        {
          label: 'MCQ Contribution',
          value: `${mcqWeighted.toFixed(1)} pts`,
          max: 50,
          percent: Math.round((mcqWeighted / 50) * 100)
        },
        {
          label: 'FRQ Contribution',
          value: `${frqWeighted.toFixed(1)} pts`,
          max: 50,
          percent: Math.round((frqWeighted / 50) * 100)
        },
        {
          label: 'Raw Multiple Choice Correct',
          value: `${mcq} / 42`
        },
        {
          label: 'Raw Free Response Total',
          value: `${frq} / 40`
        }
      ]
    };
  },
  faqs: apPhysicsFaqs,
  seoArticle: apPhysicsSeoArticle
};

export default apPhysicsCalculator;
