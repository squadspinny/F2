import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apHumanGeographyFaqs: CalculatorFaq[] = [
   {
    "question": "How many MCQs are on APHG?",
    "answer": "The AP Human Geography exam has 60 multiple-choice questions. The MCQ section makes up 50% of your total exam score."
  },
  {
    "question": "Does AP Human Geography have FRQs?",
    "answer": "Yes. The AP Human Geography exam has 3 free-response questions. The FRQ section makes up the other 50% of your total exam score."
  },
  {
    "question": "What percentage is a 5 on APHG?",
    "answer": "There is no fixed percentage that always gives you a 5 on AP Human Geography. The score needed can change from year to year, so one percentage does not always mean you will get a 5."
  },
  {
    "question": "How to pass AP Human Geography?",
    "answer": "Study the main topics, practice MCQs and FRQs, and review your mistakes. Focus on the topics you find difficult and keep practicing before the exam."
  },
  {
    "question": "What is a good score on the AP Human Geography exam?",
    "answer": "A score of 3, 4, or 5 is considered a passing AP score by College Board. Whether a score is good for you also depends on your goals and the college you plan to attend."
  },
  {
    "question": "How to do an FRQ for AP Human Geo?",
    "answer": "Read the question carefully and answer every part. Use clear examples, explain your points, and make sure each answer directly matches what the question asks."
  }
];

export const apHumanGeographySeoArticle: SeoArticle = {
  "calculatorId": "ap-human-geography",
  "title": "AP Human Geography Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Human Geography Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Human Geography Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Human Geography Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Human Geography Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP Human Geography Score Distributions"
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
      "title": "What is the AP Human Geography Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Human Geography Score Calculator** is a free tool that helps you estimate your AP Human Geography score. Enter how many MCQs you got right and your scores from the 3 FRQs to get your estimated score.",
        "The exam has two main sections. The multiple-choice section makes up 50% of your total score, and the free-response section makes up the other 50%."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP Human Geography Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "It's quite simple to use the AP Human Geography Score Calculator. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "Enter the number of multiple-choice questions you answered correctly out of 60.",
        "Enter your points earned on the free-response questions out of 21 total points.",
        "The calculator combines your MCQ and FRQ scores to give you an estimated Composite Score out of 100 and an estimated AP score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "Before using the calculator, it helps to know how the AP Human Geography exam is divided and how each section affects your score."
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
            "60 Minutes",
            "50% of Score"
          ],
          [
            "Section II: Free Response",
            "3 FRQs (21 points)",
            "75 Minutes",
            "50% of Score"
          ]
        ]
      }
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Human Geography Score Calculator Work?"
    },
    {
    "type": "paragraph",
    "text": "The AP Human Geography Score Calculator uses your multiple-choice and free-response scores to give you an estimated Composite Score out of 100."
  },
  {
    "type": "h3",
    "title": "Multiple-Choice Questions"
  },
  {
    "type": "paragraph",
    "text": "The exam has 60 multiple-choice questions. Enter how many questions you got correct. This section makes up 50% of the exam."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated MCQ Score = (Correct Answers ÷ 60) × 50"
  },
  {
    "type": "h3",
    "title": "Free-Response Questions"
  },
  {
    "type": "paragraph",
    "text": "There are 3 free-response questions. Each one is worth up to 7 points, for a total of 21 raw points. This section makes up 50% of the exam."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated FRQ Score = (FRQ Points ÷ 21) × 50"
  },
  {
    "type": "h3",
    "title": "AP Human Geography Composite Score"
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
    "text": "Your Composite Score is then compared with the estimated score ranges used by the calculator to give you an estimated AP Human Geography score from 1 to 5."
  },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Human Geography Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "These score ranges are only estimates. Your actual College Board AP score may be different."
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
      "title": "AP Human Geography Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The **AP Human Geography score distribution** shows the percentage of students who received each AP score from 1 to 5."
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
            "26%"
          ],
          [
            "3",
            "21%"
          ],
          [
            "2",
            "24%"
          ],
          [
            "1",
            "10%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "In 2026, 66% of students scored 3 or higher on the AP Human Geography exam."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apHumanGeographyFaqs,
      "title": "Common Questions About AP Human Geography"
    }
  ]
};

export const apHumanGeographyCalculator: CalculatorConfig = {
  "id": "ap-human-geography",
  "title": "AP Human Geography Score Calculator",
  "shortName": "AP Human Geography",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "AP Human Geography Score Calculator 2027: Predict Your Score",
  "metaDescription": "Free AP Human Geography Score Calculator to estimate your AP score from 1 to 5. Enter your MCQ and FRQ scores to get your estimated result.",
  "overview": "Estimate your AP Human Geography score from 1 to 5. Just enter how many of the 60 MCQs you got right and your scores for the 3 FRQs. Both sections count for 50% of your total score.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I: Multiple-Choice Questions",
      "sublabel": "60 questions (60 minutes)",
      "min": 0,
      "max": 60,
      "defaultValue": 45,
      "unit": "/ 60"
    },
    {
      "id": "frq1",
      "label": "Section II FRQ 1: No Stimulus Question",
      "sublabel": "7 points maximum",
      "min": 0,
      "max": 7,
      "defaultValue": 5,
      "unit": "/ 7"
    },
    {
      "id": "frq2",
      "label": "Section II FRQ 2: One Stimulus Question",
      "sublabel": "7 points maximum",
      "min": 0,
      "max": 7,
      "defaultValue": 5,
      "unit": "/ 7"
    },
    {
      "id": "frq3",
      "label": "Section II FRQ 3: Two Stimuli Question",
      "sublabel": "7 points maximum",
      "min": 0,
      "max": 7,
      "defaultValue": 5,
      "unit": "/ 7"
    }
  ],
  "relatedCalculatorIds": [
    "ap-world-history",
    "ap-us-history",
    "ap-environmental-science"
  ]
,
  calculate: (inputs) => {
    const mcq = Math.min(60, Math.max(0, Number(inputs.mcq) || 0));

    const frq1 = Math.min(7, Math.max(0, Number(inputs.frq1) || 0));
    const frq2 = Math.min(7, Math.max(0, Number(inputs.frq2) || 0));
    const frq3 = Math.min(7, Math.max(0, Number(inputs.frq3) || 0));

    const totalFrq = frq1 + frq2 + frq3;

    // Section I: 50 points out of 100
    const mcqWeighted =
      Math.round(((mcq / 60) * 50) * 10) / 10;

    // Section II: 50 points out of 100
    const frqWeighted =
      Math.round(((totalFrq / 21) * 50) * 10) / 10;

    // Final Composite Score: 0–100
    const composite =
      Math.round((mcqWeighted + frqWeighted) * 10) / 10;

    let score = 1;
    let status = 'No Recommendation';
    let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'rose';
    let percentile = '~25th Percentile';

    // Estimated ranges:
    // 5 = 75–100
    // 4 = 60–74
    // 3 = 45–59
    // 2 = 30–44
    // 1 = 0–29

    if (composite >= 75) {
      score = 5;
      status = 'Extremely Well Qualified';
      badgeColor = 'emerald';
      percentile = 'Top ~16%';
    } else if (composite >= 60) {
      score = 4;
      status = 'Well Qualified';
      badgeColor = 'blue';
      percentile = '~60th-83rd Percentile';
    } else if (composite >= 45) {
      score = 3;
      status = 'Qualified (College Credit Eligible)';
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
        `Your estimated Composite Score is ${composite.toFixed(1)} / 100.`,

      subscores: [
        {
          label: 'MCQ Weighted Points (50%)',
          value: `${mcqWeighted.toFixed(1)} pts`,
          max: 50,
          percent: Math.round((mcqWeighted / 50) * 100)
        },
        {
          label: 'FRQ Weighted Points (50%)',
          value: `${frqWeighted.toFixed(1)} pts`,
          max: 50,
          percent: Math.round((frqWeighted / 50) * 100)
        },
        {
          label: 'Raw Multiple Choice Correct',
          value: `${mcq} / 60`
        },
        {
          label: 'Raw Free Response Total',
          value: `${totalFrq} / 21`
        }
      ]
    };
  },
  faqs: apHumanGeographyFaqs,
  seoArticle: apHumanGeographySeoArticle
};

export default apHumanGeographyCalculator;
