import { CalculatorConfig, CalculatorFaq, CalculatorResult, SeoArticle } from '../../types';

export const marksPercentageFaqs: CalculatorFaq[] = [
  {
    "question": "What is the percentage of 300 marks out of 600?",
    "answer": "The percentage of 300 marks out of 600 is 50%. You can calculate it using the formula **(300 ÷ 600) × 100 = 50%**. So, if the total marks are 600 and you score 300 marks, your percentage is 50%."
  },
  {
    "question": "How to calculate percentage of marks of class 10th?",
    "answer": "To calculate your Class 10th percentage, add the marks you obtained in all subjects and then add the maximum marks for those subjects. After that, use the formula **(Obtained Marks ÷ Total Marks) × 100** to get your percentage. You can use the same formula to calculate your percentage for any exam."
  }
];

export const marksPercentageSeoArticle: SeoArticle = {
  "calculatorId": "marks-percentage",
  "title": "Marks Percentage Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is the Marks Percentage Calculator?"
    },
    {
      "id": "how-to-calculate",
      "label": "How to Calculate Percentage of Marks"
    },
    {
      "id": "10th-12th-calculators",
      "label": "10th & 12th Percentage Calculators"
    },
    {
      "id": "why-use",
      "label": "Why use the Marks Percentage Calculator"
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
      "title": "What is the Marks Percentage Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **Marks Percentage Calculator** converts your marks into percentage based on the total marks.",
        "As soon as the results are announced, one of the first questions students have is, **“What will my percentage be?”**  Instead of calculating it manually with a pen and paper, just enter your marks in the Marks Percentage Calculator and get your percentage in seconds. It’s a free, simple tool that saves time and helps avoid calculation mistakes.",
        "Let’s understand how to calculate percentage and how this tool can make the process easier."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-calculate",
      "title": "How to Calculate Percentage of Marks"
    },
    {
      "type": "paragraph",
      "text": "There is a simple formula for calculating percentages. Once you learn it, you can use it whenever you need to calculate percentage."
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Percentage = (Obtained Marks ÷ Total Marks) × 100"
    },
    {
      "type": "paragraph",
      "text": "You can use this formula to calculate your percentage for any class, exam, or subject. You only need two things: your obtained marks and the total marks."
    },
    {
      "type": "paragraph",
      "text": "**Example:**"
    },
    {
      "type": "paragraph",
      "text": "Suppose the total marks are 500 and you score 425."
    },
    {
      "type": "formula",
      "formula": "Percentage = (425 ÷ 500) × 100 = 85%"
    },
    {
      "type": "paragraph",
      "text": "That’s all you need to know about how to calculate percentage. For a quick and easy calculation, you can use our **Marks to Percentage Calculator** instead of doing it manually. It helps you get your percentage in seconds."
    },
    {
      "type": "h2",
      "id": "10th-12th-calculators",
      "title": "10th & 12th Percentage Calculators"
    },
    {
      "type": "h3",
      "id": "10th-calculator",
      "title": "10th Percentage Calculator"
    },
    {
      "type": "paragraph",
      "text": "After your Class 10 results are out, you may want to check your overall percentage. Just enter your marks in the **10th Percentage Calculator**, and it will calculate your percentage for you."
    },
    {
      "type": "h3",
      "id": "12th-calculator",
      "title": "12th Percentage Calculator"
    },
    {
      "type": "paragraph",
      "text": "If you’ve completed Class 12 and want to check your percentage, the **12th Percentage Calculator** can help. Enter your marks for the subjects you want to include, whether you’re calculating your best 4, best 5, or overall percentage."
    },
    {
      "type": "h2",
      "id": "why-use",
      "title": "Why use the Marks Percentage Calculator"
    },
    {
      "type": "bulletList",
      "items": [
        "Get your percentage instantly without doing manual calculations.",
        "The chances of making calculation mistakes are reduced.",
        "Use it easily on both your mobile phone and laptop.",
        "It’s completely free to use, with no charges.",
        "Useful for calculating percentages for Class 10, Class 12, and other exams."
      ]
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions"
    },
    {
      "type": "faqs",
      "items": marksPercentageFaqs
    }
  ]
};

export const marksPercentageCalculator: CalculatorConfig = {
  "id": "marks-percentage",
  "title": "Marks Percentage Calculator",
  "shortName": "Marks Percentage",
  "category": "academic",
  "categoryLabel": "Academic Tools",
  "yearFormat": "CBSE, ICSE & University Standard",
  "seoTitle": "Marks Percentage Calculator: Check Your Result in Seconds",
  "metaDescription": "Calculate your percentage in seconds with our free Marks Percentage Calculator. Enter your marks, get an accurate result. Try now!",
  "overview": "Enter your marks and total marks for each subject in the Marks Percentage Calculator to calculate your overall percentage and division.",
  "cardDescription": "Calculate marks percentage and academic division from total marks.",
  "fields": [
    {
      "id": "marksObtained",
      "label": "Total Marks Obtained",
      "sublabel": "Sum of marks earned across all subjects",
      "min": 0,
      "max": 100000,
      "defaultValue": 442
    },
    {
      "id": "totalMarks",
      "label": "Total Maximum Marks Possible",
      "sublabel": "Maximum marks possible across all subjects",
      "min": 1,
      "max": 100000,
      "defaultValue": 500
    }
  ],
  "relatedCalculatorIds": [
    "attendance",
    "gre"
  ]
,
  calculate: (inputs: Record<string, number>): CalculatorResult => {
      const marksObtained = inputs.marksObtained ?? 442;
      const totalMarks = inputs.totalMarks ?? 500;

      if (marksObtained < 0) {
        return {
          error: 'Marks obtained cannot be negative.',
          mainScore: '—',
          mainScoreLabel: 'Marks Percentage (%)',
          qualificationStatus: 'Invalid Score',
          qualificationBadgeColor: 'rose',
          hideStatsGrid: true,
          isEstimated: false,
          subscores: [],
          summaryNote: 'Marks obtained cannot be negative.'
        };
      }

      if (totalMarks <= 0) {
        return {
          error: 'Total maximum marks must be greater than 0.',
          mainScore: '—',
          mainScoreLabel: 'Marks Percentage (%)',
          qualificationStatus: 'Invalid Score',
          qualificationBadgeColor: 'rose',
          hideStatsGrid: true,
          isEstimated: false,
          subscores: [],
          summaryNote: 'Total maximum marks must be greater than 0.'
        };
      }

      if (marksObtained > totalMarks) {
        return {
          error: 'Marks obtained cannot be greater than maximum marks possible.',
          mainScore: '—',
          mainScoreLabel: 'Marks Percentage (%)',
          qualificationStatus: 'Invalid Score',
          qualificationBadgeColor: 'rose',
          hideStatsGrid: true,
          isEstimated: false,
          subscores: [],
          summaryNote: 'Marks obtained cannot be greater than maximum marks possible.'
        };
      }

      const percentage = Math.round((marksObtained / totalMarks) * 10000) / 100;

      let division = 'Third Division / Pass Class';
      let badgeColor: CalculatorResult['qualificationBadgeColor'] = 'rose';

      if (percentage >= 75) {
        division = 'First Class with Distinction (Distinction)';
        badgeColor = 'emerald';
      } else if (percentage >= 60) {
        division = 'First Division (First Class)';
        badgeColor = 'blue';
      } else if (percentage >= 50) {
        division = 'Second Division (Second Class)';
        badgeColor = 'amber';
      } else if (percentage >= 35) {
        division = 'Third Division (Pass)';
        badgeColor = 'amber';
      } else {
        division = 'Fail / Remediate';
        badgeColor = 'rose';
      }

      return {
        mainScore: percentage,
        mainScoreLabel: 'Marks Percentage (%)',
        qualificationStatus: division,
        qualificationBadgeColor: badgeColor,
        hideStatsGrid: true,
        isEstimated: false,
        subscores: [
          { label: 'Academic Standing / Division', value: division },
          { label: 'Total Marks Summary', value: `${marksObtained} / ${totalMarks} marks` }
        ],
        summaryNote: `Your score of ${marksObtained}/${totalMarks} converts to ${percentage.toFixed(2)}% (${division}).`
      };
    },
  faqs: marksPercentageFaqs,
  seoArticle: marksPercentageSeoArticle
};

export default marksPercentageCalculator;
