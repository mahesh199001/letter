-- Run this entire file in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.roshni_shayari_state (
  id boolean primary key default true check (id),
  total_created bigint not null default 0,
  last_created_at timestamptz,
  next_created_at timestamptz not null default now(),
  current_slot bigint not null default -1,
  current_shayari jsonb not null default '{}'::jsonb
);

create table if not exists public.roshni_shayaris (
  id bigint generated always as identity primary key,
  slot_key text not null unique,
  created_at timestamptz not null default now(),
  source text not null default 'automatic',
  greeting text not null,
  text text not null,
  funny text not null,
  reason text not null,
  secret text not null
);

insert into public.roshni_shayari_state (id)
values (true)
on conflict (id) do nothing;

drop function if exists public.record_roshni_page_open();
alter table public.roshni_shayari_state drop column if exists total_page_opens;

alter table public.roshni_shayari_state enable row level security;
alter table public.roshni_shayaris enable row level security;

create or replace function public.make_roshni_unique_shayari(p_slot bigint, p_source text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  openings text[] := array[
    'તારું સ્મિત મારી સવારનું પહેલું કિરણ છે',
    'તારી યાદ મારી સાંજનો સૌથી સુંદર રંગ છે',
    'તારો સાથ મારા મનનું શાંત ઘર છે',
    'તારું હાસ્ય મારી દરેક ખુશીનું કારણ છે',
    'તારો વિચાર મારી રાતનો મીઠો ચાંદ છે',
    'તારી હાજરી મારી જિંદગીની સૌથી સુંદર ભેટ છે'
  ];
  endings text[] := array[
    'તું હોય ત્યારે દરેક પળ પ્રેમથી ભરાઈ જાય છે',
    'તારા વગર દિવસ અધૂરો અને તારી સાથે હૃદય પૂરું લાગે છે',
    'તું મારી દુનિયાને રોજ થોડી વધુ સુંદર બનાવી દે છે',
    'તારી એક નાની વાત પણ મારા મનને શાંતિ આપી જાય છે',
    'તારા નામથી જ મારા ચહેરા પર સ્મિત આવી જાય છે',
    'તારી સાથેનો દરેક ક્ષણ મારી મનપસંદ યાદ બની જાય છે'
  ];
  middles text[] := array[
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
  connectors text[] := array[
    'એટલે', 'અને તેથી', 'એ જ કારણે', 'એ પળે', 'મારા માટે',
    'હૃદયથી', 'ચુપચાપ', 'દરરોજ', 'આજેય', 'સાચે જ'
  ];
  word_a text;
  word_b text;
  word_c text;
  word_d text;
  period_greeting text;
  message jsonb;
  unique_key text;
  attempts integer := 0;
begin
  loop
    attempts := attempts + 1;
    word_a := openings[1 + floor(random() * array_length(openings, 1))::int];
    word_b := middles[1 + floor(random() * array_length(middles, 1))::int];
    word_c := endings[1 + floor(random() * array_length(endings, 1))::int];
    word_d := connectors[1 + floor(random() * array_length(connectors, 1))::int];
    unique_key := md5(word_a || ':' || word_b || ':' || word_c || ':' || word_d);

    if not exists (select 1 from public.roshni_shayaris where slot_key = unique_key) then
      period_greeting := case
        when extract(hour from (now() at time zone 'America/New_York')) between 5 and 11 then 'પ્રિય રોશની, શુભ સવાર ☀️'
        when extract(hour from (now() at time zone 'America/New_York')) between 12 and 15 then 'પ્રિય રોશની, શુભ બપોર 🌤️'
        when extract(hour from (now() at time zone 'America/New_York')) between 16 and 18 then 'પ્રિય રોશની, શુભ સાંજ ✨'
        else 'પ્રિય રોશની, શુભ રાત્રી 🌙'
      end;
      message := jsonb_build_object(
        'greeting', period_greeting,
        'text', word_a || '. ' || word_b || '; ' || word_c || '.',
        'funny', word_d || ' તારી સાથે વાત કરું ત્યારે સમય પણ સ્મિત કરતો લાગે છે; મારી ઘડિયાળને પણ તારી ચાહક બનાવી દીધી છે 😄',
        'reason', word_d || ' આ શાયરીમાં તારી યાદની એ લાગણી છે જે ' || word_b || '.',
        'secret', 'પ્રિય રોશની, ' || word_c || '. તારી ખુશીમાં જ મારી ખુશી છે 💖'
      );
      insert into public.roshni_shayaris (slot_key, source, greeting, text, funny, reason, secret)
      values (unique_key, p_source, message->>'greeting', message->>'text', message->>'funny', message->>'reason', message->>'secret');
      return message || jsonb_build_object('slot_key', unique_key);
    end if;

    if attempts > 100 then
      raise exception 'Could not create a unique shayari';
    end if;
  end loop;
end;
$$;

create or replace function public.get_roshni_current_shayari(p_slot bigint, p_next_time timestamptz)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  state public.roshni_shayari_state;
  created jsonb;
begin
  select * into state from public.roshni_shayari_state where id = true for update;
  if state.current_shayari = '{}'::jsonb or state.next_created_at <= now() then
    created := public.make_roshni_unique_shayari(p_slot, 'automatic');
    update public.roshni_shayari_state
    set total_created = total_created + 1,
        last_created_at = now(),
        next_created_at = p_next_time,
        current_slot = p_slot,
        current_shayari = created
    where id = true;
    return created || jsonb_build_object('total_created', state.total_created + 1, 'last_created_at', now(), 'next_created_at', p_next_time);
  end if;
  return state.current_shayari || jsonb_build_object('total_created', state.total_created, 'last_created_at', state.last_created_at, 'next_created_at', state.next_created_at);
end;
$$;

create or replace function public.create_roshni_manual_shayari(p_slot bigint, p_next_time timestamptz)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  state public.roshni_shayari_state;
  created jsonb;
begin
  select * into state from public.roshni_shayari_state where id = true for update;
  created := public.make_roshni_unique_shayari(p_slot, 'manual');
  update public.roshni_shayari_state
  set total_created = total_created + 1,
      last_created_at = now(),
      next_created_at = p_next_time,
      current_slot = p_slot,
      current_shayari = created
  where id = true;
  return created || jsonb_build_object('total_created', state.total_created + 1, 'last_created_at', now(), 'next_created_at', p_next_time);
end;
$$;

grant execute on function public.get_roshni_current_shayari(bigint, timestamptz) to anon, authenticated;
grant execute on function public.create_roshni_manual_shayari(bigint, timestamptz) to anon, authenticated;
revoke all on public.roshni_shayari_state from anon, authenticated;
revoke all on public.roshni_shayaris from anon, authenticated;

-- Make the corrected generator create a fresh current message after this script runs.
update public.roshni_shayari_state
set current_slot = -1,
    current_shayari = '{}'::jsonb;
