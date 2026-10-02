import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apCalculusBcFaqs: CalculatorFaq[] = 
[
  {
    "question": "What is the difference between AP Calculus AB and AP Calculus BC?",
    "answer": "AP Calculus AB covers the main calculus topics taught in a first semester college calculus course. AP Calculus BC covers all of AB plus more topics, including sequences, series, parametric equations, and polar coordinates."
  },
  {
    "question": "How many MCQs are on the AP Calculus BC exam?",
    "answer": "The AP Calculus BC exam has 42 multiple-choice questions. The multiple-choice section is worth 50% of your total exam score."
  },
  {
    "question": "How many FRQs are on AP Calculus BC?",
    "answer": "The AP Calculus BC exam has 6 free-response questions. The free-response section is also worth 50% of your total exam score."
  },
  {
    "question": "How is AP Calculus BC scored?",
    "answer": "The AP Calculus BC exam has two sections, and each section is worth 50%. Your multiple-choice and free-response results are combined to get your total exam score, which is then used to give you an AP score from 1 to 5."
  },
  {
    "question": "What is the AP Calculus BC AB subscore?",
    "answer": "The AP Calculus BC AB subscore shows how you performed on the AP Calculus AB topics covered in the BC exam."
  },
  {
    "question": "Is 60% a 5 on AP Calculus BC?",
    "answer": "Not always. There is no fixed percentage that guarantees a 5 on AP Calculus BC. The score needed can change from year to year, so 60% may not always be enough for a 5."
  }
];

export const apCalculusBcSeoArticle: SeoArticle = {
  "calculatorId": "ap-calculus-bc",
  "title": "AP Calculus BC Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Calc BC Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Calc BC Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Calc BC Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Calc BC Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP Calc BC Score Distributions"
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
      "title": "What is the AP Calc BC Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Calc BC Score Calculator** helps you estimate your AP score from 1 to 5 based on your multiple-choice and free-response performance. It follows the 2027 exam format, with 42 multiple-choice questions and 54 free-response points. Both sections are worth 50% of your total score.",
        "You can use the calculator with practice tests, class tests, or mock exams. Enter your scores to see your estimated score out of 100 and your possible AP score from 1 to 5. The result is only an estimate and is not an official College Board score."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP Calc BC Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "Using the AP Calc BC Score Calculator is easy. Follow these steps to get your estimated score:"
    },
    {
      "type": "orderedList",
      "items": [
        "Enter your correct answers for Part A (29 questions) and Part B (13 questions) out of 42 total questions.",
        "Enter your raw points scored on the 6 Free-Response Questions for a maximum of 54 points.",
        "The calculator combines your MCQ and FRQ scores, with both sections worth 50%, to give you an estimated AP score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "Knowing how many questions are in each section, how much time you get, and how each section counts can help you understand your AP Calc BC score."
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
            "Section I Part A (No Calculator)",
            "29 Questions",
            "62 Minutes",
            "34.5% of Score"
          ],
          [
            "Section I Part B (Calculator Required)",
            "13 Questions",
            "38 Minutes",
            "15.5% of Score"
          ],
          [
            "Section II Part A (Calculator Required)",
            "2 Questions (18 pts)",
            "30 Minutes",
            "16.7% of Score"
          ],
          [
            "Section II Part B (No Calculator)",
            "4 Questions (36 pts)",
            "60 Minutes",
            "33.3% of Score"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "**Note:** The exam also reports an AB subscore."
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Calc BC Score Calculator Work?"
    },
   {
    "type": "paragraph",
    "text": "The **AP Calculus BC exam** has two main sections:"
  },
  {
    "type": "bulletList",
    "items": [
      "Section I: Multiple-Choice Questions",
      "Section II: Free-Response Questions"
    ]
  },
  {
    "type": "h3",
    "title": "Section I: Multiple-Choice Questions"
  },
  {
    "type": "paragraph",
    "text": "The AP Calculus BC multiple-choice section has 42 questions. You have 1 hour and 40 minutes to answer them, and this section is worth 50% of the exam."
  },
  {
    "type": "bulletList",
    "items": [
      "Part A - 29 questions",
      "Part B - 13 questions",
      "Total: 42 questions"
    ]
  },
  {
    "type": "paragraph",
    "text": "Your correct answers are converted to a maximum of 50 points because this section is worth 50% of the exam."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated MCQ Score = (Correct Answers ÷ 42) × 50"
  },
  {
    "type": "h3",
    "title": "Section II: Free-Response Questions"
  },
  {
    "type": "paragraph",
    "text": "The Free-Response section has 6 questions. You have 1 hour and 30 minutes to complete them, and this section is worth 50% of the exam."
  },
  {
    "type": "bulletList",
    "items": [
      "Part A - 2 questions",
      "Part B - 4 questions",
      "Total: 54 raw points"
    ]
  },
  {
    "type": "paragraph",
    "text": "The **AP Calculus BC Score Calculator** converts your FRQ points to a maximum of 50 points because this section is worth 50% of the exam."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated FRQ Score = (FRQ Raw Points ÷ 54) × 50"
  },
  {
    "type": "h3",
    "title": "AP Calc BC Composite Score"
  },
  {
    "type": "paragraph",
    "text": "The calculator adds your MCQ and FRQ scores to get your estimated score out of 100."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Composite Score = MCQ Score + FRQ Score"
  },
  {
    "type": "paragraph",
    "text": "Your estimated score is then compared with the score ranges used by the calculator to give you an estimated AP Calculus BC score from 1 to 5."
  },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Calculus BC Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "The score ranges below are used to convert your composite score into an estimated AP score from 1 to 5."
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
            "60.0 – 100.0 Composite"
          ],
          [
            "4",
            "Well Qualified",
            "49.0 – 59.9 Composite"
          ],
          [
            "3",
            "Qualified",
            "38.0 – 48.9 Composite"
          ],
          [
            "2",
            "Possibly Qualified",
            "28.0 – 37.9 Composite"
          ],
          [
            "1",
            "No Recommendation",
            "0.0 – 27.9 Composite"
          ]
        ]
      }
    },
    {
"type":"paragraph",
"text":"These score ranges are estimates used by this calculator and may differ from the official score set by the College Board."
    },
    {
      "type": "h2",
      "id": "score-distributions",
      "title": "AP Calc BC Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The **AP Calculus BC score distribution** shows the percentage of students who received each AP score from 1 to 5."
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
            "46%"
          ],
          [
            "4",
            "22%"
          ],
          [
            "3",
            "14%"
          ],
          [
            "2",
            "14%"
          ],
          [
            "1",
            "4%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "In 2026, 82% of students scored 3 or higher on the AP Calculus BC exam."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apCalculusBcFaqs,
      "title": "Common Questions About AP Calculus BC"
    }
  ]
};

export const apCalculusBcCalculator: CalculatorConfig = {
  "id": "ap-calculus-bc",
  "title": "AP Calc BC Score Calculator",
  "shortName": "AP Calculus BC",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "AP Calc BC Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP Calculus BC Score Calculator! Enter your MCQ & FRQ points to calculate your predicted 1–5 score in seconds. Updated for 2027.",
  "overview": "Estimate your AP Calc BC score from 1 to 5. Enter your multiple-choice and free-response scores to see your estimated result. Each section is worth 50% of the exam.",
  "fields": [
    {
      "id": "mcq_a",
      "label": "Section I Part A: Multiple Choice",
      "sublabel": "29 questions (62 minutes)",
      "min": 0,
      "max": 29,
      "defaultValue": 23,
      "unit": "/ 29"
    },
    {
      "id": "mcq_b",
      "label": "Section I Part B: Multiple Choice",
      "sublabel": "13 questions (38 minutes)",
      "min": 0,
      "max": 13,
      "defaultValue": 10,
      "unit": "/ 13"
    },
    {
      "id": "frq_1",
      "label": "Section II Part A: Free Response 1",
      "sublabel": "9 points maximum",
      "min": 0,
      "max": 9,
      "defaultValue": 7,
      "unit": "/ 9"
    },
    {
      "id": "frq_2",
      "label": "Section II Part A: Free Response 2",
      "sublabel": "9 points maximum",
      "min": 0,
      "max": 9,
      "defaultValue": 7,
      "unit": "/ 9"
    },
    {
      "id": "frq_3",
      "label": "Section II Part B: Free Response 3",
      "sublabel": "9 points maximum",
      "min": 0,
      "max": 9,
      "defaultValue": 6,
      "unit": "/ 9"
    },
    {
      "id": "frq_4",
      "label": "Section II Part B: Free Response 4",
      "sublabel": "9 points maximum",
      "min": 0,
      "max": 9,
      "defaultValue": 6,
      "unit": "/ 9"
    },
    {
      "id": "frq_5",
      "label": "Section II Part B: Free Response 5",
      "sublabel": "9 points maximum",
      "min": 0,
      "max": 9,
      "defaultValue": 6,
      "unit": "/ 9"
    },
    {
      "id": "frq_6",
      "label": "Section II Part B: Free Response 6",
      "sublabel": "9 points maximum",
      "min": 0,
      "max": 9,
      "defaultValue": 6,
      "unit": "/ 9"
    }
  ],
  "relatedCalculatorIds": [
    "ap-calculus-ab",
    "ap-physics",
    "ap-statistics",
    "ap-computer-science-a"
  ],
  "isPopular": true
,
  calculate: (inputs) => {
    // Section I: 42 MCQs
    const mcqA = Math.min(29, Math.max(0, Number(inputs.mcq_a) || 0));
    const mcqB = Math.min(13, Math.max(0, Number(inputs.mcq_b) || 0));
    const totalMcq = mcqA + mcqB;

    // Section II: 6 FRQs, 9 points each = 54 points
    const frq1 = Math.min(9, Math.max(0, Number(inputs.frq_1) || 0));
    const frq2 = Math.min(9, Math.max(0, Number(inputs.frq_2) || 0));
    const frq3 = Math.min(9, Math.max(0, Number(inputs.frq_3) || 0));
    const frq4 = Math.min(9, Math.max(0, Number(inputs.frq_4) || 0));
    const frq5 = Math.min(9, Math.max(0, Number(inputs.frq_5) || 0));
    const frq6 = Math.min(9, Math.max(0, Number(inputs.frq_6) || 0));

    const totalFrq = frq1 + frq2 + frq3 + frq4 + frq5 + frq6;

    // Convert each section to 50 weighted points
    const mcqWeighted =
      Math.round(((totalMcq / 42) * 50) * 10) / 10;

    const frqWeighted =
      Math.round(((totalFrq / 54) * 50) * 10) / 10;

    // Composite score out of 100
    const composite =
      Math.round((mcqWeighted + frqWeighted) * 10) / 10;

    // Estimated AP score ranges
    let score = 1;
    let status = 'No Recommendation';
    let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'rose';

    if (composite >= 60) {
      score = 5;
      status = 'Extremely Well Qualified';
      badgeColor = 'emerald';
    } else if (composite >= 49) {
      score = 4;
      status = 'Well Qualified';
      badgeColor = 'blue';
    } else if (composite >= 38) {
      score = 3;
      status = 'Qualified';
      badgeColor = 'amber';
    } else if (composite >= 28) {
      score = 2;
      status = 'Possibly Qualified';
      badgeColor = 'rose';
    }

    // Approximate AB subscore estimate
    const abSubscore = Math.min(
      5,
      Math.max(1, Math.round(score * 1.05))
    );

    return {
      mainScore: score,
      mainScoreLabel: 'Estimated AP BC Score',
      maxScore: 5,

      qualificationStatus: status,
      qualificationBadgeColor: badgeColor,

      compositePoints: composite,
      maxCompositePoints: 100,

      isEstimated: true,

      summaryNote:
        `Your estimated BC score is ${score} (Composite: ${composite.toFixed(1)}/100) with an estimated AB Subscore of ${abSubscore}.`,

      subscores: [
        {
          label: 'Estimated AB Subscore',
          value: `${abSubscore} / 5`
        },
        {
          label: 'MCQ Weighted Points',
          value: `${mcqWeighted.toFixed(1)} pts`,
          max: 50,
          percent: Math.round((mcqWeighted / 50) * 100)
        },
        {
          label: 'FRQ Weighted Points',
          value: `${frqWeighted.toFixed(1)} pts`,
          max: 50,
          percent: Math.round((frqWeighted / 50) * 100)
        },
        {
          label: 'Total Raw Points',
          value: `${totalMcq + totalFrq} / 96`
        }
      ]
    };
  },
  faqs: apCalculusBcFaqs,
  seoArticle: apCalculusBcSeoArticle
};

export default apCalculusBcCalculator;
