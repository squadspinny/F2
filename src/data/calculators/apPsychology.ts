import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apPsychologyFaqs: CalculatorFaq[] = [
  {
    "question": "Does AP Psych have MCQs?",
    "answer": "Yes. The AP Psych exam has 75 multiple-choice questions. This section is 66.7% of the total exam score."
  },
  {
    "question": "Does AP Psych have an FRQ?",
    "answer": "Yes. The AP Psych exam has 2 free-response questions: the Article Analysis Question (AAQ) and the Evidence-Based Question (EBQ)."
  },
  {
    "question": "How is AP Psych scored?",
    "answer": "AP Psych has two parts. Multiple-choice is 66.7% of the exam, and the 2 free-response questions are 33.3%. Your scores are combined to give an AP score from 1 to 5."
  },
  {
    "question": "Is a 3 in AP Psych bad?",
    "answer": "No. College Board considers a 3 a “Qualified” AP score. Whether you can get college credit depends on the college and its AP credit policy."
  },
  {
    "question": "What score do you need for a 5 on AP Psych?",
    "answer": "There is no fixed percentage that always gives you a 5. The score needed can change, so one percentage does not always mean you will get a 5."
  }
];

export const apPsychologySeoArticle: SeoArticle = {
  "calculatorId": "ap-psychology",
  "title": "AP Psychology Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Psych Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Psych Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Psych Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Psych Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP Psych Score Distributions"
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
      "title": "What is the AP Psych Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Psych Score Calculator** is an online tool that helps you estimate your AP Psychology score from 1 to 5. Enter your MCQ, AAQ, and EBQ scores to get your estimated score and percentile.",
        "The calculator follows the 2027 exam format with 75 MCQs worth 66.7% and 2 free-response questions worth 33.3%.",
        "Your result is only an estimate, so your actual College Board score may be different."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP Psych Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "Using the **AP Psychology Score Calculator** is straightforward. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "Enter the number of multiple-choice questions you answered correctly out of 75.",
        "Enter your points earned on the free-response questions out of 14 total points.",
        " The calculator combines your MCQ and FRQ scores based on their weightings and shows your estimated AP score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "Here’s a simple look at the AP Psychology exam, including the number of questions, time, and how much each section counts."
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
            "75 Questions",
            "90 Minutes",
            "66.7% of Score"
          ],
          [
            "Section II: Free Response",
            "2 FRQs (14 raw pts)",
            "70 Minutes",
            "33.3% of Score"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "**Note:** The 2027 AP Psychology exam has 75 MCQs with 90 minutes to complete them. This section is 66.7% of the exam. The exam also has 2 free-response questions, the AAQ and EBQ, with 70 minutes for this section. It makes up the remaining 33.3%."
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Psych Score Calculator Work?"
    },
    {
    "type": "paragraph",
    "text": "The **AP Psychology exam** has two main sections:"
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
    "text": "The AP Psychology exam has 75 multiple-choice questions. This section makes up 66.7% of the exam."
  },
  {
    "type": "paragraph",
    "text": "Your correct answers are converted to a maximum of 66.7 points because this section makes up 66.7% of the exam."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated MCQ Score = (Correct Answers ÷ 75) × 66.7"
  },
  {
    "type": "h3",
    "title": "Section II: Free-Response Questions"
  },
  {
    "type": "paragraph",
    "text": "The free-response section has 2 questions: the Article Analysis Question (AAQ) and the Evidence-Based Question (EBQ). Together, they are worth 14 raw points and make up 33.3% of the exam."
  },
  {
    "type": "paragraph",
    "text": "Your total FRQ points are converted to a maximum of 33.3 points because this section makes up 33.3% of the exam."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated FRQ Score = (FRQ Raw Points ÷ 14) × 33.3"
  },
  {
    "type": "h3",
    "title": "AP Psychology Composite Score"
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
    "text": "Your estimated Composite Score is then compared with the score ranges used by the calculator to give you an estimated AP Psychology score from 1 to 5."
  },
  {
    "type": "paragraph",
    "text": "The **AP Psych Calculator** only provides an estimated score. Your actual College Board score may be different."
  },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Psych Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "These score ranges are only estimates used by the calculator. Your actual College Board score may be different."
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
      "title": "AP Psych Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The **2026 AP Psychology score distribution** shows how many students received each AP score from 1 to 5."
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
            "35%"
          ],
          [
            "3",
            "24%"
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
      "text": "In 2026, 74% of students scored 3 or higher on the AP Psychology exam."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apPsychologyFaqs,
      "title": "Common Questions About AP Psychology"
    }
  ]
};

export const apPsychologyCalculator: CalculatorConfig = {
  "id": "ap-psychology",
  "title": "AP Psych Score Calculator",
  "shortName": "AP Psychology",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "AP Psych Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP Psych Score Calculator to estimate your AP Psychology score from 1–5. Enter your MCQ and FRQ scores to get your estimated AP score.",
  "overview": "Estimate your AP Psychology score from 1–5 with the AP Psych Calculator. Enter your MCQ, AAQ, and EBQ scores to get your estimated score.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I: Multiple-Choice Questions",
      "sublabel": "75 questions (90 minutes, 66.7% of exam score)",
      "min": 0,
      "max": 75,
      "defaultValue": 58,
      "unit": "/ 75"
    },
    {
      "id": "frq1",
      "label": "Section II FRQ 1: Article Analysis Question (AAQ)",
      "sublabel": "7 points maximum",
      "min": 0,
      "max": 7,
      "defaultValue": 5,
      "unit": "/ 7"
    },
    {
      "id": "frq2",
      "label": "Section II FRQ 2: Evidence-Based Question (EBQ)",
      "sublabel": "7 points maximum",
      "min": 0,
      "max": 7,
      "defaultValue": 5,
      "unit": "/ 7"
    }
  ],
  "relatedCalculatorIds": [
    "ap-biology",
    "ap-statistics",
    "ap-us-history",
    "ap-human-geography"
  ],
  "isPopular": true
,
  calculate: (inputs) => {
    const mcq = Math.min(75, Math.max(0, Number(inputs.mcq) || 0));
    const frq1 = Math.min(7, Math.max(0, Number(inputs.frq1) || 0));
    const frq2 = Math.min(7, Math.max(0, Number(inputs.frq2) || 0));

    const totalFrq = frq1 + frq2;

    // Section I: 75 MCQs = 66.67 points
    const mcqWeighted =
      (mcq / 75) * 66.67;

    // Section II: 14 FRQ points = 33.33 points
    const frqWeighted =
      (totalFrq / 14) * 33.33;

    // Composite Score = 0–100
    const composite =
      Math.round((mcqWeighted + frqWeighted) * 10) / 10;

    let score = 1;
    let status = 'No Recommendation';
    let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'rose';
    let percentile = '~25th Percentile';

    // Estimated AP score ranges:
    // 5 = 75–100
    // 4 = 60–74
    // 3 = 45–59
    // 2 = 30–44
    // 1 = 0–29

    if (composite >= 75) {
      score = 5;
      status = 'Extremely Well Qualified';
      badgeColor = 'emerald';
      percentile = 'Top ~18% (82nd+ Percentile)';
    } else if (composite >= 60) {
      score = 4;
      status = 'Well Qualified';
      badgeColor = 'blue';
      percentile = '~60th-81st Percentile';
    } else if (composite >= 45) {
      score = 3;
      status = 'Qualified (College Credit Eligible)';
      badgeColor = 'amber';
      percentile = '~38th-59th Percentile';
    } else if (composite >= 30) {
      score = 2;
      status = 'Possibly Qualified';
      badgeColor = 'rose';
      percentile = '~18th-37th Percentile';
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

      summaryNote: `Your composite score is ${composite.toFixed(1)} / 100.`,

      subscores: [
        {
          label: 'MCQ Weighted Points (66.7%)',
          value: `${mcqWeighted.toFixed(1)} pts`,
          max: 66.7,
          percent: Math.round((mcqWeighted / 66.67) * 100)
        },
        {
          label: 'FRQ Weighted Points (33.3%)',
          value: `${frqWeighted.toFixed(1)} pts`,
          max: 33.3,
          percent: Math.round((frqWeighted / 33.33) * 100)
        },
        {
          label: 'Raw Multiple Choice Correct',
          value: `${mcq} / 75`
        },
        {
          label: 'Raw Free Response Total',
          value: `${totalFrq} / 14`
        }
      ]
    };
  },
  faqs: apPsychologyFaqs,
  seoArticle: apPsychologySeoArticle
};

export default apPsychologyCalculator;
