const baseShayariList = [
  {
    greeting: 'પ્રિય રોશની, શુભ સવાર ☀️',
    text: 'રોશની, તારું સ્મિત મારી સવારનું પ્રથમ કિરણ છે. તને યાદ કરું એટલે મનમાં શાંતિ ઉતરે છે અને આખો દિવસ સુંદર બની જાય છે.',
    funny: 'સવારની ચા કરતાં તારો એક સંદેશ વધુ અસરકારક છે; તું લખે એટલે મારી ઊંઘ પણ સ્મિત કરવા લાગે છે 😄',
    reason: 'કારણ તું મારા દિવસની પહેલી ખુશી છે; તારી યાદથી દરેક શરૂઆત વધુ સારી લાગે છે.',
    secret: 'પ્રિય રોશની, આજની સવાર તારા નામથી શરૂ થાય છે. તું હસતી રહે, ખુશ રહે અને તને હંમેશા યાદ રહે કે કોઈ તને દિલથી પ્રેમ કરે છે 💖'
  },
  {
    greeting: 'પ્રિય રોશની, શુભ બપોર 🌤️',
    text: 'બપોરની ગરમી વચ્ચે તારી યાદ ઠંડી પવન જેવી લાગે છે. તારી એક નાની વાત પણ મારા થાકેલા મનને હળવું કરી દે છે.',
    funny: 'બપોરે ઊંઘ આવતી હોય ત્યારે તારો વિચાર આવે છે; પછી ઊંઘ તો જતી રહે છે, પણ તારી યાદ જાગતી રહે છે 😄',
    reason: 'કારણ તું વ્યસ્ત દિવસ વચ્ચે મળતો સૌથી સુંદર વિરામ છે; તારી સાથે મનને સાચી શાંતિ મળે છે.',
    secret: 'પ્રિય રોશની, કામ કેટલું પણ હોય, તારો વિચાર આવે ત્યારે બધું સરળ લાગે છે. આજે પણ પોતાનું ધ્યાન રાખજે અને હસતી રહેજે 🫶'
  },
  {
    greeting: 'પ્રિય રોશની, શુભ સાંજ ✨',
    text: 'સાંજના આકાશમાં રંગો ખીલે છે, પણ તારા હાસ્ય સામે બધા રંગો ફિક્કા લાગે છે. તું મારી દરેક સાંજને યાદગાર બનાવી દે છે.',
    funny: 'સાંજ પડે એટલે ચા, નાસ્તો અને તારી વાતો; આ ત્રણ વસ્તુઓ મળે તો મારું મન તરત ખુશ થઈ જાય છે 😄',
    reason: 'કારણ તું દિવસની દોડધામ પછી મળતી સૌથી મીઠી લાગણી છે; તારી હાજરીથી મન સ્થિર થાય છે.',
    secret: 'પ્રિય રોશની, આજની સાંજ તારા સ્મિત જેવી નરમ રહે. દિવસ કેવો પણ ગયો હોય, તું મારા માટે હંમેશા ખાસ છે 💞'
  },
  {
    greeting: 'પ્રિય રોશની, શુભ રાત્રી 🌙',
    text: 'રાત શાંત થાય ત્યારે તારી યાદ વધુ નજીક લાગે છે. તારું સ્મિત મારી રાતનું ચાંદ છે અને તારો વિચાર મારી ઊંઘનું સૌથી સુંદર ગીત છે.',
    funny: 'સૂતા પહેલાં છેલ્લો વિચાર તારો હોય છે અને એલાર્મ વાગે ત્યારે પહેલો વિચાર પણ તારો જ હોય છે. મારી ઊંઘ પણ તારી ચાહક છે 😄',
    reason: 'કારણ તું મારા દિવસનો અંત પણ સુંદર બનાવે છે અને મારી દરેક સવાર માટે નવી આશા આપે છે.',
    secret: 'પ્રિય રોશની, આંખો બંધ કરતાં પહેલાં એટલું યાદ રાખજે કે તું કોઈના હૃદયની સૌથી પ્રિય વ્યક્તિ છે. મીઠી ઊંઘ અને સુંદર સપનાઓ 💖'
  },
  {
    greeting: 'પ્રિય રોશની, તારા માટે ખાસ 💌',
    text: 'તારી સાથેની નાની નાની વાતોમાં મને આખી દુનિયાની ખુશી મળી જાય છે. તું મારી જિંદગીની સૌથી સુંદર લાગણી અને સૌથી મીઠો સાથ છે.',
    funny: 'તારો ગુસ્સો પણ ગમે છે, કારણ કે પછી તને મનાવવાની તક મળે છે; પ્રેમમાં થોડું નાટક તો ચાલે ને? 😄',
    reason: 'કારણ તારી સાથે હું મારા જેવો રહી શકું છું; તું મારા મનને સમજતી અને મારા હૃદયને હસાવતી વ્યક્તિ છે.',
    secret: 'પ્રિય રોશની, તું મારી માટે માત્ર એક નામ નથી; તું મારી પ્રાર્થના, મારી શાંતિ અને મારી સૌથી સુંદર યાદ છે 💕'
  },
  {
    greeting: 'પ્રિય રોશની, એક નાની કબૂલાત 💗',
    text: 'તને મળ્યા પછી સમજાયું કે પ્રેમ મોટી વાતોમાં નહીં, પરંતુ રોજની નાની કાળજી, હળવા સ્મિત અને સાચા સાથમાં વસે છે.',
    funny: 'તું મારી મનપસંદ વ્યક્તિ છે, એટલે તારી નાની નાની ફરિયાદો પણ મને ખાસ લાગે છે. આ પ્રેમ છે કે મારી મીઠી મુશ્કેલી? 😄',
    reason: 'કારણ તારી કાળજીમાં મને ઘર જેવી લાગણી મળે છે અને તારા સ્મિતમાં મારી સૌથી સાચી ખુશી દેખાય છે.',
    secret: 'પ્રિય રોશની, તારા માટેનો મારો પ્રેમ કોઈ એક દિવસનો નથી. દરેક દિવસ, દરેક સમય અને દરેક નાની યાદમાં તું મારી સાથે છે 💘'
  }
];

const periodDetails = {
  morning: {
    greeting: 'પ્રિય રોશની, શુભ સવાર ☀️',
    moments: ['સવારના સોનેરી કિરણોમાં', 'ચાની પહેલી ચુસ્કી સાથે', 'નવા દિવસની શાંત શરૂઆતમાં', 'પંખીઓના મધુર સ્વરમાં', 'જાગતી બારી પાસે', 'તાજી હવાની લહેર સાથે', 'સૂર્યોદયના રંગોમાં', 'આશાથી ભરેલી આ પળમાં'],
    endings: ['મારો દિવસ તારા નામથી ખીલી ઊઠે છે', 'દરેક શરૂઆત તારી યાદથી વધુ સુંદર લાગે છે', 'મારી પ્રાર્થનામાં તારી ખુશી પહેલું સ્થાન લે છે', 'આજનો દિવસ તારા સ્મિત જેટલો ઉજાસભર્યો રહે', 'તારી યાદ મારી પહેલી સારી લાગણી બની રહે', 'નવી આશાઓમાં તારો સાથ અનુભવાય છે', 'મારું હૃદય તારા માટે નાનું સૂરજ સાચવી રાખે છે', 'સવાર પણ તારા વિચારથી પ્રેમાળ બની જાય છે']
  },
  afternoon: {
    greeting: 'પ્રિય રોશની, શુભ બપોર 🌤️',
    moments: ['બપોરની તેજસ્વી રોશનીમાં', 'વ્યસ્ત દિવસની વચ્ચે', 'કામની વચ્ચે મળેલી પળમાં', 'હળવી છાંયડી નીચે', 'બપોરની ચાની સુગંધમાં', 'વિચારોની ભીડ વચ્ચે', 'થોડો શ્વાસ લેવા રોકાઈને', 'મધ્યાહ્નના ખુલ્લા આકાશમાં'],
    endings: ['મારો થાક તારી યાદમાં ઓગળી જાય છે', 'તું મારા દિવસનો સૌથી સુંદર વિરામ બની રહે છે', 'તારી એક વાત મનને ફરીથી તાજું કરી દે છે', 'આ વ્યસ્ત દુનિયામાં તું મારી શાંત જગ્યા છે', 'બપોર પણ તારા વિચારથી નરમ બની જાય છે', 'તારી કાળજી મને ફરી હિંમત આપે છે', 'મારા કામમાં તારી યાદ નાની ખુશી ઉમેરે છે', 'દરેક જવાબદારી સહેલી લાગે છે કારણ કે તું છે']
  },
  evening: {
    greeting: 'પ્રિય રોશની, શુભ સાંજ ✨',
    moments: ['સાંજના રંગીન આકાશ નીચે', 'ઢળતા સૂરજની સોનેરી ધાર પર', 'ચાની પહેલી ચુસ્કી સાથે', 'દિવસની દોડ પૂરી થતી વેળાએ', 'ગુલાબી વાદળોની વચ્ચે', 'સાંજની શાંત બારી પાસે', 'સૂર્યાસ્તની નરમ લાલીમાં', 'વાતો માટે સમય મળે ત્યારે'],
    endings: ['મારી સાંજ તારા સ્મિતથી પૂર્ણ થાય છે', 'દિવસની દોડધામ તારી યાદમાં શાંત થાય છે', 'તારા વગર સૂર્યાસ્ત પણ અધૂરો લાગે છે', 'મન તારી સાથે થોડો સમય વહેંચવા માંગે છે', 'દરેક સૂર્યાસ્તમાં તારા માટે એક નાની કવિતા છે', 'તારી એક હસતી વાત આખી સાંજ બદલી દે છે', 'સાંજનો પવન તારો સંદેશ લઈને આવે છે', 'દિવસનો શ્રેષ્ઠ રંગ પણ તારી યાદ સામે ફિક્કો છે']
  },
  night: {
    greeting: 'પ્રિય રોશની, શુભ રાત્રી 🌙',
    moments: ['શાંત રાતના આકાશ નીચે', 'ચાંદનીની નરમ રોશનીમાં', 'ઊંઘ પહેલાંની છેલ્લી પળમાં', 'તારાઓથી ભરેલી બારી પાસે', 'દિવસનો શોર શમી જાય ત્યારે', 'રાતની ઠંડી હવામાં', 'આંખો ધીમે ધીમે બંધ કરતાં', 'સપનાઓની સરહદ પર'],
    endings: ['મારી રાત તારા વિચારથી શાંત અને સુંદર બને છે', 'તારા નામ સાથે ઊંઘ પણ મીઠી થઈ જાય છે', 'મારા સપનાઓમાં તારી ખુશીનો ચાંદ ઝળહળે છે', 'દિવસનો અંત તારી યાદને અર્પણ થાય છે', 'મારું હૃદય તને મીઠી ઊંઘની શુભેચ્છા મોકલે છે', 'કાલે ફરી તને હસાવવાની આશા સાથે હું સૂઈશ', 'આ શાંત પળમાં પણ તું મારી સૌથી નજીક છે', 'તારા માટેનો પ્રેમ રાત કરતાં પણ ઊંડો છે']
  }
};

const variationLines = [
  'તારી યાદ મનમાં ધીમે ધીમે ઉતરીને આખો દિવસ સુગંધિત કરી દે છે',
  'તારી એક નાની વાત પણ મારા મનમાં લાંબો પ્રકાશ છોડી જાય છે',
  'તારા નામનો વિચાર આવે એટલે હૃદય પોતાની ભાષામાં સ્મિત કરે છે',
  'તારી નજીક હોવાની લાગણી અંતર હોવા છતાં મને સંભાળી લે છે',
  'તારી કાળજીમાં એવી શાંતિ છે જે કોઈ શબ્દકોશમાં મળતી નથી',
  'તારી આંખોની નિર્દોષતા મારી બધી ચિંતાઓને ભૂલાવી દે છે',
  'તારી સાથેની સામાન્ય પળ પણ મારી યાદોમાં ખાસ બની જાય છે',
  'તારા હાસ્યની એક ઝલક મારા આખા દિવસનું વજન હળવું કરી દે છે',
  'તારી વાતોમાં ઘર જેવી ગરમાહટ અને વરસાદ જેવી તાજગી છે',
  'તારી હાજરી મારા અસ્તવ્યસ્ત વિચારોને સુંદર ક્રમ આપી દે છે',
  'તને યાદ કરવું મારા હૃદયની સૌથી સરળ અને મીઠી આદત છે',
  'તારી સાથે વહેંચેલો એક ક્ષણ પણ સમયને કિંમતી બનાવી દે છે',
  'તારી નિઃશબ્દ કાળજી મારા માટે સૌથી ઊંડો પ્રેમપત્ર છે',
  'તારા સ્મિતમાં એવી નરમાઈ છે કે થાક પણ રસ્તો બદલી દે છે',
  'તારી સાદગી મારા હૃદયને દરરોજ ફરીથી જીતે છે',
  'તારી યાદ મારા દિવસના ખાલી ખૂણામાં રંગ ભરી દે છે',
  'તારી સાથે વાત કર્યા પછી દુનિયા થોડી ઓછી મુશ્કેલ લાગે છે',
  'તારી ખુશી માટેની મારી નાની પ્રાર્થના રોજ વધુ સાચી બને છે',
  'તારા સાથમાં મને મારી જાતનું વધુ સુંદર સ્વરૂપ દેખાય છે',
  'તારું નામ મારા મનની સૌથી શાંત ધૂન બની ગયું છે'
];

const floatingLoveNotes = [
  'I love you, રોશની 💗',
  'I miss you, રોશની 💌',
  'તું યાદ આવે છે, બહુ જ યાદ આવે છે.',
  'મારું હૃદય આજે પણ તારા નામે ધબકે છે.',
  'તું હસે એ જ મારી સૌથી પ્રિય વાત છે.',
  'આ પળે બસ તારી પાસે આવવાનું મન થાય છે.',
  'તારી એક વાત આખો દિવસ સુંદર બનાવી દે છે.',
  'તું દૂર છે, પણ મારા વિચારોથી ક્યારેય દૂર નથી.',
  'તારા માટેનો પ્રેમ ધીમો નથી પડતો, દરરોજ વધે છે.',
  'આજે તને એક નાનું ચુંબન અને ઘણો પ્રેમ મોકલ્યો છે 💞'
];
const floatingGujaratiNotes = [
  'તારી યાદ આવે એટલે મન હળવું થઈ જાય છે 💗', 'આજનું સ્મિત તારા નામે છે ✦',
  'મારી શાંતિનો સૌથી સુંદર ભાગ તું છે 🌙', 'તારી ખુશી મારી નાની પ્રાર્થના છે',
  'તારા નામથી મારા દિવસમાં નરમ પ્રકાશ આવે છે ☀️', 'તું હસે ત્યારે મારી દુનિયા વધુ સુંદર બને છે',
  'તારી હાજરી મારા માટે શાંત સંગીત જેવી છે', 'તારી નાની ખુશી પણ મારા માટે મોટો ઉત્સવ છે',
  'મારું હૃદય તારી એક વાતની રાહ જુએ છે 💌', 'તું છે એટલે સામાન્ય પળ પણ ખાસ છે'
];
const floatingGujaratiOpenings = [
  'રોશની, ', 'મારી પ્રિય રોશની, ', 'આજની પળે ', 'મારા હૃદયમાં ', 'ધીમે ધીમે ',
  'સાંજના રંગોમાં ', 'ચાંદનીની વચ્ચે ', 'દરેક શ્વાસ સાથે ', 'મારી દરેક પ્રાર્થનામાં ', 'આ નાનકડા સંદેશમાં '
];
const floatingGujaratiMiddles = [
  'તારી યાદ', 'તારું સ્મિત', 'તારો અવાજ', 'તારી કાળજી', 'તારી સાદગી',
  'તારી હાજરી', 'તારી મીઠી વાત', 'તારી આંખોની ચમક', 'તારી ખુશી', 'તારા નામની ધૂન'
];
const floatingGujaratiEndings = [
  'મારા મનને શાંત કરી દે છે 💗', 'મારી દુનિયાને સુંદર બનાવી દે છે 💞',
  'મારા દિવસમાં પ્રેમ ભરી દે છે 💖', 'મને ફરીથી સ્મિત કરાવી દે છે 🌷',
  'મારા હૃદયને તારી નજીક લઈ આવે છે 💌', 'મારી દરેક પળને ખાસ બનાવી દે છે ✨',
  'મને તને વધુ પ્રેમ કરવાનું કારણ આપે છે 💘', 'મારી રાતને નરમ પ્રકાશથી ભરી દે છે 🌙',
  'મારી અંદર એક મીઠી આશા જગાવે છે 🫶', 'મને યાદ અપાવે છે કે તું કેટલી ખાસ છે 🌹'
];
const generatedFloatingGujaratiNotes = floatingGujaratiOpenings.flatMap((opening) => (
  floatingGujaratiMiddles.flatMap((middle) => (
    floatingGujaratiEndings.map((ending) => `${opening}${middle} ${ending}`)
  ))
));
const heartRainStyles = [
  ['#ff4f81', '♥'], ['#ff7aa8', '💖'], ['#e83e8c', '♡'], ['#ff5d5d', '💘'],
  ['#f43f5e', '💕'], ['#d946ef', '💗'], ['#fb7185', '❣️'], ['#ec4899', '💞'],
  ['#be185d', '💓'], ['#f97316', '💝'], ['#c026d3', '💟'], ['#ef4444', '💌'],
  ['#db2777', '💋'], ['#e11d48', '♥️'], ['#f472b6', '💜']
];
let heartRainIndex = 0;
let floatingLoveNoteQueue = [];
let floatingGujaratiNoteQueue = [];
let floatingWhisperActive = false;

function getNextFloatingLoveNote() {
  if (!floatingLoveNoteQueue.length) {
    floatingLoveNoteQueue = [...floatingLoveNotes].sort(() => Math.random() - 0.5);
  }
  return floatingLoveNoteQueue.shift();
}

function getNextFloatingGujaratiNote() {
  if (!floatingGujaratiNoteQueue.length) {
    floatingGujaratiNoteQueue = [...floatingGujaratiNotes, ...generatedFloatingGujaratiNotes]
      .filter((note, index, notes) => notes.indexOf(note) === index)
      .sort(() => Math.random() - 0.5);
  }
  return floatingGujaratiNoteQueue.shift();
}

const shayariList = Object.entries(periodDetails).flatMap(([period, details]) => {
  const messages = [];
  for (let momentIndex = 0; momentIndex < details.moments.length; momentIndex += 1) {
    for (let lineIndex = 0; lineIndex < variationLines.length; lineIndex += 1) {
      for (let endingIndex = 0; endingIndex < details.endings.length; endingIndex += 1) {
        messages.push({
          period,
          greeting: details.greeting,
          text: `${details.moments[momentIndex]} ${variationLines[lineIndex]}; ${details.endings[endingIndex]}.`,
          funny: `${period === 'night' ? 'સૂતા પહેલાં' : 'આજે'} ${details.moments[momentIndex].toLowerCase()} તારો વિચાર આવ્યો; ${variationLines[lineIndex].toLowerCase()} અને ${details.endings[endingIndex].toLowerCase()} 😄`,
          reason: `આ શાયરી ${details.moments[momentIndex]} ${variationLines[lineIndex].toLowerCase()}; ${details.endings[endingIndex].toLowerCase()}, એટલે તારી લાગણીને આ અનોખા શબ્દો મળ્યા છે.`,
          secret: `રોશની, ${details.moments[momentIndex].toLowerCase()} ${variationLines[lineIndex].toLowerCase()}; ${details.endings[endingIndex].toLowerCase()}. તારી ખુશીમાં જ મારી ખુશી છે અને તારી યાદમાં આ પત્ર હંમેશા જીવંત છે 💖`
        });
      }
    }
  }
  return messages;
});

const shayariByPeriod = Object.fromEntries(
  Object.keys(periodDetails).map((period) => [period, shayariList.filter((message) => message.period === period)])
);

const weekdayNames = ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર'];
const monthNames = ['જાન્યુઆરી', 'ફેબ્રુઆરી', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઈ', 'ઓગસ્ટ', 'સપ્ટેમ્બર', 'ઓક્ટોબર', 'નવેમ્બર', 'ડિસેમ્બર'];
const gujaratiDigits = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];
const SOUTH_CAROLINA_TIME_ZONE = 'America/New_York';
const southCarolinaFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: SOUTH_CAROLINA_TIME_ZONE,
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  weekday: 'short',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h12'
});

let currentShayariIndex = 0;
let shayariTypingId = 0;
let activePeriod = '';
let musicContext = null;
let musicMasterGain = null;
let musicTimer = null;
let musicStep = 0;
let musicPlaying = false;
let musicUserStopped = false;
let musicStartInFlight = false;
let musicStartRequest = 0;
let musicUnlockHandler = null;
let galleryInteractionTimer = null;
const supabaseConfig = window.SUPABASE_CONFIG || { url: '', anonKey: '' };
const hasSupabase = Boolean(supabaseConfig.url && supabaseConfig.anonKey);

const themeOptions = {
  morning: [
    ['#fff1d6', '#ffd0b8', '#8ecbff', '#432b35', '#9a3f58'],
    ['#f6f7df', '#c9e7d0', '#91c4de', '#263d3b', '#4f9b89'],
    ['#fff8e9', '#f2d3a0', '#d6a6a6', '#4a3030', '#9a4658']
  ],
  afternoon: [
    ['#ffe0a8', '#ffb6a3', '#7cc9ef', '#48232b', '#9a3d51'],
    ['#d8f0e7', '#a7d8ef', '#f5c58a', '#24434b', '#3e9b98'],
    ['#f5e2c8', '#d8c1ec', '#9db7de', '#33284a', '#60458f']
  ],
  evening: [
    ['#271634', '#703653', '#f09a70', '#fff4e9', '#ffb273'],
    ['#162b39', '#28596a', '#e58c68', '#f2fbf7', '#88d0b3'],
    ['#301b3d', '#8c4560', '#d8a05f', '#fff5e3', '#f2bd75']
  ],
  night: [
    ['#070d1f', '#1a2545', '#6558a8', '#edf4ff', '#9ac2ff'],
    ['#101b2b', '#16485a', '#4f8e9f', '#effcff', '#7ed4d0'],
    ['#1d172e', '#4d315f', '#a05d83', '#fff1fa', '#e6a2c6']
  ]
};

const themeContrastTokens = {
  morning: {
    accent2: '#8f3f52',
    highlight: '#805700',
    border: 'rgba(74, 48, 48, 0.24)',
    glass: 'rgba(255, 255, 255, 0.48)'
  },
  afternoon: {
    accent2: '#8a3d4c',
    highlight: '#765000',
    border: 'rgba(61, 27, 47, 0.24)',
    glass: 'rgba(255, 255, 255, 0.46)'
  },
  evening: {
    accent2: '#ffe0c7',
    highlight: '#ffe3a1',
    border: 'rgba(255, 227, 197, 0.22)',
    glass: 'rgba(255, 255, 255, 0.08)'
  },
  night: {
    accent2: '#ffd5ef',
    highlight: '#ffe6a7',
    border: 'rgba(170, 188, 255, 0.22)',
    glass: 'rgba(255, 255, 255, 0.06)'
  }
};

const constellationNames = ['રોશની', 'હું'];
const loveReasonQualities = [
  'તારું સ્મિત', 'તારી ધીરજ', 'તારો અવાજ', 'તારી દયાળુતા', 'તારી સાદગી',
  'તારી આંખોની નિર્દોષતા', 'તારી નાની નાની આદતો', 'તારો મીઠો ગુસ્સો', 'તારી કાળજી', 'તારી હિંમત',
  'તારી સમજદારી', 'તારી રમૂજ', 'તારી સચ્ચાઈ', 'તારી મહેનત', 'તારી શાંતિ',
  'તારી હાજરી', 'તારી વાત કરવાની રીત', 'તારી માફ કરવાની શક્તિ', 'તારા સપનાઓ', 'તારો વિશ્વાસ'
];

const loveReasonMoments = [
  'સામાન્ય દિવસને પણ યાદગાર બનાવી દે છે', 'મારા વિચારોને શાંતિથી ગોઠવી દે છે',
  'મને મારી જાત પર ફરી વિશ્વાસ કરાવે છે', 'મારા થાકમાં પણ એક નાનું સ્મિત લાવે છે',
  'મને ઘર જેવી સુરક્ષિત લાગણી આપે છે', 'દરેક મુશ્કેલ પળને થોડી સહેલી બનાવે છે',
  'મને પ્રેમનો અર્થ શબ્દો વગર સમજાવે છે', 'મારા દિવસમાં રંગ અને નરમાઈ ઉમેરે છે',
  'મને વધુ સારો માણસ બનવાની ઇચ્છા આપે છે', 'મારી નાની જીતને પણ મોટી ખુશી બનાવે છે',
  'મારા હૃદયને ઉતાવળમાં પણ ધીમું થવાનું શીખવે છે', 'મને યાદ કરાવે છે કે સાચી ખુશી નાની બાબતોમાં છે'
];

const loveReasons = loveReasonQualities.flatMap((quality) => loveReasonMoments.map((moment) => `હું તને પ્રેમ કરું છું કારણ કે ${quality} ${moment}.`));

const dailySurprises = [
  {
    type: 'આજનો પ્રેમપત્ર 💌',
    items: ['આજે તને કોઈ કારણ વગર યાદ કરું છું; કદાચ પ્રેમને કારણોની જરૂર જ નથી.', 'આજનો દિવસ તારા સ્મિત જેટલો હળવો અને તારા હૃદય જેટલો સુંદર રહે.', 'તું જ્યાં હોય ત્યાં મારી શુભેચ્છા તારી સાથે ચાલે છે.', 'મારી દુનિયામાં સૌથી શાંત જગ્યા હજુ પણ તારી નજીક છે.', 'આજે પણ તારી ખુશી મારી નાની પ્રાર્થનાનો સૌથી મોટો ભાગ છે.', 'તારી સાથે વાત કરવાની ઇચ્છા દિવસના દરેક શોર કરતાં મોટી છે.']
  },
  {
    type: 'આજની યાદ 📸',
    items: ['જે પળે તું પહેલી વાર દિલથી હસી હતી, એ પળ આજે પણ મારી અંદર પ્રકાશ કરે છે.', 'તારી સાથેની સામાન્ય વાત પણ મને પછી આખો દિવસ યાદ રહે છે.', 'તારો એક નાનો સંદેશ ક્યારેક આખો દિવસ બચાવી લે છે.', 'તારી આંખોમાં દેખાતી ખુશી મારી મનપસંદ યાદોમાંથી એક છે.', 'તારી સાથેનો સમય ઘડિયાળથી નહીં, હૃદયથી માપાય છે.', 'ક્યારેક તું કંઈ ખાસ કરતી નથી, છતાં તારી હાજરી જ ખાસ બની જાય છે.']
  },
  {
    type: 'આજની પ્રશંસા 🌷',
    items: ['તારી અંદર એવી નરમ શક્તિ છે જે લોકોને તારી પાસે સુરક્ષિત અનુભવ કરાવે છે.', 'તારી સચ્ચાઈ તને સુંદર જ નહીં, વિશ્વાસપાત્ર પણ બનાવે છે.', 'તું જે રીતે લોકોની કાળજી લે છે તે તારા હૃદયની સુંદરતા બતાવે છે.', 'તારી મહેનત ઘણી વાર શાંત હોય છે, પણ તેનું પરિણામ ખૂબ બોલકું હોય છે.', 'તારી સાદગીમાં એવી સુંદરતા છે જેને કોઈ આભૂષણની જરૂર નથી.', 'તું પોતાની લાગણીઓને જે હિંમતથી જીવે છે તે મને ખૂબ ગમે છે.']
  },
  {
    type: 'આજનો પ્રશ્ન 💭',
    items: ['આજે કઈ નાની વાતે તને સ્મિત કરાવ્યું?', 'આપણે સાથે કઈ નવી યાદ બનાવવી જોઈએ?', 'મારી કઈ વાત તને સૌથી વધારે હસાવે છે?', 'આજે તારા હૃદયને કઈ વસ્તુની સૌથી વધારે જરૂર છે?', 'આપણા માટે તારો નાનો સપનો કયો છે?', 'જો આપણે અત્યારે ક્યાંય જઈ શકીએ, તો તું મને ક્યાં લઈ જાય?']
  },
  {
    type: 'આજનું વચન 🤍',
    items: ['હું તારી વાત સાંભળવા માટે હંમેશા સમય કાઢીશ.', 'હું તારી નાની ખુશીઓને પણ ક્યારેય નાની નહીં માનું.', 'તારો ખરાબ દિવસ તને એકલી રીતે સહન ન કરવો પડે, એ માટે હું રહીશ.', 'હું તારા સપનાઓને તારા જેટલી જ ગંભીરતાથી સાચવીશ.', 'હું જીતમાં તારી સાથે હસીશ અને મુશ્કેલીમાં તારી બાજુએ ઊભો રહીશ.', 'હું પ્રેમને માત્ર શબ્દોમાં નહીં, મારી કાળજીમાં પણ બતાવતો રહીશ.']
  },
  {
    type: 'આજનું નાનું રહસ્ય 🔐',
    items: ['તું અહીં સુધી આવી છે, એટલે આ નાનું રહસ્ય હવે તારું છે: તું મારા જીવનની સૌથી સુંદર પસંદગી છે 💖', 'તારો વિચાર આવતા જ હું અજાણતાં સ્મિત કરું છું.', 'મારી મનપસંદ સૂચના હજુ પણ તારા નામની છે.', 'તારી નાની ફરિયાદો પણ મને ખાસ લાગે છે, કારણ કે તે તારી છે.', 'હું ઘણી વાર તને કંઈક કહું તે પહેલાં જ તારી યાદમાં ખોવાઈ જાઉં છું.', 'તું મારી સૌથી સુંદર અચાનક ખુશી છે.']
  }
];

const openWhenLetters = [
  ['જ્યારે તને મારી યાદ આવે', ['તું મને યાદ કરે ત્યારે વાંચજે: અંતર રસ્તાઓ વચ્ચે છે, આપણા હૃદય વચ્ચે નહીં.', 'તારી યાદ આવે ત્યારે જાણજે, મારી શુભેચ્છા હંમેશા તારી સાથે ચાલે છે.', 'આ ક્ષણે હું તારી બાજુમાં નથી, પણ મારું મન તારી નજીક જ બેઠું છે.', 'આપણી વાતો પૂરી થયા પછી પણ તારી ગરમાહટ મારા દિવસમાં રહી જાય છે.', 'તને યાદ કરવું મારા માટે ઉદાસી નહીં, તારા હોવાની મીઠી સાબિતી છે.', 'આ પત્ર વાંચતી વખતે હળવું સ્મિત કરજે; એ જ મારી સૌથી પ્રિય વાપસી છે.']],
  ['જ્યારે તું દુઃખી હોય', ['આ દુઃખ તારી આખી વાર્તા નથી. તું કિંમતી છે અને તારે બધું એકલી રીતે સહન કરવાનું નથી.', 'ધીમે શ્વાસ લે, આજનો ભાર થોડો મૂકી દે. હું તારી બાજુએ છું.', 'તું તૂટેલી નથી; તું માત્ર થાકી છે, અને થાકને આરામની જરૂર હોય છે.', 'આજે બધું ઉકેલવું જરૂરી નથી. એક નાનું પગલું પણ પૂરતું છે.', 'તારા આંસુઓને છુપાવવાની જરૂર નથી; તારી લાગણીઓ માટે મારા હૃદયમાં જગ્યા છે.', 'ખરાબ દિવસ તને નાની નથી બનાવતો. તું હજુ પણ એટલી જ પ્રિય છે.']],
  ['જ્યારે તને ઊંઘ ન આવે', ['આંખો બંધ કર; આજની ચિંતા સવાર સુધી રાહ જોઈ શકે છે. તું શાંતિને લાયક છે.', 'રાતને તારા માટે નરમ થવા દે. તારું મન હવે થોડું આરામ કરી શકે છે.', 'ધીમે ધીમે શ્વાસ લે અને કલ્પના કર કે મારી શુભરાત્રિ તારી પાસે આવીને બેઠી છે.', 'કાલની ચિંતા આજે ઉકેલવાની નથી; આ પળને ફક્ત શાંત થવા દે.', 'તારા વિચારોને એક પછી એક પસાર થવા દે, જેમ બારી બહારના શાંત વાદળો પસાર થાય છે.', 'તારી આંખો બંધ થાય ત્યારે મારી એક નાની પ્રાર્થના તને મીઠા સપનાઓ સુધી લઈ જાય.']],
  ['આપણી વચ્ચે મતભેદ થયો હોય', ['મતભેદ આપણા પ્રેમ કરતાં મોટો નથી. હું તને જીતવા નહીં, સમજવા માંગું છું.', 'થોડો સમય લઈએ, ધીમે વાત કરીએ અને એકબીજાનો હાથ ફરી પકડી લઈએ.', 'મારી વાતથી તને દુઃખ થયું હોય તો તારી લાગણી મારા અહંકાર કરતાં વધુ મહત્વની છે.', 'અપણે બંને સાચા સાબિત થવા નહીં, એકબીજાની નજીક આવવા વાત કરીશું.', 'ગુસ્સો પળનો હોઈ શકે, પણ તારા માટેનો મારો માન ક્યારેય ઓછો નહીં થાય.', 'જ્યારે મન શાંત થાય, ત્યારે ફરીથી વાત કરીએ; આપણું જોડાણ આ ક્ષણથી મોટું છે.']],
  ['જ્યારે તને આત્મવિશ્વાસની જરૂર હોય', ['તું જે વિચારે છે તેના કરતાં વધુ બહાદુર છે. હું તારા પર વિશ્વાસ કરું છું.', 'તારી અંદરનો પ્રકાશ મુશ્કેલ દિવસોથી ઓછો થતો નથી. તું કરી શકીશ.', 'તારી ધીમી પ્રગતિ પણ પ્રગતિ છે; પોતાને બીજા કોઈની ગતિથી ન માપજે.', 'તું અત્યાર સુધી જે પાર કરી ચૂકી છે, એ જ તારી અંદરની શક્તિનો પુરાવો છે.', 'ડર હોવા છતાં આગળ વધવું જ હિંમત છે, અને તારી અંદર એ હિંમત ભરપૂર છે.', 'તારે સંપૂર્ણ બનવાની જરૂર નથી; તું જેવી છે એવી જ મારી નજરે અદ્ભુત છે.']],
  ['તારા જન્મદિવસે', ['તારો જન્મ મારા માટે દુનિયાની સૌથી સુંદર ભેટની શરૂઆત છે.', 'આ નવી ઉંમર હાસ્ય, શાંતિ, સપનાઓ અને મારા અનંત પ્રેમથી ભરાય.', 'આ વર્ષ તારા મનની બધી નાની ઇચ્છાઓને ધીમે ધીમે સાચી થતી જોઈ શકે.', 'તારી દરેક નવી સવારને આત્મવિશ્વાસ, કાળજી અને સુંદર આશ્ચર્યોથી ભરેલી શુભેચ્છા.', 'આજે તું પોતાની જાતને પણ એટલો જ પ્રેમ આપજે જેટલો પ્રેમ તું બધાને આપે છે.', 'તારો ખાસ દિવસ યાદ અપાવે છે કે તું આ દુનિયાને કેટલી સુંદર બનાવી રહી છે.']]
];

const photoGallery = [
  { src: 'photos/roshni-01.jpg', category: 'સ્મિત', label: 'તારું સૌથી સુંદર સ્મિત', caption: 'આ તસવીર જોઉં ત્યારે મારી આખી દુનિયા થોડી વધુ ઉજળી લાગે છે.' },
  { src: 'photos/roshni-02.jpg', category: 'સાદગી', label: 'તારી સાદગી', caption: 'તારી સાદગીમાં એવી સુંદરતા છે જેને કોઈ સજાવટની જરૂર નથી.' },
  { src: 'photos/roshni-03.jpg', category: 'મસ્તી', label: 'તારી મસ્તી', caption: 'તું હસે ત્યારે સામાન્ય પળ પણ મારી મનપસંદ યાદ બની જાય છે.' },
  { src: 'photos/roshni-04.jpg', category: 'ખાસ પળ', label: 'મારી મનપસંદ પળ', caption: 'આ પળ કદાચ સામાન્ય હતી, પણ મારા માટે ક્યારેય સામાન્ય નહીં રહે.' },
  { src: 'photos/roshni-05.jpg', category: 'સ્મિત', label: 'આંખોમાંનો પ્રકાશ', caption: 'તારી આંખોમાં દેખાતી ખુશી મારી સૌથી પ્રિય દૃશ્ય છે.' },
  { src: 'photos/roshni-06.jpg', category: 'સાદગી', label: 'તું જેવી છે એવી', caption: 'મને તારી સૌથી વધુ ગમતી વાત એ છે કે તું પોતે રહે છે.' },
  { src: 'photos/roshni-07.jpg', category: 'મસ્તી', label: 'મારી ખુશીનું કારણ', caption: 'તારી એક નાની મજાક પણ મારા દિવસને યાદગાર બનાવી દે છે.' },
  { src: 'photos/roshni-08.jpg', category: 'ખાસ પળ', label: 'તું જાણતી પણ નથી', caption: 'તું કેટલી સુંદર છે એ કદાચ તને ખબર નથી, પણ મને દરરોજ દેખાય છે.' },
  { src: 'photos/roshni-09.jpg', category: 'સ્મિત', label: 'હળવું હાસ્ય', caption: 'તારા ચહેરા પરનું આ હળવું હાસ્ય આખી પળને ઉજળી બનાવી દે છે.' },
  { src: 'photos/roshni-10.jpg', category: 'સાદગી', label: 'શાંત સુંદરતા', caption: 'તારી શાંતિમાં પણ એક એવી સુંદર વાત છે જે મનને રોકી લે છે.' },
  { src: 'photos/roshni-11.jpg', category: 'મસ્તી', label: 'નાની મસ્તી', caption: 'તારી આ મસ્તી યાદ આવે એટલે મારા ચહેરા પર સ્મિત આવી જાય છે.' },
  { src: 'photos/roshni-12.jpg', category: 'ખાસ પળ', label: 'યાદ બની ગયેલી પળ', caption: 'સામાન્ય લાગતી આ પળ આજે મારી મનપસંદ યાદોમાંની એક છે.' },
  { src: 'photos/roshni-13.jpg', category: 'સ્મિત', label: 'આંખોનું સ્મિત', caption: 'તારી આંખોમાં છુપાયેલું સ્મિત શબ્દો કરતાં ઘણું વધારે કહી જાય છે.' },
  { src: 'photos/roshni-14.jpg', category: 'સાદગી', label: 'તારી નિર્દોષતા', caption: 'તારી નિર્દોષતા સામે દુનિયાની બધી જટિલતા થોડી સરળ લાગે છે.' },
  { src: 'photos/roshni-15.jpg', category: 'મસ્તી', label: 'હસતી પળ', caption: 'તું હસે ત્યારે સમય થોડો ધીમો પડી જાય એવી લાગણી થાય છે.' }
];

const storedFeaturedPhotoIndex = Number(localStorage.getItem('roshniFeaturedPhoto'));
let featuredPhotoIndex = Number.isInteger(storedFeaturedPhotoIndex) && storedFeaturedPhotoIndex >= 0 && storedFeaturedPhotoIndex < photoGallery.length
  ? storedFeaturedPhotoIndex
  : -1;
let heroPhotoOrder = [];
let heroPhotoPosition = 0;
let heroPhotoDirection = 'left';
let usedReasonIndexes = new Set();
let dailySecretMessage = '';
let shayariRefreshInProgress = false;
const SHAYARI_ROTATION_MS = 210000;

const dailyHeroLines = [
  ['આજની એક નાની લાગણી, ફક્ત તારા માટે', 'રોશની, તું મારા દિવસની સૌથી સુંદર શરૂઆત છે.', 'આજનું સ્મિત તારા નામે રાખજે.'],
  ['આજનો પ્રેમભર્યો સંદેશ', 'રોશની, તારી હાજરીથી મારી દુનિયા પૂર્ણ લાગે છે.', 'આ શબ્દો વાંચીને આજે થોડું વધારે હસજે.'],
  ['આજની દિલથી લખાયેલી વાત', 'રોશની, તું હોય એટલે સામાન્ય પળ પણ ખાસ બની જાય છે.', 'આજની ખુશીમાં મારું નાનું સ્થાન રાખજે.'],
  ['આજની યાદ, ફક્ત તારા માટે', 'રોશની, તારી એક ઝલક આખો દિવસ ઉજાસથી ભરી દે છે.', 'આજનો દિવસ તારા સ્મિત જેટલો નરમ રહે.']
];

function toGujaratiNumber(value) {
  return String(value)
    .split('')
    .map((digit) => gujaratiDigits[Number(digit)] ?? digit)
    .join('');
}

function getSouthCarolinaTime(date = new Date()) {
  const parts = southCarolinaFormatter.formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const month = Number(values.month);
  const day = Number(values.day);
  const year = Number(values.year);
  const weekdayIndex = new Date(Date.UTC(year, month - 1, day)).getUTCDay();

  return {
    year,
    month,
    day,
    weekday: weekdayNames[weekdayIndex],
    hour: Number(values.hour) % 12 + (values.dayPeriod === 'PM' ? 12 : 0),
    minute: Number(values.minute),
    second: Number(values.second),
    displayHour: Number(values.hour),
    dayPeriod: values.dayPeriod.toLowerCase()
  };
}

function getTimePeriod(time) {
  const hour = time.hour;
  if (hour >= 5 && hour < 12) return { label: 'સવાર', theme: 'morning' };
  if (hour >= 12 && hour < 16) return { label: 'બપોર', theme: 'afternoon' };
  if (hour >= 16 && hour < 19) return { label: 'સાંજ', theme: 'evening' };
  return { label: 'રાત', theme: 'night' };
}

function getTimeEmoji(label) {
  switch (label) {
    case 'સવાર': return '☀️';
    case 'બપોર': return '🌤️';
    case 'સાંજ': return '✨';
    default: return '🌙';
  }
}

function getTimeGreeting(time = getSouthCarolinaTime()) {
  const timeInfo = getTimePeriod(time);
  if (timeInfo.label === 'સવાર') return 'પ્રિય રોશની, શુભ સવાર ☀️';
  if (timeInfo.label === 'બપોર') return 'પ્રિય રોશની, શુભ બપોર 🌤️';
  if (timeInfo.label === 'સાંજ') return 'પ્રિય રોશની, શુભ સાંજ ✨';
  return 'પ્રિય રોશની, શુભ રાત્રી 🌙';
}

function applyExperienceTheme(period) {
  const options = themeOptions[period] || themeOptions.night;
  const previousTheme = sessionStorage.getItem('roshniTheme');
  let themeIndex = Math.floor(Math.random() * options.length);
  while (options.length > 1 && String(themeIndex) === previousTheme) {
    themeIndex = Math.floor(Math.random() * options.length);
  }
  const [backgroundOne, backgroundTwo, backgroundThree, text, accent] = options[themeIndex];
  const contrast = themeContrastTokens[period] || themeContrastTokens.night;
  document.body.dataset.theme = period;
  document.body.style.setProperty('--bg-1', backgroundOne);
  document.body.style.setProperty('--bg-2', backgroundTwo);
  document.body.style.setProperty('--bg-3', backgroundThree);
  document.body.style.setProperty('--text', text);
  document.body.style.setProperty('--muted', text);
  document.body.style.setProperty('--accent', accent);
  document.body.style.setProperty('--accent-2', contrast.accent2);
  document.body.style.setProperty('--highlight', contrast.highlight);
  document.body.style.setProperty('--card-border', contrast.border);
  document.body.style.setProperty('--glass', contrast.glass);
  sessionStorage.setItem('roshniTheme', String(themeIndex));
}

function formatAmPm(time) {
  const periodLabel = time.hour < 5 || time.hour >= 19
    ? 'રાત્રે'
    : time.hour < 12
      ? 'સવારે'
      : time.hour < 16
        ? 'બપોરે'
        : 'સાંજે';
  return `${toGujaratiNumber(time.displayHour)}:${toGujaratiNumber(String(time.minute).padStart(2, '0'))}:${toGujaratiNumber(String(time.second).padStart(2, '0'))} ${periodLabel}`;
}

function updateClock() {
  const gujaratTime = getSouthCarolinaTime();
  const day = gujaratTime.weekday;
  const time = formatAmPm(gujaratTime);
  const date = `${toGujaratiNumber(gujaratTime.day)} ${monthNames[gujaratTime.month - 1]} ${toGujaratiNumber(gujaratTime.year)}`;
  const timeInfo = getTimePeriod(gujaratTime);

  const dayElement = document.getElementById('dayDisplay');
  const dateElement = document.getElementById('dateDisplay');
  const timeElement = document.getElementById('timeDisplay');
  dayElement.textContent = gujaratTime.weekday;
  dateElement.textContent = date;
  timeElement.textContent = time;
  [dayElement, dateElement, timeElement].forEach((element) => {
    element.classList.remove('clock-tick');
    void element.offsetWidth;
    element.classList.add('clock-tick');
  });
  const moodLabels = {
    સવાર: 'સવારની નવી આશા',
    બપોર: 'બપોરની મીઠી યાદ',
    સાંજ: 'સાંજની નરમ લાગણી',
    રાત: 'રાતની શાંતિ'
  };
  document.getElementById('timeMood').textContent = `${moodLabels[timeInfo.label]} ${getTimeEmoji(timeInfo.label)}`;
  document.getElementById('letterGreeting').textContent = getTimeGreeting(gujaratTime);
  if (activePeriod !== timeInfo.theme) {
    activePeriod = timeInfo.theme;
    applyExperienceTheme(activePeriod);
  }
}

function renderShayari(index) {
  const messages = shayariByPeriod[activePeriod] || shayariList;
  const selectedIndex = index % messages.length;
  renderMessage(messages[selectedIndex]);
  markShayariUsed(selectedIndex);
}

function getUsedDisplayedTexts(storageKey) {
  try {
    const savedTexts = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return Array.isArray(savedTexts) ? savedTexts : [];
  } catch (error) {
    localStorage.removeItem(storageKey);
    return [];
  }
}

function getUniqueDisplayedText(storageKey, preferredText, fallbackText) {
  const usedTexts = getUsedDisplayedTexts(storageKey);
  const candidates = [preferredText, fallbackText].filter(Boolean);
  let selectedText = candidates.find((text) => !usedTexts.includes(text));
  if (!selectedText) {
    const naturalAlternatives = storageKey === 'roshniDisplayedFunny'
      ? ['તારી યાદ આવી એટલે આ પળ પણ હળવી થઈ ગઈ 😄', 'તારા વિચારથી મારું મન ફરીથી સ્મિત કરવા લાગ્યું 😄', 'આજે પણ તું મારી ખુશીની સૌથી મીઠી ચોરી કરી ગઈ 😄', 'તારી વાત યાદ આવી અને દિવસ થોડો વધારે સુંદર બની ગયો 😄']
      : ['આ પંક્તિમાં તારી યાદનો એક નવો નરમ રંગ છે.', 'આ શબ્દોમાં તારી હાજરીની શાંત ગરમાહટ છે.', 'આ લાગણી તારા સ્મિતથી વધુ સુંદર બની છે.', 'આ વાતમાં પણ તારા માટેનો મારો પ્રેમ ધીમે ધીમે ઝળહળે છે.'];
    selectedText = naturalAlternatives.find((text) => !usedTexts.includes(text)) || `${fallbackText || preferredText}.`;
  }
  usedTexts.push(selectedText);
  localStorage.setItem(storageKey, JSON.stringify(usedTexts.slice(-1000)));
  return selectedText;
}

function openPhotoLightbox(photo) {
  const lightbox = document.getElementById('photoLightbox');
  const image = document.getElementById('lightboxImage');
  image.src = photo.src;
  image.alt = photo.label;
  document.getElementById('lightboxCaption').textContent = `${toGujaratiNumber(String(photoGallery.indexOf(photo) + 1).padStart(2, '0'))} / ${toGujaratiNumber(String(photoGallery.length).padStart(2, '0'))} · ${photo.label} — ${photo.caption}`;
  lightbox.classList.remove('hidden');
  document.body.classList.add('lightbox-open');
  document.getElementById('lightboxClose').focus();
}

const romanticMessageOpeners = [
  'સવારના સોનેરી પ્રકાશમાં', 'બપોરની શાંત પળોમાં', 'સાંજના રંગીન આકાશ નીચે', 'ચાંદની ભરેલી રાતમાં',
  'તારી યાદ આવે ત્યારે', 'તારું સ્મિત યાદ કરતાં', 'તું મારી પાસે ન હોય ત્યારે', 'આપણી વાતો પૂરી થયા પછી',
  'મારું મન થોડું થાકી જાય ત્યારે', 'તારા નામનો વિચાર આવે ત્યારે'
];

const romanticMessageEndings = [
  'મારું હૃદય તને વધુ નજીક અનુભવે છે.', 'મારી દુનિયા અચાનક થોડી નરમ બની જાય છે.',
  'તારી હાજરી વગર પણ તારો સાથ મને મળતો રહે છે.', 'મને ફરીથી પ્રેમમાં વિશ્વાસ થવા લાગે છે.',
  'તારી ખુશી માટેની મારી નાની પ્રાર્થના વધુ સાચી બને છે.', 'મારા દરેક વિચારમાં તારા માટે જગ્યા બની રહે છે.',
  'સામાન્ય પળ પણ મારી મનપસંદ યાદ બની જાય છે.', 'મારી અંદર શાંતિનો એક નવો દીવો પ્રગટે છે.',
  'તારી સાથે વહેંચવાની એક નવી વાત જન્મે છે.', 'મને લાગે છે કે અંતર માત્ર રસ્તાઓ વચ્ચે છે, હૃદય વચ્ચે નહીં.',
  'મારો દિવસ તારા નામની નાની રોશનીથી ઉજળી જાય છે.', 'તું મારી સૌથી સુંદર અને અચાનક ખુશી બની રહે છે.'
];

const universalRomanticMessages = romanticMessageOpeners.flatMap((opener) => romanticMessageEndings.map((ending) => `${opener}, ${ending}`));

function getNextRomanticMessage() {
  const storageKey = 'roshniUniversalRomanticMessages';
  let usedMessages = getUsedDisplayedTexts(storageKey);
  let availableMessages = universalRomanticMessages.filter((message) => !usedMessages.includes(message));
  if (!availableMessages.length) {
    usedMessages = [];
    availableMessages = [...universalRomanticMessages];
  }
  const selectedMessage = availableMessages[Math.floor(Math.random() * availableMessages.length)];
  usedMessages.push(selectedMessage);
  localStorage.setItem(storageKey, JSON.stringify(usedMessages));
  return selectedMessage;
}

function getNextMoonMessage() {
  return getNextRomanticMessage();
}

const melodyBars = [
  { chord: [261.63, 329.63, 392], melody: [523.25, 587.33, 659.25, 587.33] },
  { chord: [220, 261.63, 329.63], melody: [493.88, 523.25, 587.33, 659.25] },
  { chord: [174.61, 220, 261.63], melody: [440, 493.88, 523.25, 493.88] },
  { chord: [196, 246.94, 293.66], melody: [493.88, 440, 392, 440] }
];

function playMelodyBar() {
  if (!musicContext || !musicMasterGain || !musicPlaying) return;
  const now = musicContext.currentTime;
  const bar = melodyBars[musicStep % melodyBars.length];
  bar.chord.forEach((frequency, index) => {
    const oscillator = musicContext.createOscillator();
    const gain = musicContext.createGain();
    oscillator.type = index === 1 ? 'triangle' : 'sine';
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.025, now + 0.45);
    gain.gain.linearRampToValueAtTime(0.0001, now + 3.8);
    oscillator.connect(gain).connect(musicMasterGain);
    oscillator.start(now);
    oscillator.stop(now + 4);
  });
  bar.melody.forEach((frequency, index) => {
    const start = now + index * 0.85 + 0.18;
    const oscillator = musicContext.createOscillator();
    const gain = musicContext.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(0.075, start + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.7);
    oscillator.connect(gain).connect(musicMasterGain);
    oscillator.start(start);
    oscillator.stop(start + 0.75);
  });
  musicStep += 1;
}

async function startRomanticMusic() {
  if (musicPlaying || musicStartInFlight) return;
  musicStartInFlight = true;
  const requestId = musicStartRequest + 1;
  musicStartRequest = requestId;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  try {
    if (!AudioContextClass) return;
    if (!musicContext) {
      musicContext = new AudioContextClass();
      musicMasterGain = musicContext.createGain();
      musicMasterGain.gain.value = 0.58;
      musicMasterGain.connect(musicContext.destination);
    }
    await musicContext.resume();
    if (requestId !== musicStartRequest || musicUserStopped || musicContext.state !== 'running') return;
    musicUserStopped = false;
    musicPlaying = true;
    playMelodyBar();
    musicTimer = window.setInterval(playMelodyBar, 4000);
    const button = document.getElementById('musicToggle');
    button.textContent = '♫ સંગીત બંધ કરો';
    button.setAttribute('aria-pressed', 'true');
    button.classList.add('is-playing');
    if (musicUnlockHandler) {
      document.removeEventListener('pointerdown', musicUnlockHandler);
      musicUnlockHandler = null;
    }
  } catch (error) {
    musicPlaying = false;
    updateMusicButton(false);
  } finally {
    musicStartInFlight = false;
  }
}

function updateMusicButton(isPlaying) {
  const button = document.getElementById('musicToggle');
  if (!button) return;
  button.textContent = isPlaying ? '♫ સંગીત બંધ કરો' : '♫ સંગીત ચાલુ કરો';
  button.setAttribute('aria-pressed', String(isPlaying));
  button.classList.toggle('is-playing', isPlaying);
}

async function stopRomanticMusic() {
  musicUserStopped = true;
  musicStartRequest += 1;
  musicPlaying = false;
  window.clearInterval(musicTimer);
  musicTimer = null;
  if (musicContext && musicContext.state === 'running') await musicContext.suspend();
  updateMusicButton(false);
}

function unlockMusicOnGesture(event) {
  if (event?.target?.closest('#musicToggle')) return;
  if (!musicUserStopped) startRomanticMusic().catch(() => {});
}

function setupLetterGate() {
  const gate = document.getElementById('letterGate');
  const openButton = document.getElementById('openLetterButton');
  if (sessionStorage.getItem('roshniLetterOpened') === 'true') {
    gate.classList.add('hidden');
    document.body.classList.add('letter-open');
    return;
  }
  openButton.addEventListener('click', () => {
    sessionStorage.setItem('roshniLetterOpened', 'true');
    document.body.classList.add('letter-open');
    gate.classList.add('is-opening');
    startRomanticMusic().catch(() => {});
    window.setTimeout(() => gate.classList.add('hidden'), 850);
  });
}

function setupMoonMode() {
  const button = document.getElementById('moonModeButton');
  const secret = document.getElementById('moonSecret');
  button.addEventListener('click', () => {
    const enabled = document.body.classList.toggle('moon-mode');
    if (enabled) secret.querySelector('p').textContent = getNextMoonMessage();
    secret.classList.toggle('hidden', !enabled);
    button.setAttribute('aria-pressed', String(enabled));
    button.textContent = enabled ? 'ચાંદનું રહસ્ય બંધ કરો' : 'ચાંદનું રહસ્ય 🌙';
  });
}

function closePhotoLightbox() {
  document.getElementById('photoLightbox').classList.add('hidden');
  document.body.classList.remove('lightbox-open');
}

function markDisplayedShayari(text) {
  const usedTexts = getUsedDisplayedTexts('roshniDisplayedShayari');
  if (!usedTexts.includes(text)) {
    usedTexts.push(text);
    localStorage.setItem('roshniDisplayedShayari', JSON.stringify(usedTexts.slice(-1000)));
  }
}

function animateHandwrittenText(element, text) {
  shayariTypingId += 1;
  const typingId = shayariTypingId;
  const characters = Array.from(text);
  let characterIndex = 0;
  element.textContent = '';
  element.classList.add('is-writing');
  element.setAttribute('aria-label', text);
  const writeNextCharacter = () => {
    if (typingId !== shayariTypingId) return;
    element.textContent = characters.slice(0, characterIndex + 1).join('');
    characterIndex += 1;
    if (characterIndex < characters.length) {
      window.setTimeout(writeNextCharacter, 22);
    } else {
      element.classList.remove('is-writing');
    }
  };
  writeNextCharacter();
}

function advancePhotoFilm() {
  const gallery = document.getElementById('memoryGallery');
  if (!gallery || document.body.classList.contains('spotlight-active') || document.hidden || gallery.dataset.userScrolling === 'true') return;
  const card = gallery.querySelector('.memory-photo-card');
  if (!card) return;
  const step = card.getBoundingClientRect().width + 13;
  const atEnd = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - step;
  gallery.scrollTo({ left: atEnd ? 0 : gallery.scrollLeft + step, behavior: 'smooth' });
}

function renderMessage(selected) {
  if (!selected) return;
  const shayariText = String(selected.text || '').replaceAll('\n', ' ');
  const shayariElement = document.getElementById('shayariText');
  const reasonElement = document.getElementById('loveReason');
  const secretElement = document.getElementById('secretMessage');
  const nextReason = selected.reason || '';
  const nextSecret = selected.secret || '';
  const reasonFallback = `આ પંક્તિમાં તારી યાદનો નવો રંગ છે: ${shayariText}`;
  const reason = getUniqueDisplayedText('roshniDisplayedReasons', nextReason, reasonFallback);
  const secret = dailySecretMessage || (nextSecret === secretElement.textContent && shayariText !== shayariElement.textContent
    ? `આજનું નાનું રહસ્ય: ${shayariText} તારી ખુશી મારી સૌથી પ્રિય વાત છે 💖`
    : nextSecret);
  const funny = getUniqueDisplayedText('roshniDisplayedFunny', selected.funny || '', `તારી યાદથી આ પળ પણ સ્મિતથી ભરાઈ ગઈ 😄`);

  animateHandwrittenText(shayariElement, shayariText);
  document.getElementById('letterGreeting').textContent = getTimeGreeting(getSouthCarolinaTime());
  document.getElementById('funnyLine').textContent = funny;
  reasonElement.textContent = reason;
  secretElement.textContent = secret;
  markDisplayedShayari(shayariText);
  document.getElementById('reasonTitle').textContent = 'આ શાયરી તારા માટે કેમ ખાસ છે 🌷';
  const revealButton = document.getElementById('revealButton');
  revealButton.textContent = document.getElementById('secretMessage').classList.contains('hidden') ? 'સંકેત ખોલો 💌' : 'સંકેત બંધ કરો 🔒';
}

function formatSharedTime(value) {
  if (!value) return '--';
  const time = getSouthCarolinaTime(new Date(value));
  return `${toGujaratiNumber(time.day)} ${monthNames[time.month - 1]}, ${formatAmPm(time)}`;
}

function updateSharedStats(result) {
  const lastCreated = document.getElementById('lastShayariCreated');
  const nextCreated = document.getElementById('nextShayariCreated');
  if (lastCreated) lastCreated.textContent = formatSharedTime(result.last_created_at);
  if (nextCreated) nextCreated.textContent = formatSharedTime(result.next_created_at);
}

async function callSupabase(functionName, body) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(`${supabaseConfig.url}/rest/v1/rpc/${functionName}`, {
      method: 'POST',
      headers: {
        apikey: supabaseConfig.anonKey,
        Authorization: `Bearer ${supabaseConfig.anonKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      signal: controller.signal
    });

    if (!response.ok) throw new Error(`Supabase request failed: ${response.status}`);
    return response.json();
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function loadSharedShayari() {
  if (!hasSupabase) return false;

  try {
    const now = getSouthCarolinaTime();
    const result = await callSupabase('get_roshni_current_shayari', {
      p_slot: getHalfHourSlot(now),
      p_next_time: getNextBoundary().toISOString()
    });
    if (getUsedDisplayedTexts('roshniDisplayedShayari').includes(String(result.text || '').replaceAll('\n', ' '))) {
      currentShayariIndex = randomShayariIndex();
      renderShayari(currentShayariIndex);
      return false;
    }
    renderMessage(result);
    updateSharedStats(result);
    return true;
  } catch (error) {
    console.warn('Shared shayari unavailable.', error);
    return false;
  }
}

function getNextBoundary() {
  return new Date(Date.now() + (30 * 60 * 1000));
}

function getHalfHourSlot(date) {
  const wallClockValue = Date.UTC(date.year, date.month - 1, date.day, date.hour, date.minute);
  return Math.floor(wallClockValue / (30 * 60 * 1000));
}

function pickTimeBasedIndex(time = getSouthCarolinaTime()) {
  const period = getTimePeriod(time).theme;
  return getHalfHourSlot(time) % shayariByPeriod[period].length;
}

function getUsedShayariIndexes() {
  try {
    return new Set(JSON.parse(localStorage.getItem('roshniUsedShayari') || '[]'));
  } catch (error) {
    return new Set();
  }
}

function markShayariUsed(index) {
  const usedIndexes = getUsedShayariIndexes();
  const selected = (shayariByPeriod[activePeriod] || shayariList)[index];
  const messageKey = selected ? `${selected.period}:${selected.text}` : `${activePeriod}:${index}`;
  usedIndexes.add(messageKey);
  localStorage.setItem('roshniUsedShayari', JSON.stringify([...usedIndexes]));
}

function randomShayariIndex() {
  const messages = shayariByPeriod[activePeriod] || shayariList;
  let usedIndexes = getUsedShayariIndexes();
  const availableIndexes = messages
    .map((message, index) => ({ message, index }))
    .filter(({ message }) => !usedIndexes.has(`${message.period}:${message.text}`));
  if (availableIndexes.length === 0) {
    usedIndexes = new Set();
    localStorage.removeItem('roshniUsedShayari');
    return Math.floor(Math.random() * messages.length);
  }
  return availableIndexes[Math.floor(Math.random() * availableIndexes.length)].index;
}

async function rotateShayari() {
  if (await loadSharedShayari()) return;
  currentShayariIndex = randomShayariIndex();
  renderShayari(currentShayariIndex);
}

async function createNewSharedShayari() {
  const result = await callSupabase('create_roshni_manual_shayari', {
    p_slot: getHalfHourSlot(getSouthCarolinaTime()),
    p_next_time: getNextBoundary().toISOString()
  });
  renderMessage(result);
  updateSharedStats(result);
}

function markLoveNoteRead() {
  const readCount = Number(sessionStorage.getItem('roshniLoveNotesRead') || 0) + 1;
  sessionStorage.setItem('roshniLoveNotesRead', String(readCount));
  if (readCount >= 3) document.getElementById('unlockedMessage').classList.remove('hidden');
}

function renderLoveJourney() {
  const experienceNumber = Number(localStorage.getItem('roshniDailyExperienceNumber') || 0);
  const heartCount = Number(localStorage.getItem('roshniHeartCount') || 0);
  const openedLetters = Object.keys(localStorage).filter((key) => key.startsWith('roshniOpenedLetter:')).length;
  const promise = dailySurprises[4].items[experienceNumber % dailySurprises[4].items.length];

  document.getElementById('journeyDays').textContent = `${toGujaratiNumber(experienceNumber)} ખાસ દિવસો`;
  document.getElementById('journeyHearts').textContent = toGujaratiNumber(heartCount);
  document.getElementById('journeyLetters').textContent = toGujaratiNumber(openedLetters);
}

function getDailyExperienceNumber() {
  const storedNumber = Number(localStorage.getItem('roshniDailyExperienceNumber') || 0);
  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: SOUTH_CAROLINA_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date());
  const lastDate = localStorage.getItem('roshniDailyExperienceDate');
  if (lastDate !== today) {
    localStorage.setItem('roshniDailyExperienceDate', today);
    localStorage.setItem('roshniDailyExperienceNumber', String(storedNumber + 1));
    return storedNumber + 1;
  }
  return storedNumber;
}

function getNextDailySurprise() {
  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: SOUTH_CAROLINA_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date());
  const savedDate = localStorage.getItem('roshniDailySurpriseDate');
  const savedSurprise = localStorage.getItem('roshniDailySurprise');
  if (savedDate === today && savedSurprise) {
    try {
      const parsedSurprise = JSON.parse(savedSurprise);
      if (parsedSurprise && parsedSurprise.type && parsedSurprise.item) return parsedSurprise;
    } catch (error) {
      localStorage.removeItem('roshniDailySurprise');
    }
  }

  const surprisePool = dailySurprises.flatMap((surprise) => surprise.items.map((item) => ({ type: surprise.type, item })));
  let savedSurprises = [];
  try {
    savedSurprises = JSON.parse(localStorage.getItem('roshniUsedSurprises') || '[]');
  } catch (error) {
    localStorage.removeItem('roshniUsedSurprises');
  }
  const usedSurprises = new Set(Array.isArray(savedSurprises) ? savedSurprises : []);
  let available = surprisePool.filter(({ item }) => !usedSurprises.has(item));
  if (available.length === 0) {
    localStorage.removeItem('roshniUsedSurprises');
    available = surprisePool;
  }
  const selected = available[Math.floor(Math.random() * available.length)];
  usedSurprises.add(selected.item);
  localStorage.setItem('roshniUsedSurprises', JSON.stringify([...usedSurprises]));
  localStorage.setItem('roshniDailySurpriseDate', today);
  localStorage.setItem('roshniDailySurprise', JSON.stringify(selected));
  return selected;
}

function getTodayKey() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: SOUTH_CAROLINA_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date());
}

function getNextUniqueDailyValue(storageKey, values) {
  const today = getTodayKey();
  const dateKey = `roshni${storageKey}Date`;
  const valueKey = `roshni${storageKey}Value`;
  if (localStorage.getItem(dateKey) === today) {
    try {
      return JSON.parse(localStorage.getItem(valueKey));
    } catch (error) {
      localStorage.removeItem(valueKey);
    }
  }

  let usedValues = [];
  try {
    const savedValues = JSON.parse(localStorage.getItem(`roshni${storageKey}Used`) || '[]');
    usedValues = Array.isArray(savedValues) ? savedValues : [];
  } catch (error) {
    localStorage.removeItem(`roshni${storageKey}Used`);
  }
  let availableValues = values.filter((value) => !usedValues.some((usedValue) => JSON.stringify(usedValue) === JSON.stringify(value)));
  if (!availableValues.length) {
    usedValues = [];
    availableValues = [...values];
  }
  const selectedValue = availableValues[Math.floor(Math.random() * availableValues.length)];
  usedValues.push(selectedValue);
  localStorage.setItem(`roshni${storageKey}Used`, JSON.stringify(usedValues));
  localStorage.setItem(dateKey, today);
  localStorage.setItem(valueKey, JSON.stringify(selectedValue));
  return selectedValue;
}

function getNextUniqueReasonIndex() {
  let usedIndexes = [];
  try {
    const savedIndexes = JSON.parse(localStorage.getItem('roshniUsedReasons') || '[]');
    usedIndexes = Array.isArray(savedIndexes) ? savedIndexes : [];
  } catch (error) {
    localStorage.removeItem('roshniUsedReasons');
  }
  let availableIndexes = loveReasons.map((reason, index) => index).filter((index) => !usedIndexes.includes(index));
  if (!availableIndexes.length) {
    usedIndexes = [];
    availableIndexes = loveReasons.map((reason, index) => index);
  }
  const selectedIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
  usedIndexes.push(selectedIndex);
  localStorage.setItem('roshniUsedReasons', JSON.stringify(usedIndexes));
  return selectedIndex;
}

function renderDailyLoveExperience() {
  const experienceNumber = getDailyExperienceNumber();
  const reasonIndex = getNextUniqueReasonIndex();
  const surprise = getNextDailySurprise();
  const promise = getNextUniqueDailyValue('Promise', dailySurprises[4].items);
  const secret = getNextRomanticMessage();
  const heroLine = getNextUniqueDailyValue('HeroLine', dailyHeroLines);

  document.getElementById('reasonNumber').textContent = `કારણ ${toGujaratiNumber(reasonIndex + 1)}`;
  document.getElementById('dailyReason').textContent = loveReasons[reasonIndex];
  document.getElementById('surpriseType').textContent = surprise.type;
  document.getElementById('dailySurprise').textContent = surprise.item;
  document.getElementById('journeyPromise').textContent = promise;
  dailySecretMessage = secret;
  document.getElementById('secretMessage').textContent = dailySecretMessage;
  document.getElementById('loveCounter').textContent = `${toGujaratiNumber(experienceNumber)} ખાસ દિવસોની લાગણી સાચવાઈ છે`;
  document.getElementById('heroOverline').textContent = heroLine[0];
  document.getElementById('heroTitle').textContent = heroLine[1];
  document.getElementById('heroSubtitle').textContent = heroLine[2];
}

function getNextUniqueLetterMessage(index, messages) {
  const storageKey = `roshniUsedLetterMessages:${index}`;
  let usedMessages = [];
  try {
    const savedMessages = JSON.parse(localStorage.getItem(storageKey) || '[]');
    usedMessages = Array.isArray(savedMessages) ? savedMessages : [];
  } catch (error) {
    localStorage.removeItem(storageKey);
  }
  let availableMessages = messages.filter((message) => !usedMessages.includes(message));
  if (!availableMessages.length) {
    usedMessages = [];
    availableMessages = [...messages];
  }
  const selectedMessage = availableMessages[Math.floor(Math.random() * availableMessages.length)];
  usedMessages.push(selectedMessage);
  localStorage.setItem(storageKey, JSON.stringify(usedMessages));
  return selectedMessage;
}

function renderOpenWhenLetters() {
  const list = document.getElementById('openWhenList');
  list.innerHTML = '';
  openWhenLetters.forEach(([title, messages], index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'open-when-button';
    button.textContent = title;
    button.addEventListener('click', () => {
      const letter = document.getElementById('openWhenLetter');
      if (button.classList.contains('selected')) {
        letter.classList.add('hidden');
        button.classList.remove('selected');
        return;
      }
      letter.textContent = getNextUniqueLetterMessage(index, messages);
      letter.classList.remove('hidden');
      list.querySelectorAll('button').forEach((item) => item.classList.remove('selected'));
      button.classList.add('selected');
      markLoveNoteRead();
      localStorage.setItem(`roshniOpenedLetter:${index}`, 'true');
      renderLoveJourney();
    });
    list.appendChild(button);
  });
}

function renderHeroPhoto() {
  if (!heroPhotoOrder.length || heroPhotoPosition >= heroPhotoOrder.length) {
    heroPhotoOrder = photoGallery
      .map((photo, index) => ({ photo, index, sort: Math.random() }))
      .sort((first, second) => first.sort - second.sort)
      .map(({ index }) => index);
    heroPhotoPosition = 0;
  }

  const photoIndex = heroPhotoOrder[heroPhotoPosition];
  const photo = photoGallery[photoIndex];
  const image = document.getElementById('heroPhotoImage');
  const frame = document.querySelector('.hero-photo');
  const updateCaption = () => {
    image.alt = photo.label;
    document.getElementById('heroPhotoIndex').textContent = `${toGujaratiNumber(String(photoIndex + 1).padStart(2, '0'))} / ${toGujaratiNumber(String(photoGallery.length).padStart(2, '0'))}`;
    document.getElementById('heroPhotoCaption').textContent = photo.caption;
    frame.classList.remove('photo-enter-left', 'photo-enter-right');
    void frame.offsetWidth;
    frame.classList.add(`photo-enter-${heroPhotoDirection}`);
    heroPhotoDirection = heroPhotoDirection === 'left' ? 'right' : 'left';
    window.setTimeout(() => frame.classList.remove('photo-enter-left', 'photo-enter-right'), 900);
  };
  image.addEventListener('load', updateCaption, { once: true });
  image.src = photo.src;
  image.onclick = () => openPhotoLightbox(photo);
  image.setAttribute('title', 'મોટી તસવીર જોવા સ્પર્શ કરો');
  if (image.complete) updateCaption();
  heroPhotoPosition += 1;
}

function renderPhotoGallery(activeCategory = 'બધી તસવીરો') {
  const filters = document.getElementById('galleryFilters');
  const gallery = document.getElementById('memoryGallery');
  const categories = ['બધી તસવીરો', ...new Set(photoGallery.map((photo) => photo.category))];
  filters.innerHTML = '';
  categories.forEach((category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `gallery-filter${category === activeCategory ? ' selected' : ''}`;
    button.textContent = category;
    button.addEventListener('click', () => renderPhotoGallery(category));
    filters.appendChild(button);
  });

  gallery.innerHTML = '';
  photoGallery
    .filter((photo) => activeCategory === 'બધી તસવીરો' || photo.category === activeCategory)
    .forEach((photo) => {
      const card = document.createElement('article');
      const photoIndex = photoGallery.indexOf(photo);
      card.className = `memory-photo-card${photoIndex === featuredPhotoIndex && activeCategory === 'બધી તસવીરો' ? ' featured-memory' : ''}`;
      card.style.setProperty('--reel-delay', `${Math.min(photoIndex, 10) * 0.04}s`);

      const frame = document.createElement('div');
      frame.className = 'photo-frame locked-photo';
      const image = document.createElement('img');
      image.src = photo.src;
      image.alt = photo.label;
      image.loading = 'eager';
      image.addEventListener('error', () => {
        frame.classList.add('missing-photo');
        image.remove();
      });
      image.addEventListener('click', () => openPhotoLightbox(photo));
      image.setAttribute('title', 'મોટી તસવીર જોવા સ્પર્શ કરો');
      const placeholder = document.createElement('span');
      placeholder.className = 'photo-placeholder';
      placeholder.textContent = 'અહીં તારી તસવીર આવશે';
      frame.append(image, placeholder);

      const revealButton = document.createElement('button');
      revealButton.type = 'button';
      revealButton.className = 'photo-reveal-button';
      revealButton.textContent = 'પળ ખોલો';
      revealButton.addEventListener('click', () => {
        frame.classList.remove('locked-photo');
        revealButton.textContent = 'પળ ખુલ્લી છે';
        revealButton.disabled = true;
        markLoveNoteRead();
      });

      const spotlightButton = document.createElement('button');
      spotlightButton.type = 'button';
      spotlightButton.className = 'photo-spotlight-button';
      spotlightButton.textContent = 'ફોકસ કરો ✦';
      spotlightButton.addEventListener('click', () => {
        if (card.classList.contains('spotlight-card')) {
          clearPhotoSpotlight();
          return;
        }
        document.querySelectorAll('.memory-photo-card.spotlight-card').forEach((item) => item.classList.remove('spotlight-card'));
        card.classList.add('spotlight-card');
        document.body.classList.add('spotlight-active');
        document.getElementById('clearSpotlightButton').classList.remove('hidden');
        card.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      });

      const label = document.createElement('p');
      label.className = 'photo-label';
      label.textContent = photo.label;
      const reelIndex = document.createElement('span');
      reelIndex.className = 'photo-reel-index';
      reelIndex.textContent = `${toGujaratiNumber(String(photoIndex + 1).padStart(2, '0'))} / ${toGujaratiNumber(String(photoGallery.length).padStart(2, '0'))}`;
      const caption = document.createElement('p');
      caption.className = 'photo-caption';
      caption.textContent = photo.caption;
      card.append(frame, revealButton, spotlightButton, reelIndex, label, caption);
      gallery.appendChild(card);
    });
}

function clearPhotoSpotlight() {
  document.querySelectorAll('.memory-photo-card.spotlight-card').forEach((card) => card.classList.remove('spotlight-card'));
  document.body.classList.remove('spotlight-active');
  document.getElementById('clearSpotlightButton').classList.add('hidden');
}

function createFloatingLoveNote(kind = 'male') {
  const container = document.getElementById('floatingNotes');
  if (!container || floatingWhisperActive) return;
  floatingWhisperActive = true;
  const note = document.createElement('span');
  note.className = `floating-love-note ${kind === 'gujarati' ? 'floating-gujarati-note' : 'floating-male-note'}`;
  if (kind === 'male') {
    const man = document.createElement('span');
    man.className = 'floating-love-man';
    man.textContent = '👦🏻';
    note.append(man);
  }
  const message = document.createElement('span');
  message.textContent = kind === 'gujarati' ? getNextFloatingGujaratiNote() : getNextFloatingLoveNote();
  note.append(message);
  note.style.setProperty('--note-left', `${8 + Math.random() * 72}%`);
  note.style.setProperty('--note-drift', `${-18 + Math.random() * 36}px`);
  note.style.setProperty('--note-delay', `${Math.random() * 0.5}s`);
  container.appendChild(note);
  window.setTimeout(() => {
    note.remove();
    floatingWhisperActive = false;
  }, 9200);
}

function scheduleFloatingLoveNote(kind = 'gujarati') {
  const delay = kind === 'gujarati'
    ? 10000 + Math.random() * 5000
    : 30000 + Math.random() * 15000;
  window.setTimeout(() => {
    if (!floatingWhisperActive) createFloatingLoveNote(kind);
    scheduleFloatingLoveNote(kind);
  }, delay);
}

function renderConstellation() {
  const constellation = document.getElementById('constellation');
  if (!constellation) return;
  for (let index = 0; index < 14; index += 1) {
    const star = document.createElement('span');
    star.className = 'constellation-star';
    star.style.setProperty('--star-x', `${12 + ((index * 37) % 76)}%`);
    star.style.setProperty('--star-y', `${18 + ((index * 53) % 62)}%`);
    star.style.setProperty('--star-delay', `${index * 0.12}s`);
    constellation.appendChild(star);
  }
  document.getElementById('constellationMessage').textContent = `${constellationNames[0]} ✦ ${constellationNames[1]} — એક આકાશ, અનંત યાદો.`;
}

function createHeartShower() {
  const heartShower = document.getElementById('heartShower');
  for (let index = 0; index < 16; index += 1) {
    const heart = document.createElement('span');
    const [color, symbol] = heartRainStyles[heartRainIndex % heartRainStyles.length];
    heartRainIndex += 1;
    heart.className = 'entrance-heart';
    heart.textContent = symbol;
    heart.style.setProperty('--heart-color', color);
    heart.style.setProperty('--heart-left', `${4 + ((index * 29) % 92)}%`);
    heart.style.setProperty('--heart-size', `${0.7 + (index % 4) * 0.2}rem`);
    heart.style.setProperty('--heart-delay', `${index * 0.11}s`);
    heartShower.appendChild(heart);
    window.setTimeout(() => heart.remove(), 3800);
  }
}

function createLovePetalShower() {
  const shower = document.getElementById('lovePetalShower');
  const symbols = ['✦', '✧', '·', '❀'];
  for (let index = 0; index < 10; index += 1) {
    const petal = document.createElement('span');
    petal.className = 'love-petal';
    petal.textContent = symbols[index % symbols.length];
    petal.style.setProperty('--petal-left', `${5 + ((index * 37) % 90)}%`);
    petal.style.setProperty('--petal-size', `${0.55 + (index % 3) * 0.18}rem`);
    petal.style.setProperty('--petal-delay', `${index * 0.16}s`);
    petal.style.setProperty('--petal-drift', `${(index % 2 ? 1 : -1) * (12 + index * 2)}px`);
    shower.appendChild(petal);
    window.setTimeout(() => petal.remove(), 4600);
  }
}

function createClickHeart(event) {
  const heart = document.createElement('span');
  heart.className = 'click-heart';
  heart.textContent = Math.random() > 0.5 ? '♡' : '♥';
  heart.style.left = `${event.clientX}px`;
  heart.style.top = `${event.clientY}px`;
  document.body.appendChild(heart);
  window.setTimeout(() => heart.remove(), 900);
}

function setupLoveInteractions() {
  setupLetterGate();
  setupMoonMode();
  document.getElementById('musicToggle').addEventListener('click', () => {
    if (musicPlaying || musicStartInFlight) stopRomanticMusic();
    else {
      musicUserStopped = false;
      startRomanticMusic();
    }
  });
  startRomanticMusic().catch(() => {});
  musicUnlockHandler = unlockMusicOnGesture;
  document.addEventListener('pointerdown', musicUnlockHandler, { passive: true });
  createHeartShower();
  createLovePetalShower();
  scheduleFloatingLoveNote('gujarati');
  scheduleFloatingLoveNote('male');
  renderDailyLoveExperience();
  const initialReason = Number(document.getElementById('reasonNumber').textContent.replace(/\D/g, '')) - 1;
  if (Number.isInteger(initialReason) && initialReason >= 0) usedReasonIndexes.add(initialReason);
  renderLoveJourney();
  renderOpenWhenLetters();
  featuredPhotoIndex = (featuredPhotoIndex + 1) % photoGallery.length;
  localStorage.setItem('roshniFeaturedPhoto', String(featuredPhotoIndex));
  renderHeroPhoto();
  renderPhotoGallery();
  const gallery = document.getElementById('memoryGallery');
  ['pointerdown', 'touchstart', 'wheel'].forEach((eventName) => {
    gallery.addEventListener(eventName, () => {
      gallery.dataset.userScrolling = 'true';
      window.clearTimeout(galleryInteractionTimer);
      galleryInteractionTimer = window.setTimeout(() => {
        gallery.dataset.userScrolling = 'false';
      }, 7000);
    }, { passive: true });
  });
  renderConstellation();
  document.getElementById('clearSpotlightButton').addEventListener('click', clearPhotoSpotlight);

  const heartCountKey = 'roshniHeartCount';
  const heartCount = document.getElementById('heartCount');
  heartCount.textContent = toGujaratiNumber(Number(localStorage.getItem(heartCountKey) || 0));
  document.getElementById('heartButton').addEventListener('click', () => {
    const nextCount = Number(localStorage.getItem(heartCountKey) || 0) + 1;
    localStorage.setItem(heartCountKey, String(nextCount));
    heartCount.textContent = toGujaratiNumber(nextCount);
    document.getElementById('heartResponse').textContent = nextCount === 1
      ? 'મળી ગઈ તારી પહેલી ધડકન 💗'
      : `હવે મારી પાસે તારી ${toGujaratiNumber(nextCount)} ધડકનો છે 💗`;
    document.getElementById('heartButton').classList.add('heart-sent');
    setTimeout(() => document.getElementById('heartButton').classList.remove('heart-sent'), 500);
    renderLoveJourney();
    markLoveNoteRead();
  });

  document.getElementById('anotherReasonButton').addEventListener('click', () => {
    const nextIndex = getNextUniqueReasonIndex();
    usedReasonIndexes.add(nextIndex);
    document.getElementById('reasonNumber').textContent = `કારણ ${toGujaratiNumber(nextIndex + 1)}`;
    document.getElementById('dailyReason').textContent = loveReasons[nextIndex];
    markLoveNoteRead();
  });

  document.getElementById('surpriseButton').addEventListener('click', () => {
    const surprise = document.getElementById('dailySurprise');
    surprise.classList.toggle('surprise-hidden');
    surprise.classList.toggle('surprise-revealed');
    document.getElementById('surpriseButton').textContent = surprise.classList.contains('surprise-hidden') ? 'સરપ્રાઇઝ ખોલો ✨' : 'સરપ્રાઇઝ બંધ કરો';
    markLoveNoteRead();
  });

  document.addEventListener('pointerdown', createClickHeart, { passive: true });
  window.setInterval(renderHeroPhoto, 4500);
  window.setInterval(advancePhotoFilm, 10000);
  window.setInterval(createHeartShower, 5200);
  window.setInterval(createLovePetalShower, 6800);
}

function initializePage() {
  updateClock();
  setupLoveInteractions();
  currentShayariIndex = randomShayariIndex();
  if (!hasSupabase) {
    renderShayari(currentShayariIndex);
  }
  if (hasSupabase) {
    loadSharedShayari().then((loaded) => {
      if (!loaded) renderShayari(currentShayariIndex);
    }).catch((error) => {
      console.warn('Shared shayari unavailable.', error);
      renderShayari(currentShayariIndex);
    });
  }
}

document.getElementById('refreshButton').addEventListener('click', async () => {
  if (shayariRefreshInProgress) return;
  shayariRefreshInProgress = true;
  const refreshButton = document.getElementById('refreshButton');
  refreshButton.disabled = true;
  if (hasSupabase) {
    const previousText = document.getElementById('shayariText').textContent;
    const displayedTextsBeforeRefresh = getUsedDisplayedTexts('roshniDisplayedShayari');
    try {
      await createNewSharedShayari();
      const nextText = document.getElementById('shayariText').textContent;
      if (nextText === previousText || displayedTextsBeforeRefresh.includes(nextText)) {
        currentShayariIndex = randomShayariIndex();
        renderShayari(currentShayariIndex);
      }
    } catch (error) {
      console.warn('Shared shayari unavailable; using local fallback.', error);
      currentShayariIndex = randomShayariIndex();
      renderShayari(currentShayariIndex);
    }
  } else {
    currentShayariIndex = randomShayariIndex();
    renderShayari(currentShayariIndex);
  }
  shayariRefreshInProgress = false;
  refreshButton.disabled = false;
});

document.getElementById('revealButton').addEventListener('click', () => {
  const secretMessage = document.getElementById('secretMessage');
  secretMessage.classList.toggle('hidden');
  const button = document.getElementById('revealButton');
  button.textContent = secretMessage.classList.contains('hidden') ? 'સંકેત ખોલો 💌' : 'સંકેત બંધ કરો 🔒';
});

document.getElementById('lightboxClose').addEventListener('click', closePhotoLightbox);
document.getElementById('photoLightbox').addEventListener('click', (event) => {
  if (event.target.id === 'photoLightbox') closePhotoLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !document.getElementById('photoLightbox').classList.contains('hidden')) closePhotoLightbox();
});

setInterval(() => {
  updateClock();
}, 1000);

setInterval(() => {
  if (!shayariRefreshInProgress) rotateShayari();
}, SHAYARI_ROTATION_MS);

initializePage();
