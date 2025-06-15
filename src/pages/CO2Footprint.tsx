import React from 'react';
import { Card } from '@/components/ui/card';
import { Leaf, Info, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const funFacts = ["1. Կայուն ինտերնետ-օգտագործումը կարող է նվազեցնել CO₂ արտանետումները։", "2. 1 Google որոնումը = մոտ 0.2 գ CO₂։", "3. Էլեկտրական մեքենաներն արձակում են ավելի քիչ CO₂, քան բենզինայինները։", "4. Պարտեզում տնկված ծառը իր կյանքի ընթացքում կարող է կլանել մինչև մեկ տոննա CO₂։", "5. Գործածած հագուստ գնելն ավելի էկոլոգիապես կեղտոտ է, քան նորը։", "6. Մի բաժակ սուրճ արտադրելիս արտանետվում է մինչև 21 գ CO₂։", "7. Պլաստիկ տոպրակները բիոդեգրադացվում են մոտ 500 տարի։", "8. Ավտոբուսով մեկնելը նվազեցնում է մեկ ուղևորի CO₂ շնչավառությունը։", "9. Ընդամենը մեկ LED լամպ օգտագործելով՝ նվազեցնում եք օգտագործվող էներգիան ու CO₂-ն։", "10. Պաղպաղակը պարունակում է մեծ CO₂ ոտնահետք՝ խեցգետնի, կաթի և սառեցման պատճառով։", "11. Ուտելուց առաջ ձեռների լվացումը օգնում է խնայել ջուր և էներգիա։", "12. Ժամանակակից սմարթֆոնների արտադրությունը թողնում է 55-87 կգ CO₂։", "13. Օդափոխիչի գերբեռնված գործածությունը ավելացնում է CO₂ արտանետումները։", "14. Հեծանիվ քշելը CO₂ չի արտադրում։", "15. Յուրաքանչյուր փոստով ուղարկված էլ.նամակ թողնում է 4 գ CO₂։"];
const infoSections = [{
  icon: <Leaf className="w-7 h-7 text-green-600" />,
  title: "Ի՞նչ է ածխաթթու գազի ոտնահետքը (CO₂ Հետք)",
  content: "Ածխաթթու գազի ոտնահետքը այն համախառն քանակությունն է CO₂-ի, որը մարդը, կազմակերպությունը կամ ապրանքը թողնում է իր գործունեության ընթացքում՝ սկսած արդյունաբերությունից մինչև առօրյա թվային սովորություններ։"
}, {
  icon: <Sun className="w-7 h-7 text-yellow-500" />,
  title: "Ինչպես նվազեցնել քո CO₂ ոտնահետքը",
  content: "Մանր փոփոխություններ՝ ինչպես տեղական մրգեր ուտելը, հասարակական տրանսպորտով կամ հեծանիվով երթևեկելը, բերում են CO₂-ի արտանետումների կտրուկ նվազման։ Փոխիր թվային ու կենցաղային սովորություններդ ավելի «կանաչ» տարբերակներով։"
}, {
  icon: <Info className="w-7 h-7 text-blue-600" />,
  title: "Թվային աշխարում CO₂-ն",
  content: "Օրինակ նույնիսկ մեկը՝ հեռախոսով մարտկոցի լիցքավորումը կամ 1 տեսահոլովակի դիտումը արձակում է փոքր քանակությամբ CO₂։ Փոքր թվաբանական տարբերություններ կարող են խոշոր դեր խաղալ կլիմայի վրա, եթե դրանք բազմապատկում ենք միլիարդավոր մարդկանց թվով։"
}];
const CO2Footprint: React.FC = () => {
  const navigate = useNavigate();

  // Fun fact indexes to interleave after each info section
  const funFactBreaks = [5, 10];
  let funFactCounter = 0;
  return <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 p-2 sm:p-4 lg:p-8">
      <div className="w-full max-w-3xl mx-auto">
        <Card className="w-full p-4 sm:p-6 lg:p-8 bg-white/95 backdrop-blur-sm shadow-2xl border-0 animate-fade-in">
          <div className="mb-5 flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">🦶🌍 CO₂ Հետք – Ի՞նչ է, ինչու է կարեւոր ու հետաքրքիր փաստեր</h1>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => navigate("/")}>🏠 Գլխավոր</Button>
          </div>
          <div className="space-y-5 sm:space-y-7 text-gray-700">
            {/* Interleaving info and fun facts */}
            {[0, 1, 2].map(idx => <React.Fragment key={idx}>
                <div className="rounded-lg bg-gradient-to-r from-green-100 to-blue-100 p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {infoSections[idx].icon}
                    <h2 className="text-lg sm:text-xl font-semibold">{infoSections[idx].title}</h2>
                  </div>
                  <p className="text-sm sm:text-base">{infoSections[idx].content}</p>
                </div>
                <div className="grid gap-3 sm:gap-4">
                  {/* Interleave 5 fun facts after each */}
                  {funFacts.slice(funFactCounter, funFactCounter + 5).map((f, i) => <div key={f} className="flex items-start gap-2 p-3 bg-white border-l-4 border-green-400 rounded shadow-sm hover-scale">
                      <span className="text-green-600 text-lg font-bold">💡</span>
                      <span className="text-xs sm:text-sm">{f}</span>
                    </div>)}
                  {(() => {
                funFactCounter += 5;
                return null;
              })()}
                </div>
              </React.Fragment>)}
          </div>
        </Card>
      </div>
    </div>;
};
export default CO2Footprint;