import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apEnglishLanguageFaqs: CalculatorFaq[] = [
  {
    "question": "How many MCQs are on AP Lang?",
    "answer": "The AP English Language exam has 45 multiple-choice questions. This section makes up 45% of your total exam score."
  },
  {
    "question": "What are the FRQs on AP Lang?",
    "answer": "The AP Lang exam has 3 free-response questions.They are a Synthesis question, a Rhetorical Analysis question, and an Argument question. The FRQ section counts for 55% of your total score."
  },
  {
    "question": "What percentage do you need for a 5 on AP English Language?",
    "answer": "There is no fixed percentage that always gives you a 5. It can change each from year to year, so one percentage does not always mean the same AP score. "
  },
  {
    "question": "What percentage do you need for a 4 on AP Lang?",
    "answer": "There is no fixed percentage for a 4. Your final AP score is based on both the multiple-choice and free-response sections, and the score range can change each year."
  },
  {
    "question": "Is a 3 a passing score on AP Lang?",
    "answer": "A 3 is described as **“Qualified”** by College Board. Whether you get college credit for a 3 depends on the college."
  }
];

export const apEnglishLanguageSeoArticle: SeoArticle = {
  "calculatorId": "ap-english-language",
  "title": "AP Lang Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Lang Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Lang Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Lang Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Lang Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP Lang Score Distributions"
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
      "title": "What is the AP Lang Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Lang Score Calculator** helps you estimate your AP English Language and Composition score from 1 to 5. It combines your multiple-choice answers and free-response essay points to give you an estimated score out of 100.",
        "Enter how many MCQs you got right and your scores for the Synthesis, Rhetorical Analysis, and Argument essays. The result is only an estimate and is not an official College Board score."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP Lang Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "It's easy to use the **AP Lang Calculator**. Follow these steps to estimate your score:"
    },
    {
      "type": "orderedList",
      "items": [
        "Enter the number of multiple-choice questions you answered correctly (out of 45).",
        "Enter your points earned on the free-response questions (out of 18 total points).",
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
      "text": "Understanding the exam time, number of questions, and section weights can help you understand your AP Lang score."
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
            "45 Questions",
            "60 Minutes",
            "45% of Score"
          ],
          [
            "Section II: Free Response (3 Essays)",
            "Synthesis, Rhetorical, Argument",
            "2h 15m",
            "55% of Score"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "**Note:** Section I has 45 MCQs worth 45% of the score, while Section II has 3 essays worth 55%. Each essay is scored out of 6 points."
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Lang Score Calculator Work?"
    },
    {
  "type": "paragraph",
  "text": "The **AP English Language and Composition exam** has two main sections:"
},
{
"type":"bulletList",
"items":[
  "Section I: Multiple-Choice Questions",
  "Section II: Free-Response Questions",
]
},
{
  "type": "h3",
  "title": "Section I: Multiple-Choice Questions"
},
{
  "type": "paragraph",
  "text": "The AP Lang multiple-choice section has 45 questions. You have 60 minutes to answer them, and this section is worth 45% of the exam."
},
{
  "type": "paragraph",
  "text": "Your correct answers are converted to a maximum of 45 points because this section is worth 45% of the exam."
},
{
  "type": "formula",
  "title": "",
  "formula": "Estimated MCQ Score = (Correct Answers ÷ 45) × 45"
},
{
  "type": "h3",
  "title": "Section II: Free-Response Questions"
},
{
  "type": "paragraph",
  "text": "The Free-Response section has 3 essays. You have 2 hours and 15 minutes to complete them, including a 15-minute reading period. This section is worth 55% of the exam."
},
{
  "type": "paragraph",
  "text": "It includes:"
},
{
  "type": "bulletList",
  "items":[
    "1 Synthesis essay - 6 points",
    "1 Rhetorical Analysis essay - 6 points",
    "1 Argument essay - 6 points",
    "Total: 18 raw points"
  ]
},
{
  "type": "paragraph",
  "text": "The **AP Lang Score Calculator** converts your FRQ points to a maximum of 55 points because this section is worth 55% of the exam."
},
{
  "type": "formula",
  "title": "",
  "formula": "Estimated FRQ Score = (FRQ Raw Points ÷ 18) × 55"
},
{
  "type": "h3",
  "title": "AP Lang Composite Score"
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
  "text": "Your estimated score is then compared with the score ranges used by the calculator to give you an estimated AP Lang score from 1 to 5."
},
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Lang Score Ranges"
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
            "72 – 100 "
          ],
          [
            "4",
            "Well Qualified",
            "59 – 71 "
          ],
          [
            "3",
            "Qualified",
            "46 – 58 "
          ],
          [
            "2",
            "Possibly Qualified",
            "33 – 45 "
          ],
          [
            "1",
            "No Recommendation",
            "0 – 32 "
          ]
        ]
      }
    },
    {
"type":"paragraph",
"text":"These score ranges are estimates used by this calculator and may differ from the official score set by the College Board."
    },
    {
      "type": "h2",
      "id": "score-distributions",
      "title": "AP Lang Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The **AP Lang score distribution** shows the percentage of students who received each AP score from 1 to 5."
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
            "28%"
          ],
          [
            "3",
            "32%"
          ],
          [
            "2",
            "15%"
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
      "text": "In 2026, 75% of students scored 3 or higher on the AP English Language exam."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apEnglishLanguageFaqs,
      "title": "Common Questions About AP English Language"
    }
  ]
};

export const apEnglishLanguageCalculator: CalculatorConfig = {
  "id": "ap-english-language",
  "title": "AP Lang Score Calculator",
  "shortName": "AP English Language",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "AP Lang Score Calculator 2027: Predict Your AP Score",
  "metaDescription": "Free AP Lang Score Calculator to estimate your AP English Language score. Enter your MCQ and FRQ scores to get an estimated 1–5 score.",
  "overview": "Estimate your AP English Language score from 1–5 with the AP Lang Calculator based on the 2027 exam format. Enter your MCQ and FRQ scores to see your estimated Composite Score out of 100.",
  "fields": [
    {
      "id": "mcq",
      "label": "Section I: Multiple Choice Questions (Reading & Writing)",
      "sublabel": "45 questions (60 minutes, 45% of exam score)",
      "min": 0,
      "max": 45,
      "defaultValue": 34,
      "unit": "/ 45"
    },
    {
      "id": "frq_synthesis",
      "label": "Section II Question 1: Synthesis Essay",
      "sublabel": "6 points analytic rubric",
      "min": 0,
      "max": 6,
      "defaultValue": 4,
      "unit": "/ 6"
    },
    {
      "id": "frq_rhetorical",
      "label": "Section II Question 2: Rhetorical Analysis Essay",
      "sublabel": "6 points analytic rubric",
      "min": 0,
      "max": 6,
      "defaultValue": 4,
      "unit": "/ 6"
    },
    {
      "id": "frq_argument",
      "label": "Section II Question 3: Argument Essay",
      "sublabel": "6 points analytic rubric",
      "min": 0,
      "max": 6,
      "defaultValue": 4,
      "unit": "/ 6"
    }
  ],
  "relatedCalculatorIds": [
    "ap-english-literature",
    "ap-us-history",
    "ap-world-history",
    "ap-human-geography"
  ],
  "isPopular": true
,
  calculate: (inputs) => {
      const mcq = Math.min(45, Math.max(0, inputs.mcq || 0));
      const frq1 = Math.min(6, Math.max(0, inputs.frq_synthesis || 0));
      const frq2 = Math.min(6, Math.max(0, inputs.frq_rhetorical || 0));
      const frq3 = Math.min(6, Math.max(0, inputs.frq_argument || 0));
      const totalFrq = frq1 + frq2 + frq3;

      // Section 1: 45 MCQs = 45 points (45%)
      const mcqWeighted = mcq;
      // Section 2: 18 raw points * (55 / 18 = 3.0556) = 55 points (55%)
      const frqWeighted = Math.round((totalFrq / 18) * 55 * 10) / 10;
      const composite = Math.round((mcqWeighted + frqWeighted) * 10) / 10;

      let score = 1;
      let status = 'No Recommendation';
      let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'rose';
      let percentile = '~25th Percentile';

      if (composite >= 72) {
        score = 5;
        status = 'Extremely Well Qualified';
        badgeColor = 'emerald';
        percentile = 'Top ~10% (90th+ Percentile)';
      } else if (composite >= 59) {
        score = 4;
        status = 'Well Qualified';
        badgeColor = 'blue';
        percentile = '~65th-89th Percentile';
      } else if (composite >= 46) {
        score = 3;
        status = 'Qualified (College Credit Eligible)';
        badgeColor = 'amber';
        percentile = '~42nd-64th Percentile';
      } else if (composite >= 33) {
        score = 2;
        status = 'Possibly Qualified';
        badgeColor = 'rose';
        percentile = '~20th-41st Percentile';
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
        summaryNote: `Your composite score is ${composite.toFixed(1)} / 100. Section I contributed ${mcqWeighted} pts and Section II essays contributed ${frqWeighted} pts.`,
        subscores: [
          { label: 'MCQ Contribution (45%)', value: `${mcqWeighted} pts`, max: 45, percent: Math.round((mcqWeighted / 45) * 100) },
          { label: 'Essays Contribution (55%)', value: `${frqWeighted} pts`, max: 55, percent: Math.round((frqWeighted / 55) * 100) },
          { label: 'Raw Essay Total', value: `${totalFrq} / 18` }
        ]
      };
    },
  faqs: apEnglishLanguageFaqs,
  seoArticle: apEnglishLanguageSeoArticle
};

export default apEnglishLanguageCalculator;
