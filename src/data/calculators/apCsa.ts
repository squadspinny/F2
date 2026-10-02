import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apCsaFaqs: CalculatorFaq[] = [
  {
    "question": "How many MCQs does AP CSA have?",
    "answer": "The AP Computer Science A (AP CSA) exam has 42 multiple-choice questions. The multiple-choice section accounts for 55% of the total AP CSA score. You have 90 minutes to complete this section."
  },
  {
    "question": "What percentage is a 5 on AP CSA?",
    "answer": "There is no fixed percentage that guarantees a 5 on AP CSA. AP scores are based on the combined performance of the multiple-choice and free-response sections, and the score conversion can vary by exam year.Our AP CSA Score Calculator can help estimate your score based on your performance."
  },
  {
    "question": "Is a 3 on AP CSA good?",
    "answer": "A 3 is a passing AP score and is considered a qualifying score by the College Board. Whether a 3 earns college credit or placement depends on the college or university, as each institution sets its own AP credit policies."
  },
  {
    "question": "Is it hard to get a 5 on AP CSA?",
    "answer": "Getting a 5 on AP CSA requires strong performance across both the multiple-choice and free-response sections. You need a solid understanding of Java and the ability to apply programming concepts to AP-style questions. Practicing AP questions and reviewing your mistakes can help you prepare for a higher score."
  }
];

export const apCsaSeoArticle: SeoArticle = {
  "calculatorId": "ap-computer-science-a",
  "title": "AP CSA Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP CSA Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP CSA Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP CSA Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP CSA Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP CSA Score Distributions"
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
      "title": "What is AP CSA Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP CSA Score Calculator** is a free tool that helps you estimate your AP Computer Science A score. Enter your MCQ and FRQ scores to see your composite score out of 100.",
        "For the **2027 AP CSA exam**, the 42 multiple-choice questions make up 55% of the score, while the 4 free-response questions make up the remaining 45%. The calculator combines both sections based on these weightings to calculate your score on a 100-point scale.",
        "Keep in mind that the result is only an estimate and is not an official College Board score. Your final AP score is determined by the College Board."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP CSA Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "It's quite simple to use AP CSA Score Calculator. Just follow these steps:"
    },
    {
      "type": "orderedList",
      "items": [
        "**Enter your correct MCQs –** The AP CSA exam has 42 multiple-choice questions. Enter the number of questions you answered correctly.",
        "**Enter your FRQ points –** The Free-Response section has 4 questions worth 25 raw points in total. Enter your score for each question.",
        "**Check your result –** The calculator combines your MCQ and FRQ scores using the 55% / 45% weighting and shows your estimated AP score from 1 to 5 and composite score out of 100."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "To understand your **AP Computer Science A score**, it helps to know how the exam is divided, how much time you get, and how each section is weighted."
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
            "55% of Total"
          ],
          [
            "Section II: Free Response",
            "4 Questions (25 raw points)",
            "90 Minutes",
            "45% of Total"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "**Note: The 2027 AP CSA exam is fully digital in Bluebook.**"
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP CSA Score Calculator Work?"
    },
    {
      "type": "paragraph",
      "text": "The AP Computer Science A exam has two sections:"
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
        "The AP CSA multiple-choice section has 42 questions, and you get 90 minutes to complete it. This section makes up 55% of your total exam score.",
        "Your correct answers are converted to a score out of 55 using this formula:"
      ]
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Estimated MCQ Score = (Correct Answers ÷ 42) × 55"
    },
    {
      "type": "h3",
      "title": "Section II: Free-Response Questions"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The free-response section has 4 questions, with 90 minutes (1 hour 30 minutes) to complete them."
      ]
    },
    {
      "type": "bulletList",
      "items": [
        "Question 1: Methods and Control Structures - 7 points",
        "Question 2: Class Design - 7 points",
        "Question 3: Data Analysis with ArrayList - 5 points",
        "Question 4: 2D Array - 6 points",
        "Total: 25 raw points"
      ]
    },
    {
      "type": "paragraph",
      "text": "The calculator converts your FRQ points into a score out of 45 using:"
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Estimated FRQ Score = (FRQ Raw Points ÷ 25) × 45"
    },
    {
      "type": "h3",
      "title": "AP CSA Composite Score"
    },
    {
      "type": "paragraph",
      "text": "Now the calculator adds your weighted MCQ and FRQ scores to get your composite score out of 100."
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Composite Score = MCQ Score + FRQ Score"
    },
    {
      "type": "paragraph",
      "text": "Your composite score is then compared with the score ranges used by the calculator to give you an estimated AP score from 1 to 5."
    },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP CSA Score Ranges"
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
          "Estimated Cutoff",
          "Qualification Meaning"
        ],
        "rows": [
          [
            "5",
            "80–100",
            "Extremely well qualified"
          ],
          [
            "4",
            "65–79",
            "Well qualified"
          ],
          [
            "3",
            "50–64",
            "Qualified"
          ],
          [
            "2",
            "35–49",
            "Possibly qualified"
          ],
          [
            "1",
            "0–34",
            "No qualification"
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
      "id": "score-distributions",
      "title": "AP CSA Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The AP Computer Science A score distribution for 2026 was:"
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
            "25%"
          ],
          [
            "4",
            "26%"
          ],
          [
            "3",
            "15%"
          ],
          [
            "2",
            "11%"
          ],
          [
            "1",
            "23%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "In 2026, 66% of students scored 3 or higher."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apCsaFaqs
    }
  ]
};

export const apCsaCalculator: CalculatorConfig = {
  "id": "ap-computer-science-a",
  "title": "AP CSA Score Calculator",
  "shortName": "AP Computer Science A",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "AP CSA Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP CSA Score Calculator to estimate your AP Computer Science A score. Enter your MCQ and FRQ scores to get your estimated AP score.",
  "overview": "The AP CSA exam is 3 hours long, with 42 multiple-choice questions worth 55% of your score and 4 free-response questions worth 45%. The exam covers Java programming, class design, ArrayList, and 2D arrays.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I: Multiple-Choice Questions",
      "sublabel": "42 questions (90 minutes, 55% of exam score)",
      "min": 0,
      "max": 42,
      "defaultValue": 30,
      "unit": "/ 42"
    },
    {
      "id": "frq1",
      "label": "FRQ 1: Methods and Control Structures",
      "sublabel": "7 points maximum",
      "min": 0,
      "max": 7,
      "defaultValue": 5,
      "unit": "/ 7"
    },
    {
      "id": "frq2",
      "label": "FRQ 2: Class Design",
      "sublabel": "7 points maximum",
      "min": 0,
      "max": 7,
      "defaultValue": 5,
      "unit": "/ 7"
    },
    {
      "id": "frq3",
      "label": "FRQ 3: Data Analysis with ArrayList",
      "sublabel": "5 points maximum",
      "min": 0,
      "max": 5,
      "defaultValue": 4,
      "unit": "/ 5"
    },
    {
      "id": "frq4",
      "label": "FRQ 4: 2D Array",
      "sublabel": "6 points maximum",
      "min": 0,
      "max": 6,
      "defaultValue": 4,
      "unit": "/ 6"
    }
  ],
  "relatedCalculatorIds": [
    "ap-calculus-ab",
    "ap-calculus-bc",
    "ap-statistics"
  ]
,
  calculate: (inputs) => {
    const mcq = Math.min(42, Math.max(0, Number(inputs.mcq) || 0));

    const frq1 = Math.min(7, Math.max(0, Number(inputs.frq1) || 0));
    const frq2 = Math.min(7, Math.max(0, Number(inputs.frq2) || 0));
    const frq3 = Math.min(5, Math.max(0, Number(inputs.frq3) || 0));
    const frq4 = Math.min(6, Math.max(0, Number(inputs.frq4) || 0));

    const totalFrq = frq1 + frq2 + frq3 + frq4;

    // MCQ = 55% of exam
    const mcqWeighted =
      Math.round(((mcq / 42) * 55) * 10) / 10;

    // FRQ = 45% of exam
    const frqWeighted =
      Math.round(((totalFrq / 25) * 45) * 10) / 10;

    // Final Composite Score out of 100
    const composite =
      Math.round((mcqWeighted + frqWeighted) * 10) / 10;

    let score = 1;
    let status = 'No Recommendation';
    let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'rose';
    let percentile = '~20th-39th Percentile';

    if (composite >= 80) {
      score = 5;
      status = 'Extremely Well Qualified';
      badgeColor = 'emerald';
      percentile = 'Top ~25%';
    } else if (composite >= 65) {
      score = 4;
      status = 'Well Qualified';
      badgeColor = 'blue';
      percentile = '~45th-69th Percentile';
    } else if (composite >= 50) {
      score = 3;
      status = 'Qualified';
      badgeColor = 'amber';
      percentile = '~25th-44th Percentile';
    } else if (composite >= 35) {
      score = 2;
      status = 'Possibly Qualified';
      badgeColor = 'rose';
      percentile = '~15th-24th Percentile';
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
        `MCQ contributed ${mcqWeighted.toFixed(1)} pts and FRQs contributed ${frqWeighted.toFixed(1)} pts.`,

      subscores: [
        {
          label: 'MCQ Contribution (55%)',
          value: `${mcqWeighted.toFixed(1)} pts`,
          max: 55,
          percent: Math.round((mcqWeighted / 55) * 100)
        },
        {
          label: 'FRQ Contribution (45%)',
          value: `${frqWeighted.toFixed(1)} pts`,
          max: 45,
          percent: Math.round((frqWeighted / 45) * 100)
        },
        {
          label: 'Total Raw FRQ Points',
          value: `${totalFrq} / 25`,
          max: 25,
          percent: Math.round((totalFrq / 25) * 100)
        }
      ]
    };
  },
  faqs: apCsaFaqs,
  seoArticle: apCsaSeoArticle
};

export default apCsaCalculator;
