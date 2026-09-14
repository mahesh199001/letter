-- Run this entire file in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.shayari_state (
  id boolean primary key default true check (id),
  total_created bigint not null default 0,
  last_created_at timestamptz,
  next_created_at timestamptz not null default now(),
  current_slot bigint not null default -1,
  current_shayari jsonb not null default '{}'::jsonb
);

create table if not exists public.shayaris (
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

insert into public.shayari_state (id)
values (true)
on conflict (id) do nothing;

alter table public.shayari_state enable row level security;
alter table public.shayaris enable row level security;

create or replace function public.make_unique_shayari(p_slot bigint, p_source text)
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
  word_a text;
  word_c text;
  message jsonb;
  unique_key text;
  attempts integer := 0;
begin
  loop
    attempts := attempts + 1;
    word_a := openings[1 + floor(random() * array_length(openings, 1))::int];
    word_c := endings[1 + floor(random() * array_length(endings, 1))::int];
    unique_key := md5(p_slot::text || ':' || word_a || ':' || word_c || ':' || attempts::text);

    if not exists (select 1 from public.shayaris where slot_key = unique_key) then
      message := jsonb_build_object(
        'greeting', 'પ્રિય રોશની',
        'text', word_a || '. ' || word_c || '.',
        'funny', 'તારી સાથે વાત કરું ત્યારે સમય પણ સ્મિત કરતો લાગે છે; મારી ઘડિયાળને પણ તારી ચાહક બનાવી દીધી છે 😄',
        'reason', 'કારણ તારી હાજરીથી મારું મન હળવું થાય છે અને પ્રેમ દરરોજ નવી શરૂઆત કરે છે.',
        'secret', 'પ્રિય રોશની, તારી યાદમાં લખાયેલી દરેક પંક્તિ મારા હૃદયમાંથી આવે છે. તું હંમેશા ખુશ રહે, કારણ કે તારી ખુશીમાં જ મારી ખુશી છે 💖'
      );
      insert into public.shayaris (slot_key, source, greeting, text, funny, reason, secret)
      values (unique_key, p_source, message->>'greeting', message->>'text', message->>'funny', message->>'reason', message->>'secret');
      return message || jsonb_build_object('slot_key', unique_key);
    end if;

    if attempts > 100 then
      raise exception 'Could not create a unique shayari';
    end if;
  end loop;
end;
$$;

create or replace function public.get_current_shayari(p_slot bigint, p_next_time timestamptz)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  state public.shayari_state;
  created jsonb;
begin
  select * into state from public.shayari_state where id = true for update;
  if state.current_slot <> p_slot then
    created := public.make_unique_shayari(p_slot, 'automatic');
    update public.shayari_state
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

create or replace function public.create_manual_shayari(p_slot bigint)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  state public.shayari_state;
  created jsonb;
begin
  select * into state from public.shayari_state where id = true for update;
  created := public.make_unique_shayari(p_slot, 'manual');
  update public.shayari_state
  set total_created = total_created + 1,
      last_created_at = now(),
      current_slot = p_slot,
      current_shayari = created
  where id = true;
  return created || jsonb_build_object('total_created', state.total_created + 1, 'last_created_at', now(), 'next_created_at', state.next_created_at);
end;
$$;

grant execute on function public.get_current_shayari(bigint, timestamptz) to anon, authenticated;
grant execute on function public.create_manual_shayari(bigint) to anon, authenticated;
revoke all on public.shayari_state from anon, authenticated;
revoke all on public.shayaris from anon, authenticated;

-- Make the corrected generator create a fresh current message after this script runs.
update public.shayari_state
set current_slot = -1,
    current_shayari = '{}'::jsonb;
