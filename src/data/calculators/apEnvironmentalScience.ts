import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apEnvironmentalScienceFaqs: CalculatorFaq[] = [
  {
    "question": "What percentage do you need to get a 5 on APES?",
    "answer": "There is no fixed percentage that always gives you a 5 on the APES exam. Your final AP score is based on multiple-choice and free-response questions. You can use our APES Score Calculator to get an estimate your AP score."
  },
  {
    "question": "What is a 3 on APES?",
    "answer": "A 3 is one of the passing AP scores. It shows you have enough knowledge of AP Environmental Science to earn a score of 3 on the AP scale. The percentage needed for a 3 can change each year, so there is no fixed percentage for it."
  },
  {
    "question": "How many MCQs are on APES?",
    "answer": "There are 80 multiple-choice questions on the AP Enviromental Science (APES) exam. This section is worth 60% of your total score."
  },
  {
    "question": "Do we get a calculator on the APES exam?",
    "answer": "Yes, calculators are allowed on both multiple-choice and free-response sections. You can use an approved calculator on the APES exam."
  },
  {
    "question": "How is the APES exam scored?",
    "answer": "The APES exam has two sections: 80 multiple-choice questions worth 60% of your score and 3 free-response questions worth 40%. Your performance from both sections are combined to give you a final AP score from 1 to 5."
  }
];

export const apEnvironmentalScienceSeoArticle: SeoArticle = {
  "calculatorId": "ap-environmental-science",
  "title": "APES Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the APES Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the APES Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the APES Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated APES Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "APES Score Distributions"
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
      "title": "What is the APES Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **APES Score Calculator** is a free online tool that helps you estimate your AP Environmental Science score based on your performance in the multiple-choice and free-response sections of the exam.",
        "The calculator uses the current College Board exam structure: 80 multiple-choice questions worth 60% of the exam score and 3 free-response questions worth 40%.",
        "The College Board does not publish a permanent raw score to AP score conversion table, the result from this APES score calculator should be treated as an estimate rather than an official AP score."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the APES Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "Using the APES Score Calculator is easy. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "**Enter Section I (MCQ) Score –** Enter the number of multiple-choice questions you answered correctly.",
        "**Enter Section II (FRQ) Points –** Enter your points scored on each of the 3 Free-Response questions.",
        "**View Your Estimated AP Score –** The calculator automatically applies the 60% MCQ and 40% FRQ weightings to compute your composite score out of 100, providing your predicted AP score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "To understand your **AP Environmental Science score**, it helps to know how the exam is divided, how much time you get for each section, and how much each section counts toward your final score."
    },
    {
      "type": "table",
      "id": "exam-structure-table",
      "data": {
        "headers": [
          "Section",
          "Number of Questions",
          "Time Allotted",
          "Weighting"
        ],
        "rows": [
          [
            "Section I: Multiple Choice",
            "80 Questions",
            "90 Minutes",
            "60% of Total"
          ],
          [
            "Section II: Free Response",
            "3 Questions (30 pts)",
            "70 Minutes",
            "40% of Total"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "**Note:** Scientific or graphing calculators are permitted on both Section I and Section II of the APES exam."
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the APES Score Calculator Work?"
    },
    {
      "type": "paragraph",
      "text": "The **APES exam** consists of two main sections that make up your composite score:"
    },
    {
      "type": "bulletList",
      "items": [
        "Section I: Multiple-Choice Questions (MCQ)",
        "Section II: Free-Response Questions (FRQ)"
      ]
    },
    {
      "type": "h3",
      "title": "Section I: Multiple-Choice Questions"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The multiple-choice section consists of 80 questions to be completed in 90 minutes. This section makes up 60% of your total exam score.",
        "Your raw correct answers are converted to a weighted score out of 60 using the following formula:"
      ]
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Estimated MCQ Score = (Correct Answers ÷ 80) × 60"
    },
    {
      "type": "h3",
      "title": "Section II: Free-Response Questions"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The free-response section contains 3 questions to be completed in 70 minutes. Each question is scored out of 10 points (30 total raw points) and accounts for 40% of your overall score:"
      ]
    },
    {
      "type": "bulletList",
      "items": [
        "Question 1: Design an Investigation",
        "Question 2: Analyze an Environmental Problem and Propose a Solution",
        "Question 3: Analyze Problem & Propose Solution with Calculations"
      ]
    },
    {
      "type": "paragraph",
      "text": "Your raw FRQ points are converted into a weighted score out of 40 using:"
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Estimated FRQ Score = (Total FRQ Points ÷ 30) × 40"
    },
    {
      "type": "h3",
      "title": "APES Composite Score"
    },
    {
      "type": "paragraph",
      "text": "Now the calculator adds your weighted MCQ and FRQ scores together to determine your composite score out of 100:"
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Composite Score = MCQ Score + FRQ Score"
    },
    {
      "type": "paragraph",
      "text": "Now, your composite score is compared with the estimated score ranges used by this calculator to give you a predicted AP score from 1 to 5."
    },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated APES Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "The composite score ranges below are used to estimate your final AP Environmental Science score from 1 to 5:"
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
            "71 – 100",
            "Extremely Well Qualified"
          ],
          [
            "4",
            "58 – 70",
            "Well Qualified"
          ],
          [
            "3",
            "46 – 57",
            "Qualified (College Credit Eligible)"
          ],
          [
            "2",
            "33 – 45",
            "Possibly Qualified"
          ],
          [
            "1",
            "0 – 32",
            "No Recommendation"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "These score ranges are **estimates** used by this calculator. They are not official College Board cutoffs.  "
    },
    {
      "type": "h2",
      "id": "score-distributions",
      "title": "APES Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The official **APES score distribution** for 2026 was:"
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
            "13%"
          ],
          [
            "4",
            "29%"
          ],
          [
            "3",
            "27%"
          ],
          [
            "2",
            "15%"
          ],
          [
            "1",
            "16%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "In 2026, 69% of students earned a score of 3 or higher on the APES."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apEnvironmentalScienceFaqs
    }
  ]
};

export const apEnvironmentalScienceCalculator: CalculatorConfig = {
  "id": "ap-environmental-science",
  "title": "APES Score Calculator",
  "shortName": "AP Environmental Science",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "APES Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free APES Score Calculator to estimate your AP Environmental Science score from 1–5. Enter MCQ and FRQ points to get your estimate.",
  "overview": "Estimate your APES score from 1 to 5 using the 2027 exam format: 80 MCQs and 3 FRQs. MCQs are worth 60% and FRQs are worth 40% of your total score.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I: Multiple Choice Questions (MCQ)",
      "sublabel": "80 questions (90 minutes, 60% of exam)",
      "min": 0,
      "max": 80,
      "defaultValue": 56,
      "unit": "/ 80"
    },
    {
      "id": "frq1",
      "label": "FRQ 1: Design an Investigation",
      "sublabel": "10 points (scientific method and data analysis)",
      "min": 0,
      "max": 10,
      "defaultValue": 7,
      "unit": "/ 10"
    },
    {
      "id": "frq2",
      "label": "FRQ 2: Analyze an Environmental Problem and Propose a Solution",
      "sublabel": "10 points (authentic scenario and mitigation)",
      "min": 0,
      "max": 10,
      "defaultValue": 7,
      "unit": "/ 10"
    },
    {
      "id": "frq3",
      "label": "FRQ 3: Analyze Problem & Propose Solution with Calculations",
      "sublabel": "10 points (math/dimensional analysis required)",
      "min": 0,
      "max": 10,
      "defaultValue": 6,
      "unit": "/ 10"
    }
  ],
  "relatedCalculatorIds": [
    "ap-biology",
    "ap-human-geography",
    "ap-chemistry"
  ]
,
  calculate: (inputs) => {
      const mcq = Math.min(80, Math.max(0, inputs.mcq || 0));
      const frq1 = Math.min(10, Math.max(0, inputs.frq1 || 0));
      const frq2 = Math.min(10, Math.max(0, inputs.frq2 || 0));
      const frq3 = Math.min(10, Math.max(0, inputs.frq3 || 0));
      const totalFrq = frq1 + frq2 + frq3;

      const mcqWeighted = (mcq / 80) * 60;
      const frqWeighted = (totalFrq / 30) * 40;
      const composite = Math.round((mcqWeighted + frqWeighted) * 10) / 10;

      let score = 1;
      let status = 'No Recommendation';
      let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'rose';
      let percentile = '~25th Percentile';

      if (composite >= 71) {
        score = 5;
        status = 'Extremely Well Qualified';
        badgeColor = 'emerald';
        percentile = 'Top ~9% (91st+ Percentile)';
      } else if (composite >= 58) {
        score = 4;
        status = 'Well Qualified';
        badgeColor = 'blue';
        percentile = '~65th-90th Percentile';
      } else if (composite >= 46) {
        score = 3;
        status = 'Qualified (College Credit Eligible)';
        badgeColor = 'amber';
        percentile = '~47th-64th Percentile';
      } else if (composite >= 33) {
        score = 2;
        status = 'Possibly Qualified';
        badgeColor = 'rose';
        percentile = '~23rd-46th Percentile';
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
        summaryNote: `Your composite score is ${composite.toFixed(1)} / 100. Section I contributed ${mcqWeighted.toFixed(1)} pts and Section II contributed ${frqWeighted.toFixed(1)} pts.`,
        subscores: [
          { label: 'MCQ Weighted Contribution', value: `${mcqWeighted.toFixed(1)} pts`, max: 60, percent: Math.round((mcqWeighted / 60) * 100) },
          { label: 'FRQ Weighted Contribution', value: `${frqWeighted.toFixed(1)} pts`, max: 40, percent: Math.round((frqWeighted / 40) * 100) },
          { label: 'Raw Multiple Choice Correct', value: `${mcq} / 80` },
          { label: 'Raw Free Response Total', value: `${totalFrq} / 30` }
        ]
      };
    },
  faqs: apEnvironmentalScienceFaqs,
  seoArticle: apEnvironmentalScienceSeoArticle
};

export default apEnvironmentalScienceCalculator;
