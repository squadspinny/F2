import { CalculatorConfig, CalculatorFaq, CalculatorResult, SeoArticle } from '../../types';

export const apMicroeconomicsFaqs: CalculatorFaq[] = [
  {
    "question": "How do you calculate an AP Micro score?",
    "answer": "Your AP Micro score is calculated using your multiple-choice and free-response performance. Both sections are combined to give you an estimated AP score from 1 to 5."
  },
  {
    "question": "What percentage is a 5 on AP Micro?",
    "answer": "There is no fixed percentage that always gives you a 5 on AP Micro. Your final AP score depends on how your overall exam performance is converted to the 1-5 AP scale."
  },
  {
    "question": "How many MCQs are on AP Microeconomics?",
    "answer": "The 2027 AP Microeconomics exam has 60 multiple-choice questions. This section makes up about 66.65% of the total exam score."
  },
  {
    "question": "Is 70% a 5 on AP Micro?",
    "answer": "A 70% score does not always mean a 5 on AP Micro. There is no single percentage that gurantees a AP score. The score ranges can change, so your overall performacne in both sections matters."
  },{
    "question":"Is a 4 on AP Micro good?",
    "answer":"Yes, a 4 is a good AP score. It means you performed well on the exam. Some college may also offer credit or placement for a 4, but this depends on the college.",
  }
];

export const apMicroeconomicsSeoArticle: SeoArticle = {
  "calculatorId": "ap-microeconomics",
  "title": "AP Micro Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Micro Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Micro Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Micro Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Micro Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP Micro Score Distributions"
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
      "title": "What is the AP Micro Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Micro Score Calculator** is a simple tool that helps you estimate your AP Microeconomics score from 1 to 5. Enter your correct answers from the multiple-choice section and the points you earned on the free-response questions to see your estimated Composite Score out of 100.",
        "The **2027 AP Microeconomics exam** has 60 multiple-choice questions worth 66.65% of your score and 3 free-response questions worth 33.35%. Our calculator combines both sections using these weights to give you an estimated AP score.",
        "This result is only an estimate. College Board does not publish a fixed raw-score cutoff for each AP score, so your actual AP score may be different."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP Micro Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "It's quite simple to use the AP Micro Score Calculator. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "**Enter Section I (Multiple-Choice) –** Enter the number of multiple-choice questions you answered correctly.",
        "**Enter Section II (Free-Response) –** Enter your points earned on the free-response questions.",
        "**View Your Estimated AP Score –** The tool automatically applies official College Board section weightings to calculate your composite score out of 100 and predict your AP score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "Understanding the exam time, number of questions, and section weights can help you better understand your AP Micro score."
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
            "70 Minutes",
            "66.65%"
          ],
          [
            "Section II: Free Response",
            "3 Prompts (1 Long, 2 Short)",
            "60 Minutes",
            "33.35%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "**Note:** Calculators are allowed on both multiple-choice and free-response sections."
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Micro Score Calculator Work?"
    },
    {
  "type": "paragraph",
  "text": "The **AP Microeconomics exam** has two main sections:"
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
  "text": "The AP Microeconomics multiple-choice section has 60 questions, with 70 minutes to complete them. This section is worth 66.65% of the exam."
},
{
  "type": "paragraph",
  "text": "Your correct answers are converted to a maximum of 66.65 points using:"
},
{
  "type": "formula",
  "title": "",
  "formula": "Estimated MCQ Score = (Correct Answers ÷ 60) × 66.65"
},
{
  "type": "h3",
  "title": "Section II: Free-Response Questions"
},
{
  "type": "paragraph",
  "text": "The Free-Response section has 3 questions and 60 minutes to complete them, including a 10-minute reading period."
},
{
  "type": "paragraph",
  "text": "It includes:"
},
{
  "type": "bulletList",
  "items": [
    "1 long free-response question — 10 points",
    "2 short free-response questions — 5 points each",
    "Total: 20 raw points"
  ]
},
{
  "type": "paragraph",
  "text": "The **AP Microeconomics Score Calculator** converts your FRQ points into a maximum of 33.35 points using the formula below:"
},
{
  "type": "formula",
  "title": "",
  "formula": "Estimated FRQ Score = (FRQ Raw Points ÷ 20) × 33.35"
},
{
  "type": "h3",
  "title": "AP Micro Composite Score"
},
{
  "type": "paragraph",
  "text": "The calculator adds the scores from both sections to get your estimated composite score out of 100."
},
{
  "type": "formula",
  "title": "",
  "formula": "Composite Score = MCQ Score + FRQ Score"
},
{
  "type": "paragraph",
  "text": "Your composite score is then compared with the estimated score ranges used by the calculator to give you an estimated AP score from 1 to 5."
},
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Micro Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "These score ranges are estimates. Since College Board does not publish a fixed raw-score conversion chart, your actual AP score may be different."
    },
    {
      "type": "table",
      "id": "score-scale-table",
      "data": {
        "headers": [
          "Score",
          "Qualification Meaning",
          "Estimated Composite Cutoff"
        ],
        "rows": [
          [
            "5",
            "Extremely Well Qualified",
            "72 - 100 points"
          ],
          [
            "4",
            "Well Qualified",
            "57 - 71.9 points"
          ],
          [
            "3",
            "Qualified",
            "42 - 56.9 points"
          ],
          [
            "2",
            "Possibly Qualified",
            "30 - 41.9 points"
          ],
          [
            "1",
            "No Recommendation",
            "0 - 29.9 points"
          ]
        ]
      }
    },
    {
      "type": "h2",
      "id": "score-distributions",
      "title": "AP Micro Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The **AP Microeconomics score distribution** was:"
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
            "23%"
          ],
          [
            "2",
            "20%"
          ],
          [
            "1",
            "12%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "In 2026, 68% of students scored 3 or higher on the AP Microeconomics exam."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apMicroeconomicsFaqs,
      "title": "Common Questions About AP Microeconomics"
    }
  ]
};

export const apMicroeconomicsCalculator: CalculatorConfig = {
  "id": "ap-microeconomics",
  "title": "AP Micro Score Calculator",
  "shortName": "AP Microeconomics",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 Exam Structure",
  "seoTitle": "AP Micro Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "AP Micro Score Calculator 2027: calculate your estimated 1–5 AP Microeconomics score from MCQ and FRQ results. Free and easy to use.",
  "overview": "Estimate your AP Micro score from 1–5 using the 2027 exam format, with 60 MCQs and 3 FRQs. Enter your scores to get your estimated Composite Score out of 100.",
  "cardDescription": "Calculate your AP Microeconomics score from 60 MCQs and 3 analytical Free-Response prompts.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I: Multiple Choice Correct",
      "sublabel": "Raw correct answers (0 - 60)",
      "min": 0,
      "max": 60,
      "defaultValue": 47
    },
    {
      "id": "frq1",
      "label": "Section II: Long FRQ (Question 1)",
      "sublabel": "Points earned out of 10",
      "min": 0,
      "max": 10,
      "defaultValue": 7
    },
    {
      "id": "frq2",
      "label": "Section II: Short FRQ (Question 2)",
      "sublabel": "Points earned out of 5",
      "min": 0,
      "max": 5,
      "defaultValue": 4
    },
    {
      "id": "frq3",
      "label": "Section II: Short FRQ (Question 3)",
      "sublabel": "Points earned out of 5",
      "min": 0,
      "max": 5,
      "defaultValue": 4
    }
  ],
  "relatedCalculatorIds": [
    "ap-macroeconomics",
    "ap-statistics",
    "ap-calculus-ab",
    "ap-us-history"
  ]
,
  calculate: (inputs: Record<string, number>): CalculatorResult => {
    const mcq = Math.max(0, Math.min(60, inputs.mcq ?? 47));

    const frq1 = Math.max(0, Math.min(10, inputs.frq1 ?? 7));
    const frq2 = Math.max(0, Math.min(5, inputs.frq2 ?? 4));
    const frq3 = Math.max(0, Math.min(5, inputs.frq3 ?? 4));

    const frqTotal = frq1 + frq2 + frq3; // max 20 raw points

    // 2027 exam weighting
    const mcqWeighted = (mcq / 60) * 66.65;
    const frqWeighted = (frqTotal / 20) * 33.35;

    const composite =
      Math.round((mcqWeighted + frqWeighted) * 10) / 10;

    let score = 1;
    let status = 'No Recommendation';
    let badgeColor: CalculatorResult['qualificationBadgeColor'] = 'rose';
    let percentile = 'Bottom 32%';

    if (composite >= 72) {
      score = 5;
      status = 'Extremely Well Qualified';
      badgeColor = 'emerald';
      percentile = 'Top 18.2%';
    } else if (composite >= 57) {
      score = 4;
      status = 'Well Qualified';
      badgeColor = 'blue';
      percentile = 'Top 42.4%';
    } else if (composite >= 42) {
      score = 3;
      status = 'Qualified (College Credit)';
      badgeColor = 'amber';
      percentile = 'Top 67.1%';
    } else if (composite >= 30) {
      score = 2;
      status = 'Possibly Qualified';
      badgeColor = 'rose';
      percentile = 'Bottom 32.9%';
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
          label: 'Section I: Multiple Choice (66.65%)',
          value: `${mcq} / 60 pts`
        },
        {
          label: 'Section II: Free Response (33.35%)',
          value: `${frqTotal} / 20 raw pts`
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
  faqs: apMicroeconomicsFaqs,
  seoArticle: apMicroeconomicsSeoArticle
};

export default apMicroeconomicsCalculator;
