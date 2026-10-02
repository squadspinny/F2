import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apWorldHistoryFaqs: CalculatorFaq[] = [
   {
    "question": "What is an MCQ in AP World History?",
    "answer": "MCQ means multiple-choice question. The AP World History exam has 55 MCQs, and this section makes up 40% of the exam."
  },
  {
    "question": "Are there SAQs on the AP World History exam?",
    "answer": "Yes. The exam has 3 short-answer questions. This section makes up 20% of your total exam score."
  },
  {
    "question": "Is there a DBQ on the AP World History exam?",
    "answer": "Yes. The exam has a document-based question, also called a DBQ. This section makes up 25% of your total exam score."
  },
  {
    "question": "How is AP World History scored?",
    "answer": "The exam has four parts. MCQs are 40%, SAQs are 20%, the DBQ is 25%, and the LEQ is 15%. These parts are combined to give you an AP score from 1 to 5."
  },
  {
    "question": "What percentage do you need for a 5 on AP World History?",
    "answer": "There is no fixed percentage that always gives you a 5. The score needed can change each year, so one percentage does not always mean you will get a 5."
  },
];

export const apWorldHistorySeoArticle: SeoArticle = {
  "calculatorId": "ap-world-history",
  "title": "AP World History Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP World History Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP World History Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP World History Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP World History Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP World History Score Distributions"
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
      "title": "What is the AP World History Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP World History Score Calculator** is a simple tool that helps you estimate your AP score. Enter your MCQ, SAQ, DBQ, and LEQ scores, and the calculator will give you an estimated score.",
        "The calculator gives you an estimated score out of 100 and an estimated AP score from 1 to 5.",
        "The result is only an estimate, not an official College Board score. Your final AP score is determined by College Board after the exam."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP World History Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "Using the AP World History Score Calculator is easy. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "**Enter Section I Points –** Enter your correct Multiple-Choice answers and your points earned on the Short Answer Questions.",
        "**Enter Section II Points –** Enter your scores for the Document-Based Question and Long Essay Question.",
        "**View Your Estimated AP Score –** The calculator calculates your weighted composite score and provides your estimated AP World History score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "Here’s a simple look at the AP World History exam, including the number of questions, time for each section, and how each part counts toward your score."
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
      "title": "How Does the AP World History Score Calculator Work?"
    },
     {
    "type": "paragraph",
    "text": "The **AP World History exam** has four main parts:"
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
    "text": "The exam has 55 multiple-choice questions. This part makes up 40% of your total score."
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
    "text": "There are 3 SAQs, and each one is worth up to 3 points. You can get up to 9 points in total. This part makes up 20% of your score."
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
    "text": "The DBQ is worth up to 7 points and makes up 25% of your total score."
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
    "text": "The LEQ is worth up to 6 points and makes up 15% of your total score."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated LEQ Score = (LEQ Points ÷ 6) × 15"
  },
  {
    "type": "h3",
    "title": "Composite Score"
  },
  {
    "type": "paragraph",
    "text": "The calculator adds all four section scores to give you an estimated score out of 100."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Composite Score = MCQ Score + SAQ Score + DBQ Score + LEQ Score"
  },
  {
    "type": "paragraph",
    "text": "Your estimated Composite Score is then compared with the score ranges used by the calculator to give you an estimated AP score from 1 to 5."
  },
  {
    "type": "paragraph",
    "text": "**Note:** The calculator only gives an estimate. Your final AP score may be different from the result shown here."
  },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP World History Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "These score ranges are only estimates. College Board does not publish one fixed chart showing exactly how raw scores convert to AP scores each year. The ranges on this calculator are meant to give you a simple estimate of your possible AP score."
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
            "75 – 100 Composite"
          ],
          [
            "4",
            "Well Qualified",
            "60 – 74 Composite"
          ],
          [
            "3",
            "Qualified",
            "45 – 59 Composite"
          ],
          [
            "2",
            "Possibly Qualified",
            "30 – 44 Composite"
          ],
          [
            "1",
            "No Recommendation",
            "0 – 29 Composite"
          ]
        ]
      }
    },
    {
      "type": "h2",
      "id": "score-distributions",
      "title": "AP World History Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The **official AP World History score distribution** shows the percentage of students who received each AP score from 1 to 5."
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
            "36%"
          ],
          [
            "3",
            "16%"
          ],
          [
            "2",
            "26%"
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
      "text": "In 2026,  66% of students scored 3 or higher on the AP World History exam."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apWorldHistoryFaqs,
      "title": "Common Questions About AP World History"
    }
  ]
};

export const apWorldHistoryCalculator: CalculatorConfig = {
  "id": "ap-world-history",
  "title": "AP World History Score Calculator",
  "shortName": "AP World History",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "AP World History Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP World History Score Calculator 2027 to estimate your AP score from MCQ, SAQ, DBQ, and LEQ scores. Easy to use and free.",
  "overview": "Estimate your AP World History score from 1 to 5 with the 2027 exam format. Enter your MCQ, SAQ, DBQ, and LEQ scores to see your estimated AP score.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I Part A: Multiple-Choice Questions",
      "sublabel": "55 questions (55 minutes, 40% of exam)",
      "min": 0,
      "max": 55,
      "defaultValue": 42,
      "unit": "/ 55"
    },
    {
      "id": "saq_1",
      "label": "Section I Part B: Short-Answer Question 1",
      "sublabel": "3 points maximum",
      "min": 0,
      "max": 3,
      "defaultValue": 2,
      "unit": "/ 3"
    },
    {
      "id": "saq_2",
      "label": "Section I Part B: Short-Answer Question 2",
      "sublabel": "3 points maximum",
      "min": 0,
      "max": 3,
      "defaultValue": 2,
      "unit": "/ 3"
    },
    {
      "id": "saq_3",
      "label": "Section I Part B: Short-Answer Question 3",
      "sublabel": "3 points maximum",
      "min": 0,
      "max": 3,
      "defaultValue": 2,
      "unit": "/ 3"
    },
    {
      "id": "dbq",
      "label": "Section II Part A: Document-Based Question (DBQ)",
      "sublabel": "1 question (7 points maximum, 25% of exam)",
      "min": 0,
      "max": 7,
      "defaultValue": 5,
      "unit": "/ 7"
    },
    {
      "id": "leq",
      "label": "Section II Part B: Long Essay Question (LEQ)",
      "sublabel": "1 question (6 points maximum, 15% of exam)",
      "min": 0,
      "max": 6,
      "defaultValue": 4,
      "unit": "/ 6"
    }
  ],
  "relatedCalculatorIds": [
    "ap-us-history",
    "ap-human-geography",
    "ap-english-language"
  ]
,
  calculate: (inputs) => {
    const mcq = Math.min(55, Math.max(0, Number(inputs.mcq) || 0));

    const saq1 = Math.min(3, Math.max(0, Number(inputs.saq_1) || 0));
    const saq2 = Math.min(3, Math.max(0, Number(inputs.saq_2) || 0));
    const saq3 = Math.min(3, Math.max(0, Number(inputs.saq_3) || 0));

    const totalSaq = saq1 + saq2 + saq3;

    const dbq = Math.min(7, Math.max(0, Number(inputs.dbq) || 0));
    const leq = Math.min(6, Math.max(0, Number(inputs.leq) || 0));

    // Official weighting:
    // MCQ = 40%, SAQ = 20%, DBQ = 25%, LEQ = 15%

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
    let percentile = '~20th-39th Percentile';

    if (composite >= 75) {
      score = 5;
      status = 'Extremely Well Qualified';
      badgeColor = 'emerald';
      percentile = 'Top ~15%';
    } else if (composite >= 60) {
      score = 4;
      status = 'Well Qualified';
      badgeColor = 'blue';
      percentile = '~60th-84th Percentile';
    } else if (composite >= 45) {
      score = 3;
      status = 'Qualified';
      badgeColor = 'amber';
      percentile = '~40th-59th Percentile';
    } else if (composite >= 30) {
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
  faqs: apWorldHistoryFaqs,
  seoArticle: apWorldHistorySeoArticle
};

export default apWorldHistoryCalculator;
