import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apStatisticsFaqs: CalculatorFaq[] = [
  {
    "question": "How is the AP Stats exam graded?",
    "answer": "The AP Statistics exam has two sections. Multiple choice is 50% of the exam, and free response is the other 50%. Your final result is an AP score from 1 to 5."
  },
  {
    "question": "How many MCQs are on the AP Statistics exam?",
    "answer": "The AP Statistics exam has 42 multiple-choice questions. This section makes up 50% of your total exam score."
  },
  {
    "question": "How many FRQs are on the AP Statistics exam?",
    "answer": "The AP Statistics exam has 4 free-response questions. Each question is worth up to 10 points, and this section makes up 50% of the exam."
  },
    {
    "question": "Is 70% a 5 on AP Stats?",
    "answer": "Not always. There is no fixed percentage for a 5 on AP Statistics. The score needed can change each year, so 70% may not always be enough."
  },
  {
    "question": "What calculator is needed for AP Statistics?",
    "answer": "A graphing calculator with statistics features is allowed for AP Statistics. Students can also use the built-in Desmos graphing calculator in Bluebook."
  },
  {
    "question": "Is a calculator allowed on the AP Statistics exam?",
    "answer": "Yes. College Board permits calculators for AP Statistics. On the fully digital exam, students can also use the built-in Desmos graphing calculator in Bluebook."
  },
  {
    "question": "Is AP Statistics hard?",
    "answer": "AP Statistics can be challenging because you need to understand statistics and apply it to different questions. Regular practice can make it easier."
  }
];

export const apStatisticsSeoArticle: SeoArticle = {
  "calculatorId": "ap-statistics",
  "title": "AP Statistics Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Stats Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Stats Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Stats Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Stats Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP Stats Score Distributions"
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
      "title": "What is the AP Stats Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Stats Score Calculator** is a free online tool that estimates your AP Statistics score from your performance on the multiple-choice and free-response sections.",
        "The May 2027 AP Statistics exam has a new format. It will be fully digital in Bluebook and will have 42 multiple-choice questions and 4 free-response questions. Each section is worth 50% of the total exam score.",
        "The AP Stats Calculator only gives an estimated score. Your actual College Board score may be different."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP Stats Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "It's quite simple to use the AP Statistics Score Calculator. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "Enter the number of multiple-choice questions you answered correctly.",
        "Enter your points earned on the free-response questions.",
        "See your estimated score out of 100 and your AP score from 1 to 5 based on the scores you entered."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "Here’s a quick look at the AP Statistics exam sections, number of questions, time, and how much each section is worth."
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
            "90 Minutes",
            "50% of Total"
          ],
          [
            "Section II: Free Response",
            "4 Questions (40 pts)",
            "90 Minutes",
            "50% of Total"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "**Note**: Section I has 42 multiple-choice questions, and Section II has 4 free-response questions. The 2027 AP Statistics Exam is fully digital in Bluebook."
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Stats Score Calculator Work?"
    },
  {
    "type": "paragraph",
    "text": "The AP Statistics exam has two main sections:"
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
    "text": "The AP Statistics multiple-choice section has 42 questions. Enter the number of questions you got correct, from 0 to 42."
  },
  {
    "type": "paragraph",
    "text": "Your correct answers are converted to a maximum of 50 points because the multiple-choice section makes up 50% of the exam."
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
    "text": "The Free-Response section has 4 questions, with each question worth up to 10 points. This gives you a maximum of 40 raw points."
  },
  {
    "type": "paragraph",
    "text": "Your total FRQ points are converted to a maximum of 50 points because the free-response section makes up 50% of the exam."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated FRQ Score = (FRQ Raw Points ÷ 40) × 50"
  },
  {
    "type": "h3",
    "title": "AP Statistics Composite Score"
  },
  {
    "type": "paragraph",
    "text": "The calculator adds your MCQ and FRQ scores to get your estimated Composite Score out of 100."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Composite Score = MCQ Score + FRQ Score"
  },
  {
    "type": "paragraph",
    "text": "Your estimated Composite Score is then compared with the score ranges used by the calculator to give you an estimated AP Statistics score from 1 to 5."
  },
  {
    "type": "paragraph",
    "text": "The **AP Stats Calculator** only provides an estimated score. Your actual College Board score may be different."
  },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Stats Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "The score ranges below are used to convert your composite score into an estimated AP score from 1 to 5. These ranges are only estimates, so your actual College Board score may be different."
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
            "68.0 – 100.0"
          ],
          [
            "4",
            "Well Qualified",
            "53.0 – 67.9 "
          ],
          [
            "3",
            "Qualified",
            "40.0 – 52.9"
          ],
          [
            "2",
            "Possibly Qualified",
            "28.0 – 39.9"
          ],
          [
            "1",
            "No Recommendation",
            "0.0 – 27.9"
          ]
        ]
      }
    },
    {
      "type": "h2",
      "id": "score-distributions",
      "title": "AP Stats Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The official **2026 AP Statistics score distribution** shows the percentage of students who received each AP score from 1 to 5."
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
            "17%"
          ],
          [
            "4",
            "23%"
          ],
          [
            "3",
            "22%"
          ],
          [
            "2",
            "17%"
          ],
          [
            "1",
            "21%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "In 2026, 62% of students scored 3 or higher on the AP Statistics exam."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apStatisticsFaqs,
      "title": "Common Questions About AP Statistics"
    }
  ]
};

export const apStatisticsCalculator: CalculatorConfig = {
  "id": "ap-statistics",
  "title": "AP Stats Score Calculator",
  "shortName": "AP Statistics",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "AP Stats Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP Stats Score Calculator to predict your Statistics score from 1–5. Enter your MCQ and FRQ points to estimate your score.",
  "overview": "Estimate your AP Statistics score from 1–5 with the AP Stats Calculator. Enter your MCQ and FRQ scores from 42 multiple-choice and 4 free-response questions. Each section is worth 50%.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I: Multiple-Choice Questions",
      "sublabel": "42 questions (90 minutes)",
      "min": 0,
      "max": 42,
      "defaultValue": 29,
      "unit": "/ 42"
    },
    {
      "id": "frq_1",
      "label": "Section II: Free Response 1",
      "sublabel": "10 points maximum",
      "min": 0,
      "max": 10,
      "defaultValue": 7,
      "unit": "/ 10"
    },
    {
      "id": "frq_2",
      "label": "Section II: Free Response 2",
      "sublabel": "10 points maximum",
      "min": 0,
      "max": 10,
      "defaultValue": 7,
      "unit": "/ 10"
    },
    {
      "id": "frq_3",
      "label": "Section II: Free Response 3",
      "sublabel": "10 points maximum",
      "min": 0,
      "max": 10,
      "defaultValue": 7,
      "unit": "/ 10"
    },
    {
      "id": "frq_4",
      "label": "Section II: Free Response 4",
      "sublabel": "10 points maximum",
      "min": 0,
      "max": 10,
      "defaultValue": 7,
      "unit": "/ 10"
    }
  ],
  "relatedCalculatorIds": [
    "ap-calculus-ab",
    "ap-psychology",
    "ap-biology",
    "ap-computer-science-a"
  ]
,
  calculate: (inputs) => {
    // Section I: 42 MCQs
    const mcq = Math.min(42, Math.max(0, Number(inputs.mcq) || 0));

    // Section II: 4 FRQs, 10 points each = 40 points
    const frq1 = Math.min(10, Math.max(0, Number(inputs.frq_1) || 0));
    const frq2 = Math.min(10, Math.max(0, Number(inputs.frq_2) || 0));
    const frq3 = Math.min(10, Math.max(0, Number(inputs.frq_3) || 0));
    const frq4 = Math.min(10, Math.max(0, Number(inputs.frq_4) || 0));

    const totalFrq = frq1 + frq2 + frq3 + frq4;

    // Both sections are worth 50% of the exam
    const mcqWeighted =
      Math.round(((mcq / 42) * 50) * 10) / 10;

    const frqWeighted =
      Math.round(((totalFrq / 40) * 50) * 10) / 10;

    // Composite score out of 100
    const composite =
      Math.round((mcqWeighted + frqWeighted) * 10) / 10;

    // Estimated AP score ranges
    let score = 1;
    let status = 'No Recommendation';
    let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'rose';

    if (composite >= 68) {
      score = 5;
      status = 'Extremely Well Qualified';
      badgeColor = 'emerald';
    } else if (composite >= 53) {
      score = 4;
      status = 'Well Qualified';
      badgeColor = 'blue';
    } else if (composite >= 40) {
      score = 3;
      status = 'Qualified';
      badgeColor = 'amber';
    } else if (composite >= 28) {
      score = 2;
      status = 'Possibly Qualified';
      badgeColor = 'rose';
    }

    return {
      mainScore: score,
      mainScoreLabel: 'Estimated AP Score',
      maxScore: 5,

      qualificationStatus: status,
      qualificationBadgeColor: badgeColor,

      compositePoints: composite,
      maxCompositePoints: 100,

      isEstimated: true,

      summaryNote:
        `Your estimated AP Statistics score is ${score} (Composite: ${composite.toFixed(1)}/100).`,

      subscores: [
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
          value: `${mcq + totalFrq} / 82`
        }
      ]
    };
  },
  faqs: apStatisticsFaqs,
  seoArticle: apStatisticsSeoArticle
};

export default apStatisticsCalculator;
