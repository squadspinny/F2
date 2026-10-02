import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apUsHistoryFaqs: CalculatorFaq[] = [
   {
    "question": "How many MCQs are on the APUSH exam?",
    "answer": "The APUSH exam has 55 multiple-choice questions. The MCQ section makes up 40% of your total exam score."
  },
  {
    "question": "How many SAQs are on the APUSH exam?",
    "answer": "The APUSH exam has 3 short-answer questions. The SAQ section makes up 20% of your total exam score."
  },
  {
    "question": "What is a DBQ in APUSH?",
    "answer": "A DBQ is a Document-Based Question. You read historical documents and use them to build and support your answer."
  },
  {
    "question": "What is an LEQ in APUSH?",
    "answer": "An LEQ is a Long Essay Question. You write an essay that answers a history question using facts and examples."
  },
  {
    "question": "How is the APUSH exam scored?",
    "answer": "The APUSH exam has four parts: MCQs are 40%, SAQs are 20%, the DBQ is 25%, and the LEQ is 15%. Your scores from all four parts are combined to give you an AP score from 1 to 5."
  },
  {
    "question": "What percentage do you need to get a 5 on APUSH?",
    "answer": "There is no fixed percentage for a 5 on APUSH. The score needed can change each year, so one percentage does not always mean you will get a 5."
  }
];

export const apUsHistorySeoArticle: SeoArticle = {
  "calculatorId": "ap-us-history",
  "title": "APUSH Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the APUSH Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the APUSH Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the APUSH Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated APUSH Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "APUSH Score Distributions"
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
      "title": "What is the APUSH Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **APUSH Score Calculator** is a free tool that estimates your AP U.S. History score from your performance on the multiple-choice questions (MCQs), SAQs, DBQ, and LEQ.",
        "For the May **2027 AP U.S. History exam**, your score comes from four parts: 40% from MCQs, 20% from SAQs, 25% from the DBQ, and 15% from the LEQ.",
        "These score ranges are only estimates. Your actual College Board AP score may be different, so the result is not an official AP score."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the APUSH Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "Using the APUSH Score Calculator is straightforward. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "Enter your correct Multiple-Choice answers and your points earned on the Short Answer Questions (SAQs).",
        "Enter your scores for the Document-Based Question and Long Essay Question.",
        "The calculator combines your scores to give you an estimated AP U.S. History score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "Here’s a quick look at each part of the **APUSH exam**, including the number of questions, time, and score weight."
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
            "Section I Part A (MCQ)",
            "55 Questions",
            "55 Minutes",
            "40% of Score"
          ],
          [
            "Section I Part B (SAQ)",
            "3 Questions",
            "40 Minutes",
            "20% of Score"
          ],
          [
            "Section II Part A (DBQ)",
            "1 Question (7 pts)",
            "60 Minutes",
            "25% of Score"
          ],
          [
            "Section II Part B (LEQ)",
            "1 Question (6 pts)",
            "40 Minutes",
            "15% of Score"
          ]
        ]
      }
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the APUSH Score Calculator Work?"
    },
  {
    "type": "paragraph",
    "text": "The **AP U.S. History exam** has four main parts:"
  },
  {
    "type": "bulletList",
    "items": [
      "Multiple-Choice Questions (MCQs)",
      "Short-Answer Questions (SAQs)",
      "Document-Based Question (DBQ)",
      "Long Essay Question (LEQ)"
    ]
  },
  {
    "type": "h3",
    "title": "Multiple-Choice Questions"
  },
  {
    "type": "paragraph",
    "text": "The APUSH exam has 55 multiple-choice questions. Enter the number of questions you got correct. This section makes up 40% of the exam."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated MCQ Score = (Correct Answers ÷ 55) × 40"
  },
  {
    "type": "h3",
    "title": "Short-Answer Questions"
  },
  {
    "type": "paragraph",
    "text": "There are 3 short-answer questions, and each one is worth up to 3 points. You can earn up to 9 raw points in this section, which makes up 20% of the exam."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated SAQ Score = (SAQ Points ÷ 9) × 20"
  },
  {
    "type": "h3",
    "title": "Document-Based Question"
  },
  {
    "type": "paragraph",
    "text": "The DBQ is worth up to 7 points and makes up 25% of the exam."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated DBQ Score = (DBQ Points ÷ 7) × 25"
  },
  {
    "type": "h3",
    "title": "Long Essay Question"
  },
  {
    "type": "paragraph",
    "text": "The LEQ is worth up to 6 points and makes up 15% of the exam."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated LEQ Score = (LEQ Points ÷ 6) × 15"
  },
  {
    "type": "h3",
    "title": "APUSH Composite Score"
  },
  {
    "type": "paragraph",
    "text": "The calculator adds your weighted scores from all four parts to get your estimated Composite Score out of 100."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Composite Score = MCQ Score + SAQ Score + DBQ Score + LEQ Score"
  },
  {
    "type": "paragraph",
    "text": "Your estimated Composite Score is then compared with the score ranges used by the calculator to give you an estimated APUSH score from 1 to 5."
  },
  {
    "type": "paragraph",
    "text": "The **APUSH Score Calculator** only provides an estimate. Your actual College Board AP score may be different."
  },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated APUSH Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "These score ranges are estimates used by the calculator. Your actual College Board AP score may be different."
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
            "78 – 100 Composite"
          ],
          [
            "4",
            "Well Qualified",
            "65 – 77 Composite"
          ],
          [
            "3",
            "Qualified",
            "48 – 64 Composite"
          ],
          [
            "2",
            "Possibly Qualified",
            "35 – 47 Composite"
          ],
          [
            "1",
            "No Recommendation",
            "0 – 34 Composite"
          ]
        ]
      }
    },
    {
      "type": "h2",
      "id": "score-distributions",
      "title": "APUSH Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The official **2026 APUSH score distribution** shows the percentage of students who received each AP score from 1 to 5."
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
            "14%"
          ],
          [
            "4",
            "37%"
          ],
          [
            "3",
            "23%"
          ],
          [
            "2",
            "18%"
          ],
          [
            "1",
            "8%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "In 2026, 74% of students scored 3 or higher on the **AP US History exam**."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apUsHistoryFaqs,
      "title": "Common Questions About AP U.S. History"
    }
  ]
};

export const apUsHistoryCalculator: CalculatorConfig = {
  "id": "ap-us-history",
  "title": "APUSH Score Calculator",
  "shortName": "AP U.S. History",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "APUSH Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free APUSH Score Calculator to estimate your AP U.S. History score. Enter your MCQ, SAQ, DBQ, and LEQ scores to get your estimate.",
  "overview": "Estimate your 2027 APUSH score from 1 to 5. Enter your MCQ, SAQ, DBQ, and LEQ scores to get an estimated Composite Score out of 100.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I Part A: Multiple-Choice Questions",
      "sublabel": "55 questions (55 minutes, 40% of exam score)",
      "min": 0,
      "max": 55,
      "defaultValue": 43,
      "unit": "/ 55"
    },
    {
      "id": "saq_1",
      "label": "Part B: Short-Answer Question 1",
      "sublabel": "3 points maximum",
      "min": 0,
      "max": 3,
      "defaultValue": 2,
      "unit": "/ 3"
    },
    {
      "id": "saq_2",
      "label": "Part B: Short-Answer Question 2",
      "sublabel": "3 points maximum",
      "min": 0,
      "max": 3,
      "defaultValue": 2,
      "unit": "/ 3"
    },
    {
      "id": "saq_3",
      "label": "Part B: Short-Answer Question 3",
      "sublabel": "3 points maximum",
      "min": 0,
      "max": 3,
      "defaultValue": 2,
      "unit": "/ 3"
    },
    {
      "id": "dbq",
      "label": "Section II Part A: Document-Based Question (DBQ)",
      "sublabel": "1 essay (7 points maximum, 25% of exam)",
      "min": 0,
      "max": 7,
      "defaultValue": 5,
      "unit": "/ 7"
    },
    {
      "id": "leq",
      "label": "Section II Part B: Long Essay Question (LEQ)",
      "sublabel": "1 essay (6 points maximum, 15% of exam)",
      "min": 0,
      "max": 6,
      "defaultValue": 4,
      "unit": "/ 6"
    }
  ],
  "relatedCalculatorIds": [
    "ap-world-history",
    "ap-human-geography",
    "ap-english-language"
  ],
  "isPopular": true
,
  calculate: (inputs) => {
    const mcq = Math.min(55, Math.max(0, Number(inputs.mcq) || 0));

    const saq1 = Math.min(3, Math.max(0, Number(inputs.saq_1) || 0));
    const saq2 = Math.min(3, Math.max(0, Number(inputs.saq_2) || 0));
    const saq3 = Math.min(3, Math.max(0, Number(inputs.saq_3) || 0));

    const totalSaq = saq1 + saq2 + saq3;

    const dbq = Math.min(7, Math.max(0, Number(inputs.dbq) || 0));
    const leq = Math.min(6, Math.max(0, Number(inputs.leq) || 0));

    const mcqWeighted =
      Math.round(((mcq / 55) * 40) * 10) / 10;

    const saqWeighted =
      Math.round(((totalSaq / 9) * 20) * 10) / 10;

    const dbqWeighted =
      Math.round(((dbq / 7) * 25) * 10) / 10;

    const leqWeighted =
      Math.round(((leq / 6) * 15) * 10) / 10;

    const composite =
      Math.round(
        (mcqWeighted + saqWeighted + dbqWeighted + leqWeighted) * 10
      ) / 10;

    let score = 1;
    let status = 'No Recommendation';
    let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'rose';
    let percentile = '~20th-34th Percentile';

    if (composite >= 78) {
      score = 5;
      status = 'Extremely Well Qualified';
      badgeColor = 'emerald';
      percentile = 'Top ~15%';
    } else if (composite >= 65) {
      score = 4;
      status = 'Well Qualified';
      badgeColor = 'blue';
      percentile = '~60th-84th Percentile';
    } else if (composite >= 48) {
      score = 3;
      status = 'Qualified (College Credit Eligible)';
      badgeColor = 'amber';
      percentile = '~40th-59th Percentile';
    } else if (composite >= 35) {
      score = 2;
      status = 'Possibly Qualified';
      badgeColor = 'rose';
      percentile = '~20th-39th Percentile';
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
        `Your estimated Composite Score is ${composite.toFixed(1)} / 100. ` +
        `MCQ contributed ${mcqWeighted.toFixed(1)} pts, SAQs ${saqWeighted.toFixed(1)} pts, ` +
        `DBQ ${dbqWeighted.toFixed(1)} pts, and LEQ ${leqWeighted.toFixed(1)} pts.`,

      subscores: [
        {
          label: 'MCQ Contribution (40%)',
          value: `${mcqWeighted.toFixed(1)} pts`,
          max: 40,
          percent: Math.round((mcqWeighted / 40) * 100)
        },
        {
          label: 'SAQ Contribution (20%)',
          value: `${saqWeighted.toFixed(1)} pts`,
          max: 20,
          percent: Math.round((saqWeighted / 20) * 100)
        },
        {
          label: 'DBQ Contribution (25%)',
          value: `${dbqWeighted.toFixed(1)} pts`,
          max: 25,
          percent: Math.round((dbqWeighted / 25) * 100)
        },
        {
          label: 'LEQ Contribution (15%)',
          value: `${leqWeighted.toFixed(1)} pts`,
          max: 15,
          percent: Math.round((leqWeighted / 15) * 100)
        }
      ]
    };
  },
  faqs: apUsHistoryFaqs,
  seoArticle: apUsHistorySeoArticle
};

export default apUsHistoryCalculator;
