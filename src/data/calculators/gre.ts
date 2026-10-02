import { CalculatorConfig, CalculatorFaq, SeoArticle, SubScoreItem } from '../../types';

export const greFaqs: CalculatorFaq[] = [
  {
    "question": "How do I calculate my GRE score?",
    "answer": "Your GRE score is based on your Verbal Reasoning and Quantitative Reasoning scores. Each section is scored from 130 to 170. Add your Verbal and Quant scores to get your total GRE score, which ranges from 260 to 340."
  },
  {
    "question": "How to calculate GRE score from raw score?",
    "answer": "Your GRE raw score is the number of questions you answer correctly. However, the raw score is not directly converted into your final GRE score because GRE scores are reported on a 130-170 scaled score for each section."
  },
  {
    "question": "How to calculate GRE score from practice test?",
    "answer": "To estimate your GRE score from practice test, first count the correct answers in the Verbal and Quantitative sections. Convert each raw score to an estimated scaled score, then add the two section scores."
  },
  {
    "question": "What is a good GRE score out of 340?",
    "answer": "A good GRE score depends on the program and university you are applying. The total GRE score ranges from 260 to 340, with Verbal and Quant each scored from 130 to 170."
  },
  {
    "question": "What score is 80% on GRE?",
    "answer": "The GRE does not use an 80% score because it is reported using scaled scores rather than percentages. Verbal and Quant scores range from 130 to 170, and the total score ranges from 260 to 340."
  }
];

export const greSeoArticle: SeoArticle = {
  "calculatorId": "gre",
  "title": "GRE Score Calculator",
  "tableOfContents": [
    {
      "id": "what-is",
      "label": "What is a GRE Score Calculator?"
    },
    {
      "id": "how-to-use",
      "label": "How to Use a GRE Score Calculator?"
    },
    {
      "id": "exam-structure",
      "label": "Exam Structure & Section Specifications"
    },
    {
      "id": "how-it-works",
      "label": "How Does the GRE Score Calculator Work?"
    },
    {
      "id": "scoring-scale",
      "label": "Official GRE General Test Scoring Scale"
    },
    {
      "id": "faqs",
      "label": "Frequently Asked Questions (FAQ)"
    }
  ],
  "blocks": [
    {
      "type": "h2",
      "id": "what-is",
      "title": "What is a GRE Score Calculator?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "**GRE Score Calculator** is an online tool that gives you an estimated GRE score based on your practice test results.",
        "All you need to do is enter the number of questions you answered correctly in the Verbal and Quantitative sections. The calculator then gives you an estimated scaled score based on your performance.",
        "The GRE total score is made up of your Verbal and Quantitative scores:"
      ]
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Verbal Score + Quantitative Score = GRE Total Score"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The **AWA score is not added to this total**. Your Analytical Writing score is reported separately.",
        "This Calculator is useful when you are taking practice tests because it lets you quickly see what your current score could look like."
      ]
    },
    {
      "type": "h2",
      "id": "how-to-use",
      "title": "How to Use a GRE Score Calculator?"
    },
    {
      "type": "paragraph",
      "text": "Using the GRE Score Calculator is very easy:"
    },
    {
      "type": "h3",
      "title": "Step 1: Enter your Verbal Section 1 score"
    },
    {
      "type": "paragraph",
      "text": "The first Verbal Reasoning section has 12 questions. Enter the number of questions you answered correctly."
    },
    {
      "type": "h3",
      "title": "Step 2: Enter your Verbal Section 2 score"
    },
    {
      "type": "paragraph",
      "text": "The second Verbal Reasoning section has 15 questions. Enter the number of correct answers."
    },
    {
      "type": "h3",
      "title": "Step 3: Enter your Quant Section 1 score"
    },
    {
      "type": "paragraph",
      "text": "The first Quantitative Reasoning section has 12 questions. Enter the number of questions you answered correctly."
    },
    {
      "type": "h3",
      "title": "Step 4: Enter your Quant Section 2 score"
    },
    {
      "type": "paragraph",
      "text": "The second Quantitative Reasoning section has 15 questions. Enter your correct answers."
    },
    {
      "type": "h3",
      "title": "Step 5: Add your AWA score"
    },
    {
      "type": "paragraph",
      "text": "If you have a practice score for Analytical Writing, you can enter it separately. The AWA score ranges from 0 to 6."
    },
    {
      "type": "paragraph",
      "text": "Once you enter your scores, the calculator will automatically show your **estimated GRE score**."
    },
    {
      "type": "h2",
      "id": "exam-structure",
      "title": "Exam Structure & Section Specifications"
    },
    {
      "type": "paragraph",
      "text": "The current **GRE General Test** consists of Verbal Reasoning, Quantitative Reasoning, and Analytical Writing. Both Verbal and Quantitative Reasoning are section-level adaptive."
    },
    {
      "type": "table",
      "id": "exam-structure-table",
      "data": {
        "headers": [
          "Section",
          "Part 1",
          "Part 2",
          "Total",
          "Total Time"
        ],
        "rows": [
          [
            "Verbal Reasoning",
            "12 Questions – 18 min",
            "15 Questions – 23 min",
            "27 Questions",
            "41 min"
          ],
          [
            "Quantitative Reasoning",
            "12 Questions – 21 min",
            "15 Questions – 26 min",
            "27 Questions",
            "47 min"
          ],
          [
            "Analytical Writing",
            "1 Analyze an Issue Task – 30 min",
            "—",
            "1 Task",
            "30 min"
          ]
        ]
      }
    },
    {
      "type": "h2",
      "id": "how-it-works",
      "title": "How Does the GRE Score Calculator Work?"
    },
    {
      "type": "paragraphs",
      "texts": [
        "The GRE General Test uses section-level adaptive testing for Verbal Reasoning and Quantitative Reasoning. In simple terms, your performance in the first section helps determine the difficulty of the second section.",
        "The calculator uses your correct answers from Section 1 and Section 2 to estimate your scaled GRE score."
      ]
    },
    {
      "type": "h3",
      "title": "Estimated Verbal Reasoning Score"
    },
    {
      "type": "paragraphs",
      "texts": [
        "You answer 12 questions in Verbal Section 1 and 15 questions in Section 2.",
        "The calculator looks at your correct answers in both sections and uses an adaptive scoring model to estimate your Verbal Reasoning score on the 130–170 scale."
      ]
    },
    {
      "type": "h3",
      "title": "Estimated Quantitative Reasoning Score"
    },
    {
      "type": "paragraphs",
      "texts": [
        "Quantitative Reasoning also has 12 questions in Section 1 and 15 questions in Section 2.",
        "The calculator uses your correct answers from both sections to estimate your Quantitative Reasoning score on the 130–170 scale."
      ]
    },
    {
      "type": "h3",
      "title": "Estimated Total GRE Score"
    },
    {
      "type": "paragraph",
      "text": "Your total GRE score is based only on your Verbal and Quantitative scores. Adding these two scores gives you a total between 260 and 340."
    },
    {
      "type": "formula",
      "title": "",
      "formula": "Estimated GRE Score = Estimated Verbal Score + Estimated Quant Score"
    },
    {
      "type": "paragraph",
      "text": "**Note: Analytical Writing (AWA) is scored separately on a 0–6 scale. It is not added to the 260–340 Verbal + Quantitative total.**"
    },
    {
      "type": "h2",
      "id": "scoring-scale",
      "title": "Official GRE General Test Scoring Scale"
    },
    {
      "type": "paragraph",
      "text": "According to the official ETS scoring scale:"
    },
    {
      "type": "table",
      "id": "scoring-scale-table",
      "data": {
        "headers": [
          "GRE Section",
          "Official Score Range"
        ],
        "rows": [
          [
            "Verbal Reasoning",
            "130–170"
          ],
          [
            "Quantitative Reasoning",
            "130–170"
          ],
          [
            "Analytical Writing",
            "0–6"
          ]
        ]
      }
    },
    {
      "type": "paragraph",
      "text": "Verbal and Quantitative scores are reported in 1-point increments, while Analytical Writing scores are reported in 0.5-point increments."
    },
    {
      "type": "h2",
      "id": "faqs",
      "title": "Frequently Asked Questions (FAQ)"
    },
    {
      "type": "faqs",
      "items": greFaqs
    }
  ]
};

export const greCalculator: CalculatorConfig = {
  "id": "gre",
  "title": "GRE Score Calculator",
  "shortName": "GRE General Test",
  "category": "grad",
  "categoryLabel": "Graduate School",
  "yearFormat": "Shorter GRE Format",
  "seoTitle": "GRE Score Calculator: Calculate Your Verbal & Quant Scores",
  "metaDescription": "Free GRE Score Calculator to estimate your Verbal, Quant, and total GRE score from your practice test. Try it now!",
  "overview": "Free GRE Score Calculator to estimate your score from your practice test. Enter your Verbal and Quant correct answers, add your AWA score if you have one, and get an estimated score on the 260-340 scale.",
  "cardDescription": "Estimate your 260-340 GRE score across Verbal, Quantitative, and Analytical Writing sections.",
  "fields": [
    {
      "id": "verbal_sec1",
      "label": "Section 1",
      "sublabel": "12 questions (18 minutes)",
      "min": 0,
      "max": 12,
      "defaultValue": 8,
      "unit": "/ 12",
      "group": "Verbal Reasoning (27 Questions Total)",
      "groupTotalMax": 27,
      "groupTotalLabel": "Verbal Raw Total"
    },
    {
      "id": "verbal_sec2",
      "label": "Section 2",
      "sublabel": "15 questions (23 minutes)",
      "min": 0,
      "max": 15,
      "defaultValue": 10,
      "unit": "/ 15",
      "group": "Verbal Reasoning (27 Questions Total)",
      "groupTotalMax": 27,
      "groupTotalLabel": "Verbal Raw Total"
    },
    {
      "id": "quant_sec1",
      "label": "Section 1",
      "sublabel": "12 questions (21 minutes)",
      "min": 0,
      "max": 12,
      "defaultValue": 9,
      "unit": "/ 12",
      "group": "Quantitative Reasoning (27 Questions Total)",
      "groupTotalMax": 27,
      "groupTotalLabel": "Quant Raw Total"
    },
    {
      "id": "quant_sec2",
      "label": "Section 2",
      "sublabel": "15 questions (26 minutes)",
      "min": 0,
      "max": 15,
      "defaultValue": 11,
      "unit": "/ 15",
      "group": "Quantitative Reasoning (27 Questions Total)",
      "groupTotalMax": 27,
      "groupTotalLabel": "Quant Raw Total"
    },
    {
      "id": "awa_score",
      "label": "Analytical Writing (AWA)",
      "sublabel": "Optional: 1 \"Analyze an Issue\" essay (0.0 to 6.0 in 0.5 increments)",
      "min": 0,
      "max": 6,
      "step": 0.5,
      "defaultValue": 4,
      "unit": "/ 6.0",
      "group": "Analytical Writing (Optional)",
      "optional": true
    }
  ],
  "relatedCalculatorIds": [
    "marks-percentage",
    "attendance",
    "ap-calculus-ab"
  ],
  "isPopular": true
,
  calculate: (inputs) => {
      const v1 = inputs.verbal_sec1 !== undefined ? Math.min(12, Math.max(0, inputs.verbal_sec1)) : 8;
      const v2 = inputs.verbal_sec2 !== undefined ? Math.min(15, Math.max(0, inputs.verbal_sec2)) : 10;
      const q1 = inputs.quant_sec1 !== undefined ? Math.min(12, Math.max(0, inputs.quant_sec1)) : 9;
      const q2 = inputs.quant_sec2 !== undefined ? Math.min(15, Math.max(0, inputs.quant_sec2)) : 11;

      // Section-level adaptive estimation for Verbal (130-170)
      const rawV = v1 + v2;
      let verbalScaled = 130;
      if (rawV === 27) {
        verbalScaled = 170;
      } else if (rawV > 0) {
        const vRoutingBonus = v1 >= 8 ? 2 : v1 <= 4 ? -2 : 0;
        const vBaseCurve: Record<number, number> = {
          1: 131, 2: 133, 3: 135, 4: 137, 5: 139,
          6: 140, 7: 142, 8: 143, 9: 145, 10: 146,
          11: 147, 12: 149, 13: 150, 14: 151, 15: 153,
          16: 154, 17: 156, 18: 157, 19: 159, 20: 160,
          21: 162, 22: 163, 23: 165, 24: 166, 25: 168,
          26: 169
        };
        const base = vBaseCurve[rawV] ?? (130 + Math.round((rawV / 27) * 40));
        verbalScaled = Math.min(170, Math.max(130, base + vRoutingBonus));
      }

      // Section-level adaptive estimation for Quantitative (130-170)
      const rawQ = q1 + q2;
      let quantScaled = 130;
      if (rawQ === 27) {
        quantScaled = 170;
      } else if (rawQ > 0) {
        const qRoutingBonus = q1 >= 8 ? 2 : q1 <= 4 ? -2 : 0;
        const qBaseCurve: Record<number, number> = {
          1: 131, 2: 132, 3: 134, 4: 136, 5: 138,
          6: 139, 7: 141, 8: 143, 9: 144, 10: 146,
          11: 147, 12: 149, 13: 150, 14: 152, 15: 153,
          16: 155, 17: 157, 18: 158, 19: 160, 20: 161,
          21: 163, 22: 164, 23: 166, 24: 167, 25: 168,
          26: 169
        };
        const base = qBaseCurve[rawQ] ?? (130 + Math.round((rawQ / 27) * 40));
        quantScaled = Math.min(170, Math.max(130, base + qRoutingBonus));
      }

      const totalGre = verbalScaled + quantScaled;

      // Analytical Writing (optional, not included in 260-340 total)
      const awaInput = inputs.awa_score;
      const isAwaProvided = typeof awaInput === 'number' && !isNaN(awaInput) && awaInput >= 0;
      const awaVal = isAwaProvided ? Math.min(6, Math.max(0, awaInput)) : null;

      const subscores: SubScoreItem[] = [
        { label: 'Estimated Verbal Reasoning', value: `${verbalScaled} / 170` },
        { label: 'Estimated Quantitative Reasoning', value: `${quantScaled} / 170` }
      ];

      if (awaVal !== null) {
        subscores.push({
          label: 'Analytical Writing',
          value: `${awaVal.toFixed(1)} / 6`
        });
      }

      const summaryNote = awaVal !== null
        ? `Estimated GRE Score: ${totalGre} / 340 (Estimated Verbal Reasoning: ${verbalScaled} / 170, Estimated Quantitative Reasoning: ${quantScaled} / 170, Analytical Writing: ${awaVal.toFixed(1)} / 6).`
        : `Estimated GRE Score: ${totalGre} / 340 (Estimated Verbal Reasoning: ${verbalScaled} / 170, Estimated Quantitative Reasoning: ${quantScaled} / 170).`;

      return {
        mainScore: `${totalGre}`,
        mainScoreLabel: 'Estimated GRE Score',
        maxScore: 340,
        qualificationStatus: '',
        qualificationBadgeColor: 'blue',
        hideStatsGrid: true,
        isEstimated: true,
        summaryNote,
        subscores
      };
    },
  faqs: greFaqs,
  seoArticle: greSeoArticle
};

export default greCalculator;
