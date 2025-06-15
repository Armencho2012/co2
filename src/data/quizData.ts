
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
  }
];
