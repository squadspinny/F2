import { CalculatorConfig, CalculatorFaq, CalculatorResult, SeoArticle } from '../../types';

export const apComputerSciencePrinciplesFaqs: CalculatorFaq[] = [
   {
    "question": "How many MCQs are on the AP CSP exam?",
    "answer": "The AP CSP exam has 70 multiple-choice questions. This section makes up 70% of the total exam score."
  },
  {
    "question": "What is the AP CSP Create Performance Task?",
    "answer": "The Create Performance Task is a project where you make a computer program and submit your program, video, and other required work. It makes up 30% of your AP CSP score."
  },
  {
    "question": "How is AP CSP scored?",
    "answer": "AP CSP has two parts. The multiple-choice section is 70%, and the Create Performance Task is 30%. Together, they give you an AP score from 1 to 5."
  },
  {
    "question": "What score do you need to get a 5 on AP CSP?",
    "answer": "There is no fixed percentage that always gives you a 5. The score needed can change each year, so one percentage does not always mean you will get a 5."
  },
  {
    "question": "Is a 3 on AP CSP bad?",
    "answer": "No. College Board considers a 3 a \"Qualified\" AP score. Whether you get college credit depends on the college and its AP credit policy."
  }
];

export const apComputerSciencePrinciplesSeoArticle: SeoArticle = {
  "calculatorId": "ap-computer-science-principles",
  "title": "AP CS Principles Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP CSP Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP CSP Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP CSP Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP CSP Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP CSP Score Distributions"
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
      "title": "What is the AP CSP Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP CSP Score Calculator** is a simple tool that helps you estimate your AP CS Principles score. Enter your multiple-choice score and Create Performance Task score to see your estimated score out of 100.",
        "For the 2027 exam, there are 70 multiple-choice questions, which make up 70% of the score. The Create Performance Task makes up the other 30%. The calculator combines both parts and gives you an estimated AP score from 1 to 5.",
        "The result is only an estimate. Your final AP score from College Board may be different."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP CSP Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "Using the **AP CS Principles Score Calculator** is straightforward. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "Enter how many of the 70 multiple-choice questions you got right.",
        "Enter your rubric points earned on the Create Performance Task written responses.",
        "The calculator combines your MCQ and Create Task scores to give you an estimated AP score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "The AP CSP exam has two main parts. Here’s a quick look at the questions, time, and score weight for each part."
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
            "Section I: End-of-Course Multiple Choice",
            "70 Questions (57 Single, 5 Reading, 8 Multi-Select)",
            "120 Minutes",
            "70%"
          ],
          [
            "Section II: Create Performance Task",
            "Program Code, Video + PPR + 4 Written Prompts",
            "9 Hours In-Class + 60-Minute Written Response",
            "30%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "**Note:** The 2027 AP CSP exam is fully digital."
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP CSP Score Calculator Work?"
    },
   {
    "type": "paragraph",
    "text": "The AP CSP exam has two main parts:"
  },
  {
    "type": "bulletList",
    "items": [
      "Multiple-Choice Questions (MCQs)",
      "Create Performance Task"
    ]
  },
   {
    "type": "h3",
    "title": "Multiple-Choice Questions"
  },
  {
    "type": "paragraph",
    "text": "The exam has 70 multiple-choice questions. This part makes up 70% of your total score. Your correct answers are converted into a score out of 70."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated MCQ Score = (Correct Answers ÷ 70) × 70"
  },
  {
    "type": "h3",
    "title": "Create Performance Task"
  },
  {
    "type": "paragraph",
    "text": "The Create Performance Task is scored out of 6 points. This part makes up 30% of your total score. Your Create Task score is converted into a score out of 30."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Estimated Create Task Score = (Create Task Score ÷ 6) × 30"
  },
  {
    "type": "h3",
    "title": "Estimated Composite Score"
  },
  {
    "type": "paragraph",
    "text": "The calculator adds your MCQ score and Create Task score to give you an estimated Composite Score out of 100."
  },
  {
    "type": "formula",
    "title": "",
    "formula": "Composite Score = MCQ Score + Create Task Score"
  },
  {
    "type": "paragraph",
    "text": "The calculator then compares your Composite Score with the estimated score ranges used on this calculator. Based on the range your score comes into, it gives you an estimated AP CSP score from 1 to 5."
  },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP CSP Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "These score ranges are only estimates. College Board does not publish one fixed score chart for every year. They are here to give you an idea of your possible AP score."
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
            "82 - 100 points (~82%)"
          ],
          [
            "4",
            "Well Qualified",
            "69 - 81 points (~69%)"
          ],
          [
            "3",
            "Qualified",
            "55 - 68 points (~55%)"
          ],
          [
            "2",
            "Possibly Qualified",
            "40 - 54 points (~40%)"
          ],
          [
            "1",
            "No Recommendation",
            "0 - 39 points (<40%)"
          ]
        ]
      }
    },
    {
      "type": "h2",
      "id": "score-distributions",
      "title": "AP CSP Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The official **AP CSP score distribution** shows the percentage of students who received each AP score from 1 to 5."
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
            "10%"
          ],
          [
            "4",
            "23%"
          ],
          [
            "3",
            "30%"
          ],
          [
            "2",
            "21%"
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
      "text": "In 2026, 63% of students scored 3 or higher on the AP Computer Science Principles exam."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apComputerSciencePrinciplesFaqs,
      "title": "Common Questions About AP CSP"
    }
  ]
};

export const apComputerSciencePrinciplesCalculator: CalculatorConfig = {
  "id": "ap-computer-science-principles",
  "title": "AP CSP Score Calculator",
  "shortName": "AP CSP",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 Exam Structure",
  "seoTitle": "AP CSP Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP CSP Score Calculator to estimate your AP Computer Science Principles score from your MCQ and Create task performance.",
  "overview": "Estimate your AP CS Principles score from 1 to 5 using the 2027 exam format. Enter your 70 MCQ score and Create Task score to see your estimated score out of 100.",
  "cardDescription": "Estimate your AP CSP grade from 70 MCQs and the Create Performance Task.",
  "fields": [
    {
      "id": "mcq",
      "label": "End-of-Course MCQ Correct",
      "sublabel": "Raw correct answers out of 70 (70% weight)",
      "min": 0,
      "max": 70,
      "defaultValue": 56
    },
    {
      "id": "task",
      "label": "Create Performance Task Score",
      "sublabel": "Points earned out of 6 (30% weight)",
      "min": 0,
      "max": 6,
      "defaultValue": 4
    }
  ],
  "relatedCalculatorIds": [
    "ap-computer-science-a",
    "ap-statistics",
    "ap-calculus-ab",
    "ap-environmental-science"
  ]
,
  calculate: (inputs: Record<string, number>): CalculatorResult => {
    const mcq = Math.max(0, Math.min(70, inputs.mcq ?? 56));
    const task = Math.max(0, Math.min(6, inputs.task ?? 4));

    // MCQ = 70%, Create Performance Task = 30%
    const mcqWeighted = mcq;

    const taskWeighted = (task / 6) * 30;

    const composite =
      Math.round((mcqWeighted + taskWeighted) * 10) / 10;

    let score = 1;
    let status = 'No Recommendation';
    let badgeColor: CalculatorResult['qualificationBadgeColor'] = 'rose';
    let percentile = 'Bottom 36%';

    // Estimated ranges kept as requested
    if (composite >= 82) {
      score = 5;
      status = 'Extremely Well Qualified';
      badgeColor = 'emerald';
      percentile = 'Top 12.5%';
    } else if (composite >= 69) {
      score = 4;
      status = 'Well Qualified';
      badgeColor = 'blue';
      percentile = 'Top 34.8%';
    } else if (composite >= 55) {
      score = 3;
      status = 'Qualified';
      badgeColor = 'amber';
      percentile = 'Top 63.4%';
    } else if (composite >= 40) {
      score = 2;
      status = 'Possibly Qualified';
      badgeColor = 'rose';
      percentile = 'Bottom 36.6%';
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
          label: 'End-of-Course Multiple Choice (70%)',
          value: `${mcq} / 70 pts`
        },
        {
          label: 'Create Performance Task (30%)',
          value: `${task} / 6 pts (${Math.round(taskWeighted * 10) / 10}/30 weighted)`
        },
        {
          label: 'Total Composite Score',
          value: `${composite} / 100 pts`
        }
      ],

      summaryNote:
        `Your estimated Composite Score is ${composite}/100, which maps to an estimated AP Score of ${score}.`
    };
  },
  faqs: apComputerSciencePrinciplesFaqs,
  seoArticle: apComputerSciencePrinciplesSeoArticle
};

export default apComputerSciencePrinciplesCalculator;
