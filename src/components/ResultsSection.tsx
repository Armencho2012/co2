import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QuizAnswer } from '../pages/Index';
import { TreeDeciduous } from 'lucide-react';

// Armenian CO₂ fun facts array
const armeniaFunFacts = [
  "🇦🇲 Միջին հայը օրական արտանետում է մոտ 12 կգ CO₂։",
  "🇦🇲 Հայաստանում ամենաշատ CO₂ արտանետումը գալիս է տրանսպորտից և ջեռուցումից։",
  "🇦🇲 Տարեկան միջինում հայը արտանետում է ավելի քան 4 տոննա CO₂։",
  "🇦🇲 Եթե Երևանում ապրող 100 մարդ հեծանիվով երթևեկի, տարեկան կխնայեն ավելի քան 50 տոննա CO₂։",
  "🇦🇲 Հայաստանում վերականգնվող էներգիայի զարգացումը կարող է կրճատել երկրի ընդհանուր CO₂ արտանետումների 20%-ը։"
];

interface ResultsSectionProps {
  answers: QuizAnswer[];
  onRestart: () => void;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ answers, onRestart }) => {
  const totalCO2 = answers.reduce((sum, answer) => sum + answer.co2Value, 0);
  const dailyCO2 = totalCO2;
  const weeklyCO2 = totalCO2 * 7;
  const yearlyCO2 = totalCO2 * 365;

  const getImpactLevel = (co2: number) => {
    if (co2 < 100) return { level: 'low', color: 'green', emoji: '🌱', earth: '🌍' };
    if (co2 < 500) return { level: 'medium', color: 'yellow', emoji: '🌿', earth: '🌎' };
    return { level: 'high', color: 'red', emoji: '🌡️', earth: '🌋' };
  };

  const impact = getImpactLevel(dailyCO2);
  const progressValue = Math.min((dailyCO2 / 1000) * 100, 100);

  const getSuggestions = () => {
    const suggestions = [];

    const digitalAnswers = answers.slice(0, 3);
    const highDigitalUsage = digitalAnswers.some(answer => answer.co2Value > 20);
    if (highDigitalUsage) {
      suggestions.push("📱 Փորձիր սահմանափակել թվային ժամանակը");
    }

    const shoppingAnswer = answers.find(answer => answer.answer.includes('Պլաստիկ'));
    if (shoppingAnswer) {
      suggestions.push("🛍️ Փորձիր նվազեցնել պլաստիկի օգտագործումը");
    }

    const foodAnswers = answers.slice(3, 6);
    const highFoodImpact = foodAnswers.some(answer => answer.co2Value > 100);
    if (highFoodImpact) {
      suggestions.push("🍎 Ընտրիր տեղական արտադրանք");
    }

    if (suggestions.length === 0) {
      suggestions.push("🌟 Հիանալի է! Շարունակիր էկոլոգիական ապրելակերպը");
    }

    return suggestions;
  };

  const suggestions = getSuggestions();

  // Get a random Armenia fact (only once)
  const randomArmeniaFact = React.useMemo(() => {
    const index = Math.floor(Math.random() * armeniaFunFacts.length);
    return armeniaFunFacts[index];
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 p-2 sm:p-4 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <Card className="w-full p-4 sm:p-6 lg:p-8 bg-white/95 backdrop-blur-sm shadow-2xl border-0 animate-fade-in">
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">{impact.earth}</div>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
              🌱 Քո առօրյա սովորությունների CO₂ ազդեցությունը
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="space-y-4 sm:space-y-6">
              <div className={`bg-gradient-to-r from-${impact.color}-100 to-${impact.color}-200 p-4 sm:p-6 rounded-lg shadow-md`}>
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl">{impact.emoji}</span>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800">{dailyCO2.toFixed(1)}g</div>
                    <div className="text-xs sm:text-sm text-gray-600">CO₂ օրական</div>
                  </div>
                </div>

                <Progress value={progressValue} className={`h-3 sm:h-4 mb-2 bg-${impact.color}-100`} />

                <div className="text-center text-xs sm:text-sm text-gray-600">
                  {impact.level === 'low' ? 'Ցածր ազդեցություն' : impact.level === 'medium' ? 'Միջին ազդեցություն' : 'Բարձր ազդեցություն'}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 sm:p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <TreeDeciduous className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  Տարեկան ազդեցություն
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Շաբաթական:</span>
                    <span className="font-medium">{(weeklyCO2 / 1000).toFixed(2)} կգ CO₂</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span>Տարեկան:</span>
                    <span className="font-medium">{(yearlyCO2 / 1000).toFixed(2)} կգ CO₂</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border">
                <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <span className="text-lg sm:text-xl">💡</span>
                  Խորհուրդներ
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <span className="text-green-500 font-bold">•</span>
                      <span className="text-gray-700 text-xs sm:text-sm">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Armenian fun fact block */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Գիտե՞ս, որ...</h3>
                <p className="text-xs sm:text-sm text-gray-600">{randomArmeniaFact}</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button onClick={onRestart} variant="outline" className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 hover-scale text-sm sm:text-base">
                🔄 Նորից անցնել թեստը
              </Button>
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 hover-scale text-sm sm:text-base"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'CO₂ Quiz Results',
                      text: `Իմ օրական CO₂ ազդեցությունը ${dailyCO2.toFixed(1)}գ է! Դուք էլ փորձեք:`,
                      url: window.location.href
                    });
                  }
                }}
              >
                📤 Կիսվել ընկերներիդ հետ
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ResultsSection;
