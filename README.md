# Love Page Site

A small romantic web page for a girlfriend with a beautiful animated background, Gujarati shayari, and daily date-based messages.

## Run locally

From the project folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Files

- `index.html` – page layout
- `style.css` – styling and animations
- `script.js` – Gujarati date and daily shayari logic
- `supabase/schema.sql` – free shared counter and unique-shayari database setup
- `supabase-config.js` – public Supabase URL and anon-key configuration

## Enable worldwide shared shayari

The GitHub Pages version works locally without a backend, but browser storage is private to each visitor. To enable one shared counter and shared shayari for everyone:

1. Create a free project at [Supabase](https://supabase.com/).
2. Open **SQL Editor**, paste all of `supabase/schema.sql`, and run it.
3. Open **Project Settings > API** and copy the **Project URL** and public **anon key**.
4. Put them in `supabase-config.js` as `url` and `anonKey`.
5. Commit and push the changed file to GitHub.

Never put a Supabase `service_role` key in this website. Only the public `anon` key belongs in `supabase-config.js`.
