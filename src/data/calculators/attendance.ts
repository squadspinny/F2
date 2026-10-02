import { CalculatorConfig, CalculatorFaq, CalculatorResult, SeoArticle } from '../../types';

export const attendanceFaqs: CalculatorFaq[] = [
  {
    question: 'What is the formula for attendance percentage?',
    answer: 'The formula is: Attendance Percentage = (Classes Attended ÷ Total Classes) × 100'
  },
  {
    question: 'How do I calculate attendance if I know the classes missed?',
    answer: 'First find the classes attended: Classes Attended = Total Classes − Classes Missed. Then use the attendance percentage formula.'
  },
  {
    question: 'How can I calculate 75% attendance?',
    answer: 'To have 75% attendance, your classes attended should be at least 75% of the total classes counted in your attendance record.'
  },
  {
    question: 'How can I calculate 80% attendance?',
    answer: 'For 80% attendance, you need to attend at least 80 out of every 100 classes counted.'
  },
  {
    question: 'Can I calculate attendance for a month?',
    answer: 'Yes. Use the total classes held during that month and the number of classes you attended during the same month.'
  },
  {
    question: 'Is an attendance calculator accurate?',
    answer: "An attendance calculator performs the calculation based on the numbers you enter. The result depends on the accuracy of your attendance data. Your school or college's official record may use its own attendance rules."
  }
];

export const attendanceSeoArticle: SeoArticle = {
  calculatorId: 'attendance',
  title: 'Attendance Calculator',
  tableOfContents: [
    {
      id: 'formula',
      label: 'Attendance Percentage Formula'
    },
    {
      id: 'step-by-step',
      label: 'How to Calculate Attendance Percentage Step by Step'
    },
    {
      id: 'monthly-attendance',
      label: 'How to Calculate Monthly Attendance'
    },
    {
      id: 'classes-missed',
      label: 'How to Find Classes You Missed'
    },
    {
      id: 'check-required',
      label: 'How to Check if You Meet Your Required Attendance'
    },
    {
      id: 'classes-can-miss',
      label: 'How Many Classes Can You Miss?'
    },
    {
      id: 'classes-needed',
      label: 'How Many Classes Do You Need to Attend?'
    },
    {
      id: 'examples',
      label: 'Attendance Calculation Examples'
    },
    {
      id: 'how-to-use',
      label: 'How to Use an Attendance Calculator'
    },
    {
      id: 'faqs',
      label: 'Frequently Asked Questions'
    },
    {
      id: 'conclusion',
      label: 'Conclusion'
    }
  ],
  blocks: [
    {
      type: 'paragraphs',
      texts: [
        'Knowing your attendance percentage is useful for students who want to check how regularly they are attending classes. It can also help you understand how many classes you have attended, how many you missed, and whether you are meeting your required attendance.',
        'The basic calculation is simple. You only need two numbers: classes attended and total classes.',
        'You can calculate it manually using the attendance percentage formula or use an attendance calculator to get the result quickly.'
      ]
    },
    {
      type: 'h2',
      id: 'formula',
      title: 'Attendance Percentage Formula'
    },
    {
      type: 'paragraphs',
      texts: [
        'The basic attendance percentage formula is:',
        'Attendance Percentage = (Classes Attended ÷ Total Classes) × 100',
        'For example, suppose you attended 45 classes out of 50 total classes.',
        'Attendance = (45 ÷ 50) × 100 = 90%',
        'So, your attendance percentage is 90%.'
      ]
    },
    {
      type: 'paragraph',
      text: 'Here:'
    },
    {
      type: 'bulletList',
      items: [
        'Classes Attended = Number of classes you attended',
        'Total Classes = Total number of classes held',
        'Classes Missed = Classes you did not attend'
      ]
    },
    {
      type: 'paragraphs',
      texts: [
        'You can also find the total number of classes using:',
        'Total Classes = Classes Attended + Classes Missed'
      ]
    },
    {
      type: 'h2',
      id: 'step-by-step',
      title: 'How to Calculate Attendance Percentage Step by Step'
    },
    {
      type: 'paragraph',
      text: 'If you want to know how to calculate attendance, follow these simple steps:'
    },
    {
      type: 'orderedList',
      items: [
        'Find your classes attended: Check your attendance record and find the number of classes you attended. For example: Classes attended = 42',
        'Find the total classes: Now check how many classes were held in total. Total classes = 50',
        'Apply the formula: Divide the classes attended by the total classes and multiply by 100. (42 ÷ 50) × 100 = 84%. Your attendance is 84%.'
      ]
    },
    {
      type: 'paragraph',
      text: 'This method works for daily, weekly, monthly, semester, or yearly attendance as long as you use the correct numbers.'
    },
    {
      type: 'h2',
      id: 'monthly-attendance',
      title: 'How to Calculate Monthly Attendance'
    },
    {
      type: 'paragraphs',
      texts: [
        'Monthly attendance is calculated using the classes held during that particular month.',
        'For example, imagine your college held 24 classes in September and you attended 20 of them.',
        'Monthly Attendance = (20 ÷ 24) × 100',
        'Your monthly attendance is 83.33%.',
        'If your timetable has different numbers of classes on different days, count the actual classes held rather than simply counting the number of days you went to college.',
        'For example, attending college for 20 days does not always mean you attended 20 classes. You may have had several classes each day.'
      ]
    },
    {
      type: 'h3',
      id: 'monthly-attendance-example',
      title: 'Monthly Attendance Example'
    },
    {
      type: 'table',
      id: 'monthly-attendance-table',
      data: {
        headers: ['Details', 'Number'],
        rows: [
          ['Total classes in the month', '24'],
          ['Classes attended', '20'],
          ['Classes missed', '4'],
          ['Attendance', '83.33%']
        ]
      }
    },
    {
      type: 'paragraph',
      text: 'For an accurate monthly percentage, use the attendance record maintained by your school or college.'
    },
    {
      type: 'h2',
      id: 'classes-missed',
      title: 'How to Find Classes You Missed'
    },
    {
      type: 'paragraphs',
      texts: [
        'If you know your total classes and classes attended, finding classes missed is easy.',
        'Classes Missed = Total Classes − Classes Attended',
        'For example:',
        'Total classes = 60',
        'Classes attended = 51',
        'So: 60 − 51 = 9 classes missed',
        'You missed 9 classes.',
        'This can be useful when you want to understand how many classes you have missed during a semester or month.'
      ]
    },
    {
      type: 'h2',
      id: 'check-required',
      title: 'How to Check if You Meet Your Required Attendance'
    },
    {
      type: 'paragraphs',
      texts: [
        'Some schools and colleges have a minimum attendance requirement. To check whether you meet it, compare your calculated percentage with the requirement given by your institution.',
        'For example, if your required attendance is 75% and your calculated attendance is 78%, your percentage is above that requirement.',
        'If your attendance is 72%, it is below a 75% requirement.',
        "The required percentage can vary between institutions, courses, and academic programs. Always check your own college or school's attendance rules for the exact requirement."
      ]
    },
    {
      type: 'h2',
      id: 'classes-can-miss',
      title: 'How Many Classes Can You Miss?'
    },
    {
      type: 'paragraphs',
      texts: [
        'The number of classes you can miss depends on your required attendance percentage and the total number of classes.',
        'For a 75% attendance requirement, you need to attend at least 75 out of every 100 classes.',
        'For example, if there are 40 total classes: 40 × 25% = 10',
        'So, up to 10 classes could be missed while maintaining exactly 75% attendance, assuming all 40 classes are included in the calculation.',
        'The actual number can change as more classes are added to your attendance record.'
      ]
    },
    {
      type: 'h3',
      id: 'eighty-percent-requirement',
      title: 'For an 80% Attendance Requirement'
    },
    {
      type: 'paragraphs',
      texts: [
        'With an 80% attendance requirement, you can miss up to 20% of the total classes.',
        'For example, out of 50 classes: 50 × 20% = 10 classes',
        'So, attending 40 out of 50 classes gives you exactly 80% attendance.'
      ]
    },
    {
      type: 'h2',
      id: 'classes-needed',
      title: 'How Many Classes Do You Need to Attend?'
    },
    {
      type: 'paragraphs',
      texts: [
        'If you know your current attendance and want to reach a target percentage, you can calculate how many upcoming classes you need to attend.',
        'Suppose you have:',
        '40 classes attended',
        '50 total classes',
        'Target attendance = 80%',
        'Let x be the number of additional classes you attend.',
        'Your new attendance would be:',
        '(40 + x) ÷ (50 + x) × 100 = 80%',
        'Solving this gives:',
        'x = 10',
        'So, you need to attend the next 10 classes to reach 80%, provided you do not miss any of them.',
        'This calculation is helpful when your current attendance is below the required percentage.'
      ]
    },
    {
      type: 'h2',
      id: 'examples',
      title: 'Attendance Calculation Examples'
    },
    {
      type: 'paragraph',
      text: 'Here are a few simple examples to show how attendance calculations work.'
    },
    {
      type: 'h3',
      id: 'example-1',
      title: 'Example 1: 90% Attendance'
    },
    {
      type: 'paragraphs',
      texts: [
        'You attended 45 classes out of 50.',
        '(45 ÷ 50) × 100 = 90%',
        'Your attendance is 90%.'
      ]
    },
    {
      type: 'h3',
      id: 'example-2',
      title: 'Example 2: 75% Attendance'
    },
    {
      type: 'paragraphs',
      texts: [
        'You attended 30 classes out of 40.',
        '(30 ÷ 40) × 100 = 75%',
        'Your attendance is 75%.'
      ]
    },
    {
      type: 'h3',
      id: 'example-3',
      title: 'Example 3: Finding Missed Classes'
    },
    {
      type: 'paragraphs',
      texts: [
        'You had 80 total classes and attended 68.',
        '80 − 68 = 12',
        'You missed 12 classes.'
      ]
    },
    {
      type: 'paragraph',
      text: 'These examples use the same basic attendance calculation, but they answer different questions you may have about your attendance record.'
    },
    {
      type: 'h2',
      id: 'how-to-use',
      title: 'How to Use an Attendance Calculator'
    },
    {
      type: 'paragraphs',
      texts: [
        'An attendance calculator can save time when you do not want to calculate the percentage manually.',
        'Usually, you only need to enter:'
      ]
    },
    {
      type: 'bulletList',
      items: [
        'Total classes',
        'Classes attended'
      ]
    },
    {
      type: 'paragraphs',
      texts: [
        'The calculator then calculates your attendance percentage.',
        'For example, if you enter:',
        'Total classes: 60',
        'Classes attended: 48',
        'The result is:',
        '(48 ÷ 60) × 100 = 80%',
        "An attendance calculator is useful for quickly checking your current percentage, but your school's or college's official attendance record should be used for any formal attendance decision."
      ]
    },
    {
      type: 'h2',
      id: 'faqs',
      title: 'Frequently Asked Questions'
    },
    {
      type: 'faqs',
      items: attendanceFaqs,
      title: 'Frequently Asked Questions'
    },
    {
      type: 'h2',
      id: 'conclusion',
      title: 'Conclusion'
    },
    {
      type: 'paragraphs',
      texts: [
        'Calculating attendance percentage is simple when you know your classes attended and total classes.',
        'Just use: Attendance Percentage = (Classes Attended ÷ Total Classes) × 100',
        'You can calculate it yourself or use an attendance calculator to get the result quickly. If you need to maintain a minimum percentage such as 75% or 80%, keep checking your attendance regularly so you know where you stand.'
      ]
    }
  ]
};

export const attendanceCalculator: CalculatorConfig = {
  id: 'attendance',
  title: 'Attendance Calculator',
  shortName: 'Attendance',
  category: 'academic',
  categoryLabel: 'Academic Tools',
  yearFormat: 'College & School Policy Standard',
  seoTitle: 'Attendance Calculator: Calculate Your Attendance % Online',
  metaDescription: 'Free Attendance Calculator to calculate your attendance percentage and find classes you can miss or need to attend.',
  overview: 'Free Attendance Calculator to calculate your attendance percentage online. Find your current attendance, classes you can miss, or classes you need to attend to reach your target.',
  cardDescription: 'Calculate attendance percentage, classes you can miss, and classes needed.',
  fields: [
    {
      id: 'totalClasses',
      label: 'Total Classes Conducted',
      sublabel: 'Total number of classes or sessions held so far',
      min: 1,
      max: 10000,
      defaultValue: 40
    },
    {
      id: 'classesAttended',
      label: 'Classes Attended',
      sublabel: 'Number of classes or sessions you attended',
      min: 0,
      max: 10000,
      defaultValue: 32
    },
    {
      id: 'targetPercentage',
      label: 'Target Attendance (%)',
      sublabel: 'Required minimum attendance percentage (e.g. 75%, 80%)',
      min: 1,
      max: 100,
      defaultValue: 75
    }
  ],
  validate: (inputs: Record<string, number | ''>): Record<string, string> | null => {
    const total = typeof inputs.totalClasses === 'number' ? inputs.totalClasses : 40;
    const attended = typeof inputs.classesAttended === 'number' ? inputs.classesAttended : 32;

    if (attended > total) {
      return {
        classesAttended: 'Classes attended cannot exceed total classes conducted.'
      };
    }
    return null;
  },
  calculate: (inputs: Record<string, number>): CalculatorResult => {
    const totalClasses = inputs.totalClasses ?? 40;
    const classesAttended = inputs.classesAttended ?? 32;
    const targetPercentage = inputs.targetPercentage ?? 75;

    if (totalClasses <= 0) {
      return {
        error: 'Total classes conducted must be greater than 0.',
        mainScore: '—',
        mainScoreLabel: 'Attendance Percentage',
        qualificationStatus: 'Invalid Input',
        qualificationBadgeColor: 'rose',
        hideStatsGrid: true,
        isEstimated: false,
        subscores: [],
        summaryNote: 'Total classes conducted must be greater than 0.'
      };
    }

    if (classesAttended < 0) {
      return {
        error: 'Classes attended cannot be negative.',
        mainScore: '—',
        mainScoreLabel: 'Attendance Percentage',
        qualificationStatus: 'Invalid Input',
        qualificationBadgeColor: 'rose',
        hideStatsGrid: true,
        isEstimated: false,
        subscores: [],
        summaryNote: 'Classes attended cannot be negative.'
      };
    }

    if (classesAttended > totalClasses) {
      return {
        error: 'Classes attended cannot exceed total classes conducted.',
        mainScore: '—',
        mainScoreLabel: 'Attendance Percentage',
        qualificationStatus: 'Invalid Input',
        qualificationBadgeColor: 'rose',
        hideStatsGrid: true,
        isEstimated: false,
        subscores: [],
        summaryNote: 'Classes attended cannot exceed total classes conducted.'
      };
    }

    if (targetPercentage <= 0 || targetPercentage > 100) {
      return {
        error: 'Target attendance must be between 1% and 100%.',
        mainScore: '—',
        mainScoreLabel: 'Attendance Percentage',
        qualificationStatus: 'Invalid Input',
        qualificationBadgeColor: 'rose',
        hideStatsGrid: true,
        isEstimated: false,
        subscores: [],
        summaryNote: 'Target attendance must be between 1% and 100%.'
      };
    }

    const percentage = Math.round((classesAttended / totalClasses) * 10000) / 100;
    const isTargetMet = percentage >= targetPercentage;

    let canMiss = 0;
    let needed = 0;

    if (isTargetMet) {
      canMiss = Math.floor((100 * classesAttended - targetPercentage * totalClasses) / targetPercentage);
      if (canMiss < 0) canMiss = 0;
    } else {
      if (targetPercentage < 100) {
        needed = Math.ceil((targetPercentage * totalClasses - 100 * classesAttended) / (100 - targetPercentage));
      } else {
        needed = 0;
      }
    }

    const status = isTargetMet ? 'Target Met (On Track)' : 'Below Target (Shortage)';
    const badgeColor: CalculatorResult['qualificationBadgeColor'] = isTargetMet ? 'emerald' : 'rose';

    let actionNote = '';
    if (isTargetMet) {
      actionNote = canMiss > 0
        ? `You can miss up to ${canMiss} more ${canMiss === 1 ? 'class' : 'classes'} and remain at or above your ${targetPercentage}% target.`
        : `Your attendance is right on target. You cannot afford to miss any upcoming classes without dropping below ${targetPercentage}%.`;
    } else {
      if (targetPercentage === 100) {
        actionNote = 'Since you have missed at least one class, reaching a 100% attendance rate is mathematically impossible.';
      } else {
        actionNote = `You need to attend the next ${needed} consecutive ${needed === 1 ? 'class' : 'classes'} to reach your ${targetPercentage}% target.`;
      }
    }

    return {
      mainScore: `${percentage.toFixed(1)}%`,
      mainScoreLabel: 'Current Attendance',
      qualificationStatus: status,
      qualificationBadgeColor: badgeColor,
      hideStatsGrid: true,
      isEstimated: false,
      subscores: [
        { label: 'Current Attendance', value: `${percentage.toFixed(2)}%` },
        { label: 'Target Attendance', value: `${targetPercentage}%` },
        {
          label: isTargetMet ? 'Classes You Can Miss' : 'Classes Needed to Attend',
          value: isTargetMet ? `${canMiss} ${canMiss === 1 ? 'class' : 'classes'}` : `${needed} ${needed === 1 ? 'class' : 'classes'}`
        },
        { label: 'Classes Attended Ratio', value: `${classesAttended} / ${totalClasses} (${totalClasses - classesAttended} absent)` }
      ],
      summaryNote: `Your current attendance is ${percentage.toFixed(2)}% (${classesAttended}/${totalClasses} classes). ${actionNote}`
    };
  },
  faqs: attendanceFaqs,
  seoArticle: attendanceSeoArticle,
  relatedCalculatorIds: ['marks-percentage', 'gre']
};

export default attendanceCalculator;
