import { CalculatorConfig, CalculatorFaq, CalculatorResult, SeoArticle } from '../../types';

export const apUsGovernmentFaqs: CalculatorFaq[] = [
  {
    "question": "How many MCQs are on AP US Gov?",
    "answer": "The AP U.S. Government exam has 55 multiple-choice questions. This section makes up 50% of the total exam score."
  },
  {
    "question": "What are the 4 FRQ for AP Gov?",
    "answer": "The 4 FRQs are Concept Application, Quantitative Analysis, SCOTUS Comparison, and an Argument Essay."
  },
  {
    "question": "How many points is each AP Gov.FRQ worth?",
    "answer": "The 4 FRQs are worth 3, 4, 4, and 6 points. You can earn 17 raw points in total."
  },
  {
    "question": "How to pass AP Gov exam?",
    "answer": "To pass the AP Gov exam, learn the main topics, review key court cases, and practice MCQs and FRQs. Go over your mistakes and keep practicing the areas you find difficult."
  },
  {
    "question": "What percent is a 5 on an AP Gov exam?",
    "answer": "There is no fixed percentage that always gives you a 5. The score needed can change from year to year, so one percentage does not always mean you will get a 5."
  }
];

export const apUsGovernmentSeoArticle: SeoArticle = {
  "calculatorId": "ap-us-government",
  "title": "AP Government Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Government Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Government Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Government Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Government Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP Government Score Distributions"
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
      "title": "What is the AP Government Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Government Score Calculator** helps you estimate your **AP U.S. Government and Politics score** from 1 to 5. Enter how many MCQs you got right and the points you earned on the 4 FRQs. The calculator then gives you an estimated Composite Score out of 100.",
        "For the 2027 exam, the multiple-choice and free-response sections each make up 50% of your total score. Your result is only an estimate, not an official College Board score."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP Government Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "Using the AP Government Score Calculator is straightforward. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "**Enter Section I (Multiple-Choice) Points –** Enter the number of multiple-choice questions you answered correctly.",
        "**Enter Section II (Free-Response) Points –** Enter your points earned on the free-response questions.",
        "**View Your Estimated AP Score –** The calculator combines your scores to give you an estimated Composite Score out of 100 and an estimated AP score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "Here’s a quick look at the AP Government exam, including the number of questions, time, and how much each section counts toward your score."
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
            "55 Questions",
            "80 Minutes",
            "50%"
          ],
          [
            "Section II: Free Response",
            "4 Questions",
            "100 Minutes",
            "50%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "**Note**: The exam is fully digital in Bluebook. The 4 FRQs are Concept Application, Quantitative Analysis, SCOTUS Comparison, and Argument Essay."
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Government Score Calculator Work?"
    },
      {
    "type": "paragraph",
    "text": "The AP U.S. Government and Politics exam has two main parts:"
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
    "text": "The AP Government exam has 55 multiple-choice questions. Enter the number of questions you got correct. This section makes up 50% of the exam."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated MCQ Score = (Correct Answers ÷ 55) × 50"
  },
  {
    "type": "h3",
    "title": "Free-Response Questions"
  },
  {
    "type": "paragraph",
    "text": "There are 4 free-response questions. They have 3, 4, 4, and 6 points available, for a total of 17 raw points. This section makes up 50% of the exam."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated FRQ Score = (FRQ Points ÷ 17) × 50"
  },
  {
    "type": "h3",
    "title": "AP Government Composite Score"
  },
  {
    "type": "paragraph",
    "text": "The calculator adds your weighted scores from both parts to get your estimated Composite Score out of 100."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Composite Score = MCQ Score + FRQ Score"
  },
  {
    "type": "paragraph",
    "text": "Your estimated Composite Score is then compared with the score ranges used by the calculator to give you an estimated AP Government score from 1 to 5."
  },
  {
    "type": "paragraph",
    "text": "The **AP Government Score Calculator** only provides an estimate. Your actual College Board AP score may be different."
  },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Government Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "These score ranges are estimates to help you understand your possible AP score. Your actual College Board AP score may be different."
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
            "71 - 100 points"
          ],
          [
            "4",
            "Well Qualified",
            "57 - 70 points"
          ],
          [
            "3",
            "Qualified",
            "45 - 56 points"
          ],
          [
            "2",
            "Possibly Qualified",
            "30 - 44 points"
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
      "title": "AP Government Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The **official AP Government score distribution** shows the percentage of students who received each AP score from 1 to 5."
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
            "23%"
          ],
          [
            "4",
            "28%"
          ],
          [
            "3",
            "25%"
          ],
          [
            "2",
            "16%"
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
      "text": "In 2026, 76% of students scored 3 or higher on the AP US Government exam."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apUsGovernmentFaqs,
      "title": "Common Questions About AP Government"
    }
  ]
};

export const apUsGovernmentCalculator: CalculatorConfig = {
  "id": "ap-us-government",
  "title": "AP Government Score Calculator",
  "shortName": "AP Government",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 Exam Structure",
  "seoTitle": "AP Government Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP Government Score Calculator to estimate your AP U.S. Government and Politics score from 1 to 5 using your MCQ and FRQ scores.",
  "overview": "Estimate your AP Government score from 1 to 5 using the 2027 exam format. Enter your scores from 55 MCQs and 4 FRQs to see your estimated Composite Score out of 100.",
  "cardDescription": "Calculate your AP US Government score from 55 MCQs and 4 analytical FRQs.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I: Multiple Choice Correct",
      "sublabel": "Raw correct answers (0 - 55)",
      "min": 0,
      "max": 55,
      "defaultValue": 42
    },
    {
      "id": "frq1",
      "label": "FRQ 1: Concept Application",
      "sublabel": "Points earned out of 3",
      "min": 0,
      "max": 3,
      "defaultValue": 2
    },
    {
      "id": "frq2",
      "label": "FRQ 2: Quantitative Analysis",
      "sublabel": "Points earned out of 4",
      "min": 0,
      "max": 4,
      "defaultValue": 2
    },
    {
      "id": "frq3",
      "label": "FRQ 3: SCOTUS Comparison",
      "sublabel": "Points earned out of 4",
      "min": 0,
      "max": 4,
      "defaultValue": 3
    },
    {
      "id": "frq4",
      "label": "FRQ 4: Argument Essay",
      "sublabel": "Points earned out of 6",
      "min": 0,
      "max": 6,
      "defaultValue": 5
    }
  ],
  "relatedCalculatorIds": [
    "ap-us-history",
    "ap-macroeconomics",
    "ap-psychology",
    "ap-english-language"
  ]
,
  calculate: (inputs: Record<string, number>): CalculatorResult => {
    const mcq = Math.max(0, Math.min(55, inputs.mcq ?? 42));

    const frq1 = Math.max(0, Math.min(3, inputs.frq1 ?? 2));
    const frq2 = Math.max(0, Math.min(4, inputs.frq2 ?? 2));
    const frq3 = Math.max(0, Math.min(4, inputs.frq3 ?? 3));
    const frq4 = Math.max(0, Math.min(6, inputs.frq4 ?? 5));

    const frqTotal = frq1 + frq2 + frq3 + frq4; // max 17

    // 2027 exam weighting: 50% MCQ + 50% FRQ
    const mcqWeighted =
      (mcq / 55) * 50;

    const frqWeighted =
      (frqTotal / 17) * 50;

    const composite =
      Math.round((mcqWeighted + frqWeighted) * 10) / 10;

    let score = 1;
    let status = 'No Recommendation';
    let badgeColor: CalculatorResult['qualificationBadgeColor'] = 'rose';
    let percentile = 'Estimated 1 range';

    if (composite >= 71) {
      score = 5;
      status = 'Extremely Well Qualified';
      badgeColor = 'emerald';
      percentile = 'Estimated 5 range';
    } else if (composite >= 57) {
      score = 4;
      status = 'Well Qualified';
      badgeColor = 'blue';
      percentile = 'Estimated 4 range';
    } else if (composite >= 45) {
      score = 3;
      status = 'Qualified';
      badgeColor = 'amber';
      percentile = 'Estimated 3 range';
    } else if (composite >= 30) {
      score = 2;
      status = 'Possibly Qualified';
      badgeColor = 'rose';
      percentile = 'Estimated 2 range';
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
          label: 'Section I: Multiple Choice (50%)',
          value: `${Math.round(mcqWeighted * 10) / 10} / 50 pts`
        },
        {
          label: 'Section II: Free Response (50%)',
          value: `${Math.round(frqWeighted * 10) / 10} / 50 pts`
        },
        {
          label: 'Weighted Composite Total',
          value: `${composite} / 100 pts`
        }
      ],

      summaryNote:
        `Your estimated Composite Score is ${composite}/100, which maps to an estimated AP Score of ${score}.`
    };
  },
  faqs: apUsGovernmentFaqs,
  seoArticle: apUsGovernmentSeoArticle
};

export default apUsGovernmentCalculator;
