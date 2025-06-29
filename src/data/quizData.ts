
export interface QuizOption {
  text: string;
  co2Value: number;
}

export interface QuizQuestion {
  question: string;
  icon: string;
  options: QuizOption[];
}

export const questions: QuizQuestion[] = [
  {
    question: "Օրվա մեջ քանի անգամ եք հեռախոսով SMS հաղորդագրություն ուղարկում?",
    icon: "📩",
    options: [
      { text: "1 անգամ", co2Value: 0.014 },
      { text: "2-5 անգամ", co2Value: 0.06 },
      { text: "10-20 անգամ", co2Value: 0.25 },
      { text: "20-ից ավելի", co2Value: 0.4 }
    ]
  },
  {
    question: "Օրվա մեջ բջջային հեռախոս օգտագործում եք՝",
    icon: "📱",
    options: [
      { text: "գրեթե չեմ օգտագործում", co2Value: 0.57 },
      { text: "կես ժամ", co2Value: 1.7 },
      { text: "1 ժամ", co2Value: 3.4 },
      { text: "2 ժամ", co2Value: 6.8 },
      { text: "3-5 ժամ", co2Value: 13.6 },
      { text: "6-10 ժամ", co2Value: 27.2 }
    ]
  },
  {
    question: "Օրվա մեջ Google որոնում կատարում եք՝",
    icon: "🔍",
    options: [
      { text: "1 անգամ", co2Value: 0.2 },
      { text: "3-5 անգամ", co2Value: 0.8 },
      { text: "6-10 անգամ", co2Value: 1.6 },
      { text: "10+ անգամ", co2Value: 2.5 }
    ]
  },
  {
    question: "Միրգ որը նախընտրում եք՝",
    icon: "🍎",
    options: [
      { text: "Սեփական այգուց", co2Value: 0 },
      { text: "Ձեր մարզում աճեցված", co2Value: 10 },
      { text: "Ներկրված է", co2Value: 150 }
    ]
  },
  {
    question: "Գնումներ կատարելիս օգտագործում եք տոպրակ, որը՝",
    icon: "🛍️",
    options: [
      { text: "Պլաստիկ է", co2Value: 10 },
      { text: "Կտորից է", co2Value: 0 }
    ]
  },
  {
    question: "Օրվա մեջ քանի անգամ եք պաղպաղակ ուտում",
    icon: "🍦",
    options: [
      { text: "չեմ ուտում", co2Value: 0 },
      { text: "1-2 անգամ", co2Value: 500 },
      { text: "3-5 անգամ", co2Value: 17000 }
    ]
  },
{
  question: "Օրվա ընթացքում քանի անգամ եք էլ. նամակ ուղարկում կամ ստանում?",
  icon: "✉️",
  options: [
    { text: "1-2 նամակ", co2Value: 4 },
    { text: "3-5 նամակ", co2Value: 10 },
    { text: "6-10 նամակ", co2Value: 20 },
    { text: "10-ից ավելի", co2Value: 40 }
  ]
},
{
  question: "Ի՞նչ տրանսպորտ եք օգտագործում ամենաշատը․",
  icon: "🚗",
  options: [
    { text: "Հեծանիվ կամ քայլում եմ", co2Value: 0 },
    { text: "Հասարակական տրանսպորտ", co2Value: 100 },
    { text: "Անձնական մեքենա", co2Value: 400 },
    { text: "Տաքսի/մոտոցիկլ", co2Value: 350 }
  ]
},
{
  question: "Օրվա ընթացքում տեսանյութ դիտում եք՝",
  icon: "📺",
  options: [
    { text: "Չեմ դիտում", co2Value: 0 },
    { text: "Մինչև 30 րոպե", co2Value: 1 },
    { text: "1-2 ժամ", co2Value: 6 },
    { text: "3 ժամ և ավելի", co2Value: 12 }
  ]
},
{
  question: "Ձեր տան լամպերը հիմնականում՝",
  icon: "💡",
  options: [
    { text: "Լեդ են (LED)", co2Value: 5 },
    { text: "Սովորական են", co2Value: 25 }
  ]
},
{
  question: "Օրվա մեջ քանի շիշ ջուր եք գնում (պլաստիկ շիշ):",
  icon: "🥤",
  options: [
    { text: "Չեմ գնում, վերօգտագործում եմ", co2Value: 0 },
    { text: "1 շիշ", co2Value: 80 },
    { text: "2-3 շիշ", co2Value: 200 },
    { text: "4 կամ ավելի", co2Value: 400 }
  ]
}
];
