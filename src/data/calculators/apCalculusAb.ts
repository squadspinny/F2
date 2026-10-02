import { CalculatorConfig, CalculatorFaq, SeoArticle } from '../../types';

export const apCalculusAbFaqs: CalculatorFaq[] = [
  {
    "question": "What percentage is a 5 in AP Calc AB?",
    "answer": "There is no fixed percentage for a 5. The score can change from year to year. You can enter your MCQ and FRQ points into the **AP Calculus AB Score Calculator** to get an estimated score."
  },
  {
    "question": "What percent is a 4 on AP Calculus AB?",
    "answer": "There is no exact percentage that always gives you a 4. The score ranges can change from year to year. Use the **Ap Calculus AB Score Calculator** to estimate your score from your MCQ and FRQ points."
  },
  {
    "question": "How is AP Calc AB graded?",
    "answer": "AP Calculus AB has two sections: multiple-choice and free-response. Your points from both sections are combined to get your overall score. This is then used to give you an AP score from 1 to 5."
  },
  {
    "question": "Is a 4 on AP Calc AB good?",
    "answer": "Yes, a 4 is a good AP score. It may earn you college credit or placement, but this depends on the college or university you choose."
  },
  {
    "question": "What is the AP Calculus AB score distribution?",
    "answer": "The AP Calculus AB score distribution shows how many students received each score from 1 to 5. The percentages can change each year, so it is best to check the distribution for the specific exam year."
  }
];

export const apCalculusAbSeoArticle: SeoArticle = {
  "calculatorId": "ap-calculus-ab",
  "title": "AP Calc AB Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the AP Calc AB Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use the AP Calc AB Score Calculator"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the AP Calc AB Score Calculator Work?"
    },
    {
      "id": "score-ranges",
      "label": "Estimated AP Calcs AB Score Ranges"
    },
    {
      "id": "score-distributions",
      "label": "AP Calc AB Score Distributions"
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
      "title": "What is the AP Calc AB Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AP Calc AB score calculator** is a free tool that helps students estimate their AP score based on their performance in the multiple-choice (MCQ) and free-response (FRQ) sections.",
        "The **2027 AP Calculus AB exam** will consist of 42 multiple-choice questions and 6 free-response questions. The exam lasts 3 hours and 10 minutes, with both sections carrying equal weight of 50%."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use the AP Calc AB Score Calculator"
    },
    {
      "type": "paragraph",
      "text": "It's quite simple to use the **AP Calc AB Score Calc**. Follow these steps:"
    },
    {
      "type": "orderedList",
      "items": [
        "Enter your correct answers for Part A (29 questions) and Part B (13 questions) for a total out of 42.",
        "Enter your raw points scored on each of the 6 Free-Response Questions, each scored out of 9 points for a maximum of 54 points.",
        "The tool automatically adds your weighted MCQ and FRQ scores (50% each) to calculate your composite score out of 100, providing your predicted AP score from 1 to 5."
      ]
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "To understand your composite score, it helps to know how the exam time, question types, and section weightings are divided:"
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
            "Section I Part A",
            "29 Questions",
            "62 Minutes",
            "34.5% of Score"
          ],
          [
            "Section I Part B",
            "13 Questions",
            "38 Minutes",
            "15.5% of Score"
          ],
          [
            "Section II Part A",
            "2 Questions (18 pts)",
            "30 Minutes",
            "16.7% of Score"
          ],
          [
            "Section II Part B",
            "4 Questions (36 pts)",
            "60 Minutes",
            "33.3% of Score"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "**Note**: Section I has 42 MCQs: 29 in Part A and 13 in Part B. Section II has 6 FRQs: 2 in Part A and 4 in Part B."
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the AP Calc AB Score Calculator Work?"
    },
    {
      "type": "paragraph",
      "text": "The **AP Calc AB Score Calculator** adds your multiple-choice and free-response results to estimate your overall AP score."
    },
    {
      "type": "h3",
      "title": "Section I: Multiple-Choice Questions"
    },
    {
      "type": "paragraph",
      "text": "The AP Calculus AB multiple-choice section has 42 questions. Your correct answers from Part A and Part B are combined to get your total MCQ score out of 42."
    },
    {
      "type": "paragraph",
      "text": "Now the calculator converts your MCQ score to a maximum of 50 points using:"
    },
    {
      "type": "formula",
      "formula": "Estimated MCQ Score = (MCQ Score ÷ 42) × 50"
    },
    {
      "type": "h3",
      "title": "Section II: Free-Response Questions"
    },
    {
      "type": "paragraph",
      "text": "The Free-Response section has 6 questions. Each question is scored out of 9 points, giving you a maximum of 54 raw points."
    },
    {
      "type": "paragraph",
      "text": "Now the calculator converts your FRQ score to a maximum of 50 points using:"
    },
    {
      "type": "formula",
      "formula": "Estimated FRQ Score = (FRQ Score ÷ 54) × 50"
    },
    {
      "type": "h3",
      "title": "AP Calculus AB Composite Score"
    },
    {
      "type": "paragraph",
      "text": "Now the calculator adds the weighted scores from both sections to get your estimated composite score out of 100."
    },
    {
      "type": "formula",
      "formula": "Composite Score = MCQ Score + FRQ Score"
    },
    {
      "type": "paragraph",
      "text": "Your composite score is then compared with the estimated AP Calculus AB score ranges to give you an estimated AP score from **1 to 5**."
    },
    {
      "type": "h2",
      "id": "score-ranges",
      "title": "Estimated AP Calc AB Score Ranges"
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
            "63 – 100 Composite"
          ],
          [
            "4",
            "Well Qualified",
            "50 – 62.9 Composite"
          ],
          [
            "3",
            "Qualified",
            "38 – 49.9 Composite"
          ],
          [
            "2",
            "Possibly Qualified",
            "27 – 37.9 Composite"
          ],
          [
            "1",
            "No Recommendation",
            "0 – 26.9 Composite"
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
      "title": "AP Calc AB Score Distributions"
    },
    {
      "type": "paragraph",
      "text": "The official **AP Calculus AB score distribution** shows the percentage of students who earned each AP score on the 2026 exam:"
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
            "20%"
          ],
          [
            "4",
            "28%"
          ],
          [
            "3",
            "17%"
          ],
          [
            "2",
            "24%"
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
      "text": "In 2026, 65% of students scored 3 or higher."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": apCalculusAbFaqs,
      "title": "Common Questions About AP Calculus AB"
    }
  ]
};

export const apCalculusAbCalculator: CalculatorConfig = {
  "id": "ap-calculus-ab",
  "title": "AP Calc AB Score Calculator",
  "shortName": "AP Calculus AB",
  "category": "ap",
  "categoryLabel": "AP Exams",
  "yearFormat": "2027 AP Exam Structure",
  "seoTitle": "AP Calc AB Score Calculator 2027: Calculate Your AP Score",
  "metaDescription": "Free AP Calc AB Score Calculator: Enter your MCQ and FRQ points to estimate your 1–5 score. Try the AP Calculus AB Score Calculator now.",
  "overview": "The AP Calc AB exam has 42 multiple-choice questions and 6 free-response questions, with each section worth 50% of the exam score. Enter your scores in our calculator to get an estimate of your AP score from 1 to 5.",
  "fields": [
    {
      "id": "mcq_a",
      "label": "Section I Part A: Multiple Choice (No Calculator)",
      "sublabel": "29 questions (62 minutes)",
      "min": 0,
      "max": 29,
      "defaultValue": 22,
      "unit": "/ 29"
    },
    {
      "id": "mcq_b",
      "label": "Section I Part B: Multiple Choice (Calculator Required)",
      "sublabel": "13 questions (38 minutes)",
      "min": 0,
      "max": 13,
      "defaultValue": 10,
      "unit": "/ 13"
    },
    {
      "id": "frq_1",
      "label": "Section II Part A: Free Response 1 (Calculator Required)",
      "sublabel": "9 points maximum",
      "min": 0,
      "max": 9,
      "defaultValue": 7,
      "unit": "/ 9"
    },
    {
      "id": "frq_2",
      "label": "Section II Part A: Free Response 2 (Calculator Required)",
      "sublabel": "9 points maximum",
      "min": 0,
      "max": 9,
      "defaultValue": 7,
      "unit": "/ 9"
    },
    {
      "id": "frq_3",
      "label": "Section II Part B: Free Response 3 (No Calculator)",
      "sublabel": "9 points maximum",
      "min": 0,
      "max": 9,
      "defaultValue": 6,
      "unit": "/ 9"
    },
    {
      "id": "frq_4",
      "label": "Section II Part B: Free Response 4 (No Calculator)",
      "sublabel": "9 points maximum",
      "min": 0,
      "max": 9,
      "defaultValue": 6,
      "unit": "/ 9"
    },
    {
      "id": "frq_5",
      "label": "Section II Part B: Free Response 5 (No Calculator)",
      "sublabel": "9 points maximum",
      "min": 0,
      "max": 9,
      "defaultValue": 6,
      "unit": "/ 9"
    },
    {
      "id": "frq_6",
      "label": "Section II Part B: Free Response 6 (No Calculator)",
      "sublabel": "9 points maximum",
      "min": 0,
      "max": 9,
      "defaultValue": 6,
      "unit": "/ 9"
    }
  ],
  "relatedCalculatorIds": [
    "ap-calculus-bc",
    "ap-physics",
    "ap-statistics",
    "ap-precalculus"
  ],
  "isPopular": true
,
  calculate: (inputs) => { 
      // Section I - Multiple Choice
      const mcqA = Math.min(29, Math.max(0, inputs.mcq_a || 0)); 
      const mcqB = Math.min(13, Math.max(0, inputs.mcq_b || 0)); 
      const totalMcq = mcqA + mcqB; 

      // Section II - Free Response
      const frq1 = Math.min(9, Math.max(0, inputs.frq_1 || 0)); 
      const frq2 = Math.min(9, Math.max(0, inputs.frq_2 || 0)); 
      const frq3 = Math.min(9, Math.max(0, inputs.frq_3 || 0)); 
      const frq4 = Math.min(9, Math.max(0, inputs.frq_4 || 0)); 
      const frq5 = Math.min(9, Math.max(0, inputs.frq_5 || 0)); 
      const frq6 = Math.min(9, Math.max(0, inputs.frq_6 || 0)); 

      const totalFrq = frq1 + frq2 + frq3 + frq4 + frq5 + frq6; 

      // Section I: 42 MCQs = 50% of composite score
      const mcqWeighted = Math.round((totalMcq / 42) * 50 * 10) / 10; 

      // Section II: 54 FRQ points = 50% of composite score
      const frqWeighted = Math.round((totalFrq / 54) * 50 * 10) / 10; 

      // Total composite score out of 100
      const composite = Math.round((mcqWeighted + frqWeighted) * 10) / 10; 

      let score = 1; 
      let status = 'No Recommendation'; 
      let badgeColor: 'emerald' | 'blue' | 'amber' | 'rose' = 'rose'; 
      let percentile = '~25th Percentile'; 

      if (composite >= 63) { 
        score = 5; 
        status = 'Extremely Well Qualified'; 
        badgeColor = 'emerald'; 
        percentile = 'Top ~20% (80th+ Percentile)'; 
      } else if (composite >= 50) { 
        score = 4; 
        status = 'Well Qualified'; 
        badgeColor = 'blue'; 
        percentile = '~60th-79th Percentile'; 
      } else if (composite >= 38) { 
        score = 3; 
        status = 'Qualified (College Credit Eligible)'; 
        badgeColor = 'amber'; 
        percentile = '~40th-59th Percentile'; 
      } else if (composite >= 27) { 
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
        summaryNote: `Your composite score is ${composite.toFixed(1)} / 100. A composite of 63 or higher is estimated to qualify for a 5.`, 
        subscores: [ 
          { 
            label: 'MCQ Weighted Points', 
            value: `${mcqWeighted.toFixed(1)} pts`, 
            max: 50, 
            percent: Math.round((mcqWeighted / 50) * 100) 
          }, 
          { 
            label: 'FRQ Weighted Points', 
            value: `${frqWeighted.toFixed(1)} pts`, 
            max: 50, 
            percent: Math.round((frqWeighted / 50) * 100) 
          }, 
          { 
            label: 'Total Raw MCQs Correct', 
            value: `${totalMcq} / 42` 
          }, 
          { 
            label: 'Total Raw FRQ Points', 
            value: `${totalFrq} / 54` 
          } 
        ] 
      }; 
    },
  faqs: apCalculusAbFaqs,
  seoArticle: apCalculusAbSeoArticle
};

export default apCalculusAbCalculator;
