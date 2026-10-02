import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apBiologyFaqs: CalculatorFaq[] = [
  {
    "question": "Is a 4 a Good AP Bio Score?",
    "answer": "Yes. A score of 4 is considered “Very Well Qualified” on the AP scale, and many colleges accept a 4 for credit or placement. However, requirements vary by college."
  },
  {
    "question": "Is AP Biology Easy or Hard?",
    "answer": "AP Biology covers a lot of content across eight units and requires more than memorization. You’ll also need to understand data, apply biological concepts, and interpret experiments. With consistent preparation, the exam becomes more manageable."
  },
  {
    "question": "How Many MCQs Are in AP Biology?",
    "answer": "Section I of the AP Biology Exam has 60 multiple-choice questions, with 90 minutes to complete them. This section accounts for 50% of your final AP score, and the AP Bio Score Calculator uses your correct answers to calculate your MCQ contribution."
  },
  {
    "question": "How Many FRQs are in AP Biology?",
    "answer": "The AP Biology Exam has 6 free-response questions: 2 long questions worth 10 points each and 4 short questions worth 4 points each. Together, they make up 36 raw points and account for 50% of your final AP score."
  }
];

export const apBiologySeoArticle: SeoArticle = {
  "calculatorId": "ap-biology",
  "title": "AP Bio Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Bio Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Bio Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Bio Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Biology Score Ranges"
    },
    {
      "id": "score-distribution",
      "label": "AP Biology Score Distribution"
    },
    {
      "id": "grading-scale",
      "label": "AP Bio Grading Scale 1 to 5"
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
      "title": "What is AP Bio Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Bio Score Calculator** is a free online tool that combines your results from the multiple-choice (MCQ) and free-response (FRQ) sections to estimate your AP score from 1 to 5.",
        "Enter how many MCQs you got right and how many points you earned in the FRQ section. The AP Bio Score Calculator then combines both sections to create a composite score and matches it with the score ranges used by the calculator. Whether you're preparing for school or studying for **AP Bio** on your own, it gives you a quick idea of where your score stands."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use AP Bio Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "Using the AP Bio Score Calculator is simple. Just follow these steps:"
    },
    {
      "type": "orderedList",
      "items": [
        "Enter your correct MCQs – The AP Biology exam has 60 multiple-choice questions. Enter the number you answered correctly.",
        "Enter your FRQ points – The Free-Response section has 6 questions (2 long and 4 short). Enter your total FRQ points.",
        "View your result – The calculator combines your MCQ and FRQ scores based on their weightings and shows your estimated AP score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "Knowing how the **AP Biology Exam** is divided, how much time you get for each section, and how each section contributes to your score can help you understand how your overall score is calculated."
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
            "2 Long (9 pts) + 4 Short (4 pts)",
            "90 Minutes",
            "50% of Total"
          ]
        ]
      }
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Bio Score Calculator Work?"
    },
    {
      "type": "paragraph",
      "text": "The AP Biology Exam has two equally weighted sections:"
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
      "text": "Each section contributes 50% to your final AP score. The AP Bio Score Calculator converts your performance in both sections into weighted scores, adds them together to create a composite score, and then matches that score with an estimated AP score range from 1 to 5."
    },
    {
      "type": "h3",
      "title": "Section I: Multiple-Choice Questions"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The MCQ section has 60 questions, and you have 90 minutes to complete it. It accounts for 50% of your final AP score, and a four-function, scientific, or graphing calculator is permitted.",
        "The calculator converts your correct answers into a score out of 50:"
      ]
    },
    {
      "type": "formula",
      "title": "",
      "formula": "MCQ Score = (Correct Answers ÷ 60) × 50"
    },
    {
      "type": "h3",
      "title": "Section II: Free-Response Questions"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The FRQ section has 6 questions and 90 minutes to complete. It includes 2 long free-response questions worth 10 points each and 4 short questions worth 4 points each, for a total of 36 raw points. This section also accounts for 50% of your final AP score."
      ]
    },
    {
      "type": "paragraph",
      "text": "The **AP Bio Score Calculator** converts your FRQ points into a maximum of 50 points using the formula below:"
    },
    {
      "type": "formula",
      "title": "",
      "formula": "FRQ Score = (FRQ Raw Points ÷ 34) × 50"
    },
    {
      "type": "h3",
      "title": "AP Biology Composite Score"
    },
    {
      "type": "paragraph",
      "text": "The calculator adds the scores from both sections to give you a composite score out of 100."
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Composite Score = MCQ Score + FRQ Score"
    },
    {
      "type": "paragraph",
      "text": "Your composite score is then matched with the calculator’s score ranges to give you an estimated AP score from 1 to 5."
    },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Bio Score Ranges"
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
            "74 – 100"
          ],
          [
            "4",
            "59 – 73"
          ],
          [
            "3",
            "45 – 58"
          ],
          [
            "2",
            "32 – 44"
          ],
          [
            "1",
            "0 – 31"
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
      "title": "AP Bio Score Distribution"
    },
    {
      "type": "paragraph",
      "text": "The AP Biology score distribution for 2026 was:"
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
            "25%"
          ],
          [
            "3",
            "31%"
          ],
          [
            "2",
            "21%"
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
      "text": "In 2026, 71% of students scored 3 or higher."
    },
    {
      "type": "h2",
      "id": "grading-scale",
      "title": "AP Bio Grading Scale 1 to 5"
    },
    {
      "type": "paragraph",
      "text": "The AP Bio grading scale ranges from 1 to 5. Here’s what each score means:"
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
      "text": "Many colleges and universities grant credit and placement based on AP Biology scores; however, credit policies vary from college to college."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apBiologyFaqs
    }
  ]
};

export const apBiologyCalculator: CalculatorConfig = {
  "id": "ap-biology",
  "title": "AP Bio Score Calculator",
  "shortName": "AP Bio",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "AP Bio Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP Bio Score Calculator: enter your MCQ & FRQ points to estimate your 1–5 AP Score. No sign-up. Try it now!",
  "overview": "Calculate your AP Biology score using the 2027 exam structure. Enter your MCQ and FRQ scores to get an AP score from 1 to 5.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I: Multiple-Choice Questions (MCQ)",
      "sublabel": "",
      "min": 0,
      "max": 60,
      "defaultValue": 46,
      "unit": "/ 60"
    },
    {
      "id": "frq_1",
      "label": "Long FRQ 1",
      "sublabel": "0–9 points",
      "min": 0,
      "max": 9,
      "defaultValue": 7,
      "group": "Section II: Long Free-Response Questions",
      "groupTotalMax": 18,
      "groupTotalLabel": "Long FRQ Total"
    },
    {
      "id": "frq_2",
      "label": "Long FRQ 2",
      "sublabel": "0–9 points",
      "min": 0,
      "max": 9,
      "defaultValue": 7,
      "group": "Section II: Long Free-Response Questions",
      "groupTotalMax": 18,
      "groupTotalLabel": "Long FRQ Total"
    },
    {
      "id": "frq_3",
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
      "id": "frq_4",
      "label": "Short FRQ 4",
      "sublabel": "0–4 points",
      "min": 0,
      "max": 4,
      "defaultValue": 3,
      "group": "Section II: Short Free-Response Questions",
      "groupTotalMax": 16,
      "groupTotalLabel": "Short FRQ Total"
    },
    {
      "id": "frq_5",
      "label": "Short FRQ 5",
      "sublabel": "0–4 points",
      "min": 0,
      "max": 4,
      "defaultValue": 3,
      "group": "Section II: Short Free-Response Questions",
      "groupTotalMax": 16,
      "groupTotalLabel": "Short FRQ Total"
    },
    {
      "id": "frq_6",
      "label": "Short FRQ 6",
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
    "ap-chemistry",
    "ap-environmental-science",
    "ap-psychology"
  ],
  "isPopular": true
,
  calculate: (inputs) => {
      const mcq = Math.min(60, Math.max(0, inputs.mcq || 0));
      const frqLong = inputs.frq_1 !== undefined
        ? Math.min(18, Math.max(0, (inputs.frq_1 || 0) + (inputs.frq_2 || 0)))
        : Math.min(18, Math.max(0, inputs.frq_long || 0));
      const frqShort = inputs.frq_3 !== undefined
        ? Math.min(16, Math.max(0, (inputs.frq_3 || 0) + (inputs.frq_4 || 0) + (inputs.frq_5 || 0) + (inputs.frq_6 || 0)))
        : Math.min(16, Math.max(0, inputs.frq_short || 0));
      const totalFrqRaw = frqLong + frqShort;

      const mcqWeighted = (mcq / 60) * 50;
      const frqWeighted = (totalFrqRaw / 34) * 50;
      const composite = Math.round((mcqWeighted + frqWeighted) * 10) / 10;

      let score = 1;
      let status = 'No Recommendation';
      let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'rose';
      let percentile = '~25th Percentile';

      if (composite >= 74) {
        score = 5;
        status = 'Extremely Well Qualified';
        badgeColor = 'emerald';
        percentile = 'Top ~14% (86th+ Percentile)';
      } else if (composite >= 59) {
        score = 4;
        status = 'Well Qualified';
        badgeColor = 'blue';
        percentile = '~65th-85th Percentile';
      } else if (composite >= 45) {
        score = 3;
        status = 'Qualified (College Credit Eligible)';
        badgeColor = 'amber';
        percentile = '~40th-64th Percentile';
      } else if (composite >= 32) {
        score = 2;
        status = 'Possibly Qualified';
        badgeColor = 'rose';
        percentile = '~18th-39th Percentile';
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
        summaryNote: `Your composite score is ${composite.toFixed(1)} / 100. Section 1 contributed ${mcqWeighted.toFixed(1)} pts and Section 2 contributed ${frqWeighted.toFixed(1)} pts.`,
        subscores: [
          { label: 'MCQ Weighted Contribution', value: `${mcqWeighted.toFixed(1)} pts`, max: 50, percent: Math.round((mcqWeighted / 50) * 100) },
          { label: 'FRQ Weighted Contribution', value: `${frqWeighted.toFixed(1)} pts`, max: 50, percent: Math.round((frqWeighted / 50) * 100) },
          { label: 'Raw Section I Correct', value: `${mcq} / 60` },
          { label: 'Raw Section II Points', value: `${totalFrqRaw} / 34` }
        ]
      };
    },
  faqs: apBiologyFaqs,
  seoArticle: apBiologySeoArticle
};

export default apBiologyCalculator;
