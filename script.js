const shayariList = [
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

const weekdayNames = ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર'];
const monthNames = ['જાન્યુઆરી', 'ફેબ્રુઆરી', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઈ', 'ઓગસ્ટ', 'સપ્ટેમ્બર', 'ઓક્ટોબર', 'નવેમ્બર', 'ડિસેમ્બર'];
const gujaratiDigits = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];
const SOUTH_CAROLINA_TIME_ZONE = 'America/New_York';
const shayariCountKey = 'roshniShayariCreatedCount';
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
const supabaseConfig = window.SUPABASE_CONFIG || { url: '', anonKey: '' };
const hasSupabase = Boolean(supabaseConfig.url && supabaseConfig.anonKey);

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

function formatAmPm(time) {
  return `${toGujaratiNumber(time.displayHour)}:${toGujaratiNumber(String(time.minute).padStart(2, '0'))}:${toGujaratiNumber(String(time.second).padStart(2, '0'))} ${time.dayPeriod}`;
}

function updateClock() {
  const southCarolinaTime = getSouthCarolinaTime();
  const day = southCarolinaTime.weekday;
  const time = formatAmPm(southCarolinaTime);
  const date = `${toGujaratiNumber(southCarolinaTime.day)} ${monthNames[southCarolinaTime.month - 1]} ${toGujaratiNumber(southCarolinaTime.year)}`;
  const timeInfo = getTimePeriod(southCarolinaTime);

  document.getElementById('dateDisplay').textContent = date;
  document.getElementById('dayDisplay').textContent = day;
  document.getElementById('timeDisplay').textContent = time;
  document.getElementById('timeMood').textContent = `${timeInfo.label}ની રોશની ${getTimeEmoji(timeInfo.label)}`;
  document.body.dataset.theme = timeInfo.theme;
}

function typewriter(element, text, speed = 22) {
  element.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i += 1;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

function renderShayari(index) {
  renderMessage(shayariList[index]);
}

function renderMessage(selected) {
  typewriter(document.getElementById('shayariText'), selected.text.split('\n').join(' '));
  document.getElementById('letterGreeting').textContent = getTimeGreeting(getSouthCarolinaTime());
  document.getElementById('funnyLine').textContent = selected.funny;
  document.getElementById('loveReason').textContent = selected.reason;
  document.getElementById('secretMessage').textContent = selected.secret;
}

function formatSharedTime(value) {
  if (!value) return '--';
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: SOUTH_CAROLINA_TIME_ZONE,
    day: '2-digit',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  }).format(new Date(value));
}

function updateSharedStats(result) {
  document.getElementById('shayariCount').textContent = String(result.total_created ?? 0);
  document.getElementById('lastShayariCreated').textContent = formatSharedTime(result.last_created_at);
  document.getElementById('nextShayariCreated').textContent = formatSharedTime(result.next_created_at);
}

async function callSupabase(functionName, body) {
  const response = await fetch(`${supabaseConfig.url}/rest/v1/rpc/${functionName}`, {
    method: 'POST',
    headers: {
      apikey: supabaseConfig.anonKey,
      Authorization: `Bearer ${supabaseConfig.anonKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) throw new Error(`Supabase request failed: ${response.status}`);
  return response.json();
}

async function loadSharedShayari() {
  if (!hasSupabase) return false;

  try {
    const now = getSouthCarolinaTime();
    const result = await callSupabase('get_current_shayari', {
      p_slot: getHalfHourSlot(now),
      p_next_time: getNextBoundary().toISOString()
    });
    renderMessage(result);
    updateSharedStats(result);
    return true;
  } catch (error) {
    console.warn('Shared shayari unavailable; using local fallback.', error);
    return false;
  }
}

function getNextBoundary() {
  const now = getSouthCarolinaTime();
  const secondsUntilBoundary = ((30 - (now.minute % 30)) * 60) - now.second;
  return new Date(Date.now() + Math.max(secondsUntilBoundary * 1000, 1000));
}

function getHalfHourSlot(date) {
  const wallClockValue = Date.UTC(date.year, date.month - 1, date.day, date.hour, date.minute);
  return Math.floor(wallClockValue / (30 * 60 * 1000));
}

function pickTimeBasedIndex(time = getSouthCarolinaTime()) {
  return getHalfHourSlot(time) % shayariList.length;
}

function randomShayariIndex() {
  let next = Math.floor(Math.random() * shayariList.length);
  if (next === currentShayariIndex && shayariList.length > 1) {
    next = (next + 1) % shayariList.length;
  }
  return next;
}

async function rotateShayari() {
  if (await loadSharedShayari()) return;
  currentShayariIndex = pickTimeBasedIndex();
  renderShayari(currentShayariIndex);
  incrementShayariCount();
}

function incrementShayariCount() {
  const nextCount = Number(localStorage.getItem(shayariCountKey) || 0) + 1;
  localStorage.setItem(shayariCountKey, String(nextCount));
  document.getElementById('shayariCount').textContent = String(nextCount);
}

function getVisitLog() {
  const raw = localStorage.getItem('roshniLovePageLogs');
  return raw ? JSON.parse(raw) : [];
}

function updateVisitLog() {
  const logs = getVisitLog();
  const entry = new Intl.DateTimeFormat('en-IN', {
    timeZone: SOUTH_CAROLINA_TIME_ZONE,
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  }).format(new Date());

  logs.unshift(entry);
  const trimmed = logs.slice(0, 10);
  localStorage.setItem('roshniLovePageLogs', JSON.stringify(trimmed));

  document.getElementById('visitCount').textContent = String(trimmed.length);
  document.getElementById('lastVisit').textContent = entry;

  const list = document.getElementById('visitLogs');
  list.innerHTML = trimmed.map((item) => `<li>${item}</li>`).join('');
}

function initializePage() {
  currentShayariIndex = pickTimeBasedIndex();
  renderShayari(currentShayariIndex);
  if (!hasSupabase) incrementShayariCount();
  updateClock();
  updateVisitLog();
  loadSharedShayari();
}

document.getElementById('refreshButton').addEventListener('click', async () => {
  if (hasSupabase) {
    try {
      const result = await callSupabase('create_manual_shayari', { p_slot: getHalfHourSlot(getSouthCarolinaTime()) });
      renderMessage(result);
      updateSharedStats(result);
      return;
    } catch (error) {
      console.warn('Shared shayari unavailable; using local fallback.', error);
    }
  }
  currentShayariIndex = randomShayariIndex();
  renderShayari(currentShayariIndex);
  incrementShayariCount();
});

document.getElementById('revealButton').addEventListener('click', () => {
  const secretMessage = document.getElementById('secretMessage');
  secretMessage.classList.toggle('hidden');
  const button = document.getElementById('revealButton');
  button.textContent = secretMessage.classList.contains('hidden') ? 'સંકેત ખોલો 💌' : 'સંકેત બંધ કરો 🔒';
});

function scheduleHalfHourRotation() {
  const now = getSouthCarolinaTime();
  const secondsUntilBoundary = ((30 - (now.minute % 30)) * 60) - now.second;

  window.setTimeout(() => {
    rotateShayari();
    window.setInterval(() => rotateShayari(), 30 * 60 * 1000);
  }, Math.max(secondsUntilBoundary * 1000, 1000));
}

setInterval(() => {
  updateClock();
}, 1000);

initializePage();
scheduleHalfHourRotation();
