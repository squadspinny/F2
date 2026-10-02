import { CalculatorConfig, CalculatorFaq, CalculatorResult, SeoArticle } from '../../types';

export const apMacroeconomicsFaqs: CalculatorFaq[] = [
  {
    "question": "What percent is a 5 on AP Macro?",
    "answer": "There is no fixed percentage for a 5 on AP Macro. The score changes from year to year. Use our AP Macro Score Calculator to get an estimated AP score."
  },
  {
    "question": "How many MCQs are on AP Macroeconomics?",
    "answer": "The AP Macroeconomics exam has 60 multiple-choice questions. This section is worth 66.65% of your total exam score. "
  },
  {
    "question": "What are the FRQs on AP Macro?",
    "answer": "The 2027 AP Macro exam has 3 free-response questions: one long question and two short questions. The FRQ section is worth 33.35% of your total exam score."
  }
];

export const apMacroeconomicsSeoArticle: SeoArticle = {
  "calculatorId": "ap-macroeconomics",
  "title": "AP Macro Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Macro Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Macro Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Macro Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Macro Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP Macro Score Distributions"
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
      "title": "What is the AP Macro Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Macro Score Calculator** helps you estimate your AP Macroeconomics score from 1 to 5. It uses the 2027 exam format, including 60 multiple-choice questions and 3 free-response questions.",
        "Enter your MCQ and FRQ scores, and the calculator combines them into an estimated Composite Score out of 100. The result is only an estimate and not an official College Board score."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP Macro Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "It's quite simple to use the AP Macro Score Calculator. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "**Enter Section I (Multiple-Choice) Points –** Enput the number of multiple-choice questions you answered correctly.",
        "**Enter Section II (Free-Response) Points –** Enter your points earned on the free-response questions.",
        "**View Your Estimated AP Score –** The tool automatically applies official College Board section weightings to calculate your composite score out of 100 and predicted AP grade from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "Understanding the exam time, number of questions, and section weight is important when using the AP Macro Score Calculator."
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
      "text": "**Note:** A four-function, scientific, or graphing calculator is permitted on the **AP Macroeconomics exam** according to the applicable College Board calculator policy."
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Macro Score Calculator Work?"
    },
    {
      "type": "paragraph",
      "text": "The AP Macro Score Calculator combines your multiple-choice and free-response performance to estimate your overall AP score."
    },
   {
"type": "h3",
"title": "Section I: Multiple-Choice Questions"
   },
   {
"type":"paragraph",
"text":"The AP Macroeconomics exam has 60 multiple-choice questions. Your correct answers are combined to get your total score out of 60.",
   },
   {
"type":"paragraph",
"text":"The calculator converts your MCQ score to a maximum of 66.65 point using:"
   },
   {
"type":"formula",
"title":"",
"formula" : "Estimated MCQ Score = (MCQ Score ÷ 60) × 66.65"
   },
   {
  "type": "h3",
  "title": "Section II: Free-Response Questions"
},
{
  "type": "paragraph",
  "text": "The AP Macroeconomics exam has 3 free-response questions. Together, they have a maximum of 20 raw points."
},
{
  "type": "paragraph",
  "text": "The calculator converts your FRQ score to a maximum of 33.35 points using:"
},
{
  "type": "formula",
  "title": "",
  "formula": "Estimated FRQ Score = (FRQ Score ÷ 20) × 33.35"
},
{
  "type": "h3",
  "title": "AP Macro Composite Score"
},
{
  "type": "paragraph",
  "text": "The calculator adds your weighted MCQ and FRQ scores to get your estimated composite score out of 100."
},
{
  "type": "formula",
  "title": "",
  "formula": "Composite Score = Estimated MCQ Score + Estimated FRQ Score"
},
{
  "type": "paragraph",
  "text": "Your estimated composite score is then compared with the estimated AP Macroeconomics score ranges to give you an estimated AP score from 1 to 5."
},

    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Macro Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "The score ranges below are used to convert your composite score into an estimated AP score from 1 to 5. These score ranges are estimates used by this calculator and may differ from the official score set by the College Board."
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
            "70 - 100 points"
          ],
          [
            "4",
            "Well Qualified",
            "54 - 69 points"
          ],
          [
            "3",
            "Qualified",
            "40 - 53 points"
          ],
          [
            "2",
            "Possibly Qualified",
            "28 - 39 points"
          ],
          [
            "1",
            "No Recommendation",
            "0 - 27 points"
          ]
        ]
      }
    },
    {
      "type": "h2",
      "id": "score-distributions",
      "title": "AP Macro Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The **AP Macro score distribution** shows the percentage of students who earned each AP score on the 2026 exam:"
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
            "22%"
          ],
          [
            "3",
            "25%"
          ],
          [
            "2",
            "20%"
          ],
          [
            "1",
            "14%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "In 2026 AP Macroeconomics exam, 66% of students scored 3 or higher."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apMacroeconomicsFaqs,
      "title": "Common Questions About AP Macroeconomics"
    }
  ]
};

export const apMacroeconomicsCalculator: CalculatorConfig = {
  "id": "ap-macroeconomics",
  "title": "AP Macro Score Calculator",
  "shortName": "AP Macroeconomics",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 Exam Structure",
  "seoTitle": "AP Macro Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP Macro Score Calculator 2027 to estimate your AP Macroeconomics score from MCQ and FRQ performance. Free and easy to use.",
  "overview": "Estimate your AP Macro score from 1–5 using the 2027 exam format. Enter your MCQ and FRQ scores to get an estimated Composite Score out of 100.",
  "cardDescription": "Estimate your AP Macroeconomics score from 60 MCQs and 3 Free-Response questions.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I: Multiple Choice Correct",
      "sublabel": "Raw correct answers (0 - 60)",
      "min": 0,
      "max": 60,
      "defaultValue": 46
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
    "ap-microeconomics",
    "ap-us-government",
    "ap-statistics",
    "ap-calculus-ab"
  ]
,
  calculate: (inputs: Record<string, number>): CalculatorResult => {
    const mcq = Math.max(0, Math.min(60, inputs.mcq ?? 46));

    const frq1 = Math.max(0, Math.min(10, inputs.frq1 ?? 7));
    const frq2 = Math.max(0, Math.min(5, inputs.frq2 ?? 4));
    const frq3 = Math.max(0, Math.min(5, inputs.frq3 ?? 4));

    const frqTotal = frq1 + frq2 + frq3; // max 20 raw points

    // 2027 weighting:
    // MCQ = 66.65%
    // FRQ = 33.35%

    const mcqWeighted =
      (mcq / 60) * 66.65;

    const frqWeighted =
      (frqTotal / 20) * 33.35;

    const composite =
      Math.round((mcqWeighted + frqWeighted) * 10) / 10;

    let score = 1;
    let status = 'No Recommendation';
    let badgeColor: CalculatorResult['qualificationBadgeColor'] = 'rose';
    let percentile = 'Bottom 35%';

    if (composite >= 70) {
      score = 5;
      status = 'Extremely Well Qualified';
      badgeColor = 'emerald';
      percentile = 'Top 16.5%';
    } else if (composite >= 54) {
      score = 4;
      status = 'Well Qualified';
      badgeColor = 'blue';
      percentile = 'Top 40.2%';
    } else if (composite >= 40) {
      score = 3;
      status = 'Qualified (College Credit)';
      badgeColor = 'amber';
      percentile = 'Top 64.8%';
    } else if (composite >= 28) {
      score = 2;
      status = 'Possibly Qualified';
      badgeColor = 'rose';
      percentile = 'Bottom 35.2%';
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

      summaryNote: `Your estimated Composite Score is ${composite}/100, which corresponds to a projected AP Score of ${score}.`
    };
  },
  faqs: apMacroeconomicsFaqs,
  seoArticle: apMacroeconomicsSeoArticle
};

export default apMacroeconomicsCalculator;
