
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Smartphone, TreeDeciduous, IceCreamCone, ShoppingBag, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface IntroSectionProps {
  onStart: () => void;
}

const IntroSection: React.FC<IntroSectionProps> = ({ onStart }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 p-2 sm:p-4 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Card className="w-full p-4 sm:p-6 lg:p-8 bg-white/90 backdrop-blur-sm shadow-2xl border-0 animate-fade-in">
          <div className="text-center mb-4 sm:mb-6">
            <div className="flex justify-center items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 animate-pulse" />
              <div className="text-3xl sm:text-4xl">🌱</div>
              <TreeDeciduous className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 animate-pulse" />
            </div>
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight px-2">
              📱🌱 Ի՞նչ ազդեցություն ունի քո առօրյա սովորությունները մոլորակի վրա
            </h1>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 sm:p-4 rounded-lg">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Մեր թվային և առօրյա գործողությունները արտադրում են ածխաթթու գազ (CO₂), որը նպաստում է կլիմայի փոփոխությանը։
              </p>
            </div>

            <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover-scale">
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  <span className="text-lg sm:text-xl">🔍</span>
                  <span className="text-lg sm:text-xl">💬</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Հեռախոսից Google որոնում, SMS ուղարկում կամ նույնիսկ պաղպաղակ ուտելը—բոլորը արտադրում են ածխածին արտանետումներ!
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover-scale">
                <div className="flex items-center gap-2 mb-2">
                  <IceCreamCone className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                  <span className="text-lg sm:text-xl">🍎</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Այս հարցումը կօգնի քեզ հասկանալ քո անձնական ազդեցությունը բնության վրա։
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 sm:p-4 rounded-lg border-l-4 border-orange-400">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg sm:text-xl">💡</span>
                <span className="font-semibold text-gray-800 text-xs sm:text-sm">Գիտե՞ս, որ...</span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                "10 անգամ Google որոնումը = 2.5 գրամ CO₂ 🌫️ — այնքան, ինչքան թողնում է փոքրիկ էլեկտրական սրճեփը աշխատելուց 5 րոպեում։"
              </p>
            </div>

            <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                <span className="text-xs text-gray-600">Ցածր CO₂</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-xs text-gray-600">Միջին CO₂</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                <span className="text-xs text-gray-600">Բարձր CO₂</span>
              </div>
            </div>
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              onClick={onStart}
              size="lg"
              className="w-full sm:w-auto sm:min-w-64 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full shadow-lg hover-scale"
            >
              Սկսել հարցաշարը ➡️
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto sm:min-w-56 flex items-center gap-2 text-blue-700 bg-blue-100 hover:bg-blue-200 border-blue-300"
              onClick={() => navigate("/co2-footprint")}
            >
              <Info className="w-4 h-4" />
              Ի՞նչ է CO₂ հետքը
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default IntroSection;

