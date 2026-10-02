import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apEnglishLiteratureFaqs: CalculatorFaq[] = [
  {
    "question": "What percentage do you need for a 5 on AP Lit?",
    "answer": "There is no fixed percentage for a 5 on AP Lit. The score can change every year, so one percentage does not always give you a 5."
  },
  {
    "question": "How many MCQs are on the AP Lit exam?",
    "answer": "The AP Lit exam has 55 multiple-choice questions. This section is worth 45% of your total exam score."
  },
  {
    "question": "What are the 3 FRQs on AP Lit?",
    "answer": "The 3 FRQs are Poetry Analysis, Prose Fiction Analysis, and Literary Argument. Each question is worth up to 6 points."
  },
  {
    "question": "How rare is a 5 on AP Lit?",
    "answer": "In 2026, 16% of students got a 5 on AP Lit. This means about 16 out of every 100 students received the highest score."
  },
  {
    "question": "Is a 3 on AP Lit good?",
    "answer": "Yes, a 3 is considered a 'Qualified' score by College Board. Whether it is enough for college credit depends on the college."
  }
];

export const apEnglishLiteratureSeoArticle: SeoArticle = {
  "calculatorId": "ap-english-literature",
  "title": "AP Lit Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Lit Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Lit Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Lit Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Lit Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP Lit Score Distributions"
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
      "title": "What is the AP Lit Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Lit Score Calculator** helps you estimate your AP English Literature and Composition score based on your performance in the Multiple-Choice (MCQ) and Free-Response (FRQ) sections.",
        "Enter your MCQ score and points for the Poetry Analysis, Prose Fiction Analysis, and Literary Argument essays. The **AP Lit Calculator** adds your scores to give you an estimated AP score. The result is only an estimate, not an official College Board score."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP Lit Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "Using the AP Lit Score Calculator is easy. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "Enter the number of multiple-choice questions you answered correctly.",
        "Enter your points earned on the free-response questions.",
        "Check your result to see your estimated Composite Score out of 100 and AP score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "Here's a quick look at the AP Lit exam sections, number of questions, time, and how much each section is worth."
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
            "60 Minutes",
            "45% of Score"
          ],
          [
            "Section II: Free Response (3 Essays)",
            "Poetry, Prose, Literary Argument",
            "120 Minutes",
            "55% of Score"
          ]
        ]
      }
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Lit Score Calculator Work?"
    },
    {
  "type": "paragraph",
  "text": "The **AP English Literature and Composition exam** has two main sections:"
},
{
"type":"bulletList",
"items": [
  "Section I: Multiple-choice Questions",
  "Section II: Free-Response Questions",
]
},
{
  "type": "h3",
  "title": "Section I: Multiple-Choice Questions"
},
{
  "type": "paragraph",
  "text": "The AP Lit multiple-choice section has 55 questions. You have 60 minutes to answer them, and this section is worth 45% of the exam."
},
{
  "type": "paragraph",
  "text": "Your correct answers are converted to a maximum of 45 points because this section is worth 45% of the exam."
},
{
  "type": "formula",
  "title": "",
  "formula": "Estimated MCQ Score = (Correct Answers ÷ 55) × 45"
},
{
  "type": "h3",
  "title": "Section II: Free-Response Questions"
},
{
  "type": "paragraph",
  "text": "The Free-Response section has 3 essays. You have 2 hours to complete them, and this section is worth 55% of the exam."
},
{
  "type": "paragraph",
  "text": "It includes:"
},
{
  "type": "bulletList",
  "items": [
    "1 Poetry Analysis essay - 6 points",
    "1 Prose Fiction Analysis essay - 6 points",
    "1 Literary Argument essay - 6 points",
    "Total: 18 raw points"
  ]
},
{
  "type": "paragraph",
  "text": "The **AP Lit Calculator** converts your FRQ points to a maximum of 55 points because this section is worth 55% of the exam."
},
{
  "type": "formula",
  "title": "",
  "formula": "Estimated FRQ Score = (FRQ Raw Points ÷ 18) × 55"
},
{
  "type": "h3",
  "title": "AP Lit Composite Score"
},
{
  "type": "paragraph",
  "text": "The calculator adds your MCQ and FRQ scores to get your estimated score out of 100."
},
{
  "type": "formula",
  "title": "",
  "formula": "Composite Score = MCQ Score + FRQ Score"
},
{
  "type": "paragraph",
  "text": "Your estimated score is then compared with the score ranges used by the calculator to give you an estimated AP Lit score from 1 to 5."
},
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Lit Score Ranges"
    },
    {
      "type": "paragraph",
      "text": "The score ranges below are used to convert your composite score into an estimated AP score from 1 to 5."
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
            "71 – 100 Composite"
          ],
          [
            "4",
            "Well Qualified",
            "58 – 70 Composite"
          ],
          [
            "3",
            "Qualified",
            "45 – 57 Composite"
          ],
          [
            "2",
            "Possibly Qualified",
            "32 – 44 Composite"
          ],
          [
            "1",
            "No Recommendation",
            "0 – 31 Composite"
          ]
        ]
      }
    },
    {
"type":"paragraph",
"text":"These score ranges are estimates used by this calculator and may differ from the official score set by the College Board.",
    },
    {
      "type": "h2",
      "id": "score-distributions",
      "title": "AP Lit Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The official **2026 AP Lit score distribution** shows the percentage of students who received each AP score from 1 to 5."
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
            "16%"
          ],
          [
            "4",
            "26%"
          ],
          [
            "3",
            "31%"
          ],
          [
            "2",
            "16%"
          ],
          [
            "1",
            "11%"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "In 2026, 73% of students scored 3 or higher on the AP English Literature exam."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apEnglishLiteratureFaqs,
      "title": "Common Questions About AP English Literature"
    }
  ]
};

export const apEnglishLiteratureCalculator: CalculatorConfig = {
  "id": "ap-english-literature",
  "title": "AP Lit Score Calculator",
  "shortName": "AP English Literature",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "AP Lit Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP Lit Score Calculator to estimate your AP English Literature score. Enter your MCQ and FRQ scores to get an estimated 1–5 score.",
  "overview": "Estimate your AP English Literature score from 1–5 with the AP Lit Calculator using the 2027 exam format. Enter your MCQ and FRQ scores to see your estimated score out of 100.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I: Multiple Choice Questions (Poetry & Prose Passages)",
      "sublabel": "55 questions (60 minutes, 45% of exam score)",
      "min": 0,
      "max": 55,
      "defaultValue": 40,
      "unit": "/ 55"
    },
    {
      "id": "frq_poetry",
      "label": "Section II Question 1: Poetry Analysis Essay",
      "sublabel": "6 points analytic rubric (Thesis, Evidence/Commentary, Sophistication)",
      "min": 0,
      "max": 6,
      "defaultValue": 4,
      "unit": "/ 6"
    },
    {
      "id": "frq_prose",
      "label": "Section II Question 2: Prose Fiction Analysis Essay",
      "sublabel": "6 points analytic rubric (analyzing literary devices in fiction)",
      "min": 0,
      "max": 6,
      "defaultValue": 4,
      "unit": "/ 6"
    },
    {
      "id": "frq_literary_argument",
      "label": "Section II Question 3: Literary Argument Essay",
      "sublabel": "6 points analytic rubric (analyzing a chosen work of literary merit)",
      "min": 0,
      "max": 6,
      "defaultValue": 4,
      "unit": "/ 6"
    }
  ],
  "relatedCalculatorIds": [
    "ap-english-language",
    "ap-world-history",
    "ap-us-history"
  ]
,
  calculate: (inputs) => {
      const mcq = Math.min(55, Math.max(0, inputs.mcq || 0));
      const frq1 = Math.min(6, Math.max(0, inputs.frq_poetry || 0));
      const frq2 = Math.min(6, Math.max(0, inputs.frq_prose || 0));
      const frq3 = Math.min(6, Math.max(0, inputs.frq_literary_argument || 0));
      const totalFrq = frq1 + frq2 + frq3;

      // Section 1: 55 MCQs = 45% of 100
      const mcqWeighted = (mcq / 55) * 45;
      // Section 2: 18 raw points = 55% of 100
      const frqWeighted = (totalFrq / 18) * 55;
      const composite = Math.round((mcqWeighted + frqWeighted) * 10) / 10;

      let score = 1;
      let status = 'No Recommendation';
      let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'rose';
      let percentile = '~25th Percentile';

      if (composite >= 71) {
        score = 5;
        status = 'Extremely Well Qualified';
        badgeColor = 'emerald';
        percentile = 'Top ~15% (85th+ Percentile)';
      } else if (composite >= 58) {
        score = 4;
        status = 'Well Qualified';
        badgeColor = 'blue';
        percentile = '~62nd-84th Percentile';
      } else if (composite >= 45) {
        score = 3;
        status = 'Qualified (College Credit Eligible)';
        badgeColor = 'amber';
        percentile = '~40th-61st Percentile';
      } else if (composite >= 32) {
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
        summaryNote: `Your composite score is ${composite.toFixed(1)} / 100. Scoring 71+ earns an AP 5.`,
        subscores: [
          { label: 'MCQ Weighted (45%)', value: `${mcqWeighted.toFixed(1)} pts`, max: 45, percent: Math.round((mcqWeighted / 45) * 100) },
          { label: 'Essays Weighted (55%)', value: `${frqWeighted.toFixed(1)} pts`, max: 55, percent: Math.round((frqWeighted / 55) * 100) },
          { label: 'Total Raw Essay Points', value: `${totalFrq} / 18` }
        ]
      };
    },
  faqs: apEnglishLiteratureFaqs,
  seoArticle: apEnglishLiteratureSeoArticle
};

export default apEnglishLiteratureCalculator;
