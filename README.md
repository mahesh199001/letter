# Roshni Love Letter

A separate romantic Gujarati web page for Roshni with South Carolina time, shared shayari, and automatic updates.

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
- `supabase/schema.sql` – shared counter and 7,200-combination unique-shayari database setup; the browser has 5,120 distinct local shayaris
- `supabase-config.js` – public Supabase URL and anon-key configuration
- `photos/` – add the private local gallery images listed in `photos/README.md`

## Enable worldwide shared shayari

The GitHub Pages version works locally without a backend, but browser storage is private to each visitor. To enable one shared counter and shared shayari for everyone:

1. Create a free project at [Supabase](https://supabase.com/).
2. Open **SQL Editor**, paste all of `supabase/schema.sql`, and run it.
3. Open **Project Settings > API** and copy the **Project URL** and public **anon key**.
4. Put them in `supabase-config.js` as `url` and `anonKey`.
5. Commit and push the changed file to GitHub.

Never put a Supabase `service_role` key in this website. Only the public `anon` key belongs in `supabase-config.js`.

## Roshni Supabase setup

This project intentionally uses separate database names and functions so it does not change Roshni's website:

- `roshni_shayari_state`
- `roshni_shayaris`
- `get_roshni_current_shayari`
- `create_roshni_manual_shayari`

Run `supabase/schema.sql` in the same Supabase project before opening the site. The existing public URL and publishable key can be reused because the database objects are isolated with the `roshni_` prefix.

After changing the SQL generator, rerun the complete `supabase/schema.sql` file so the shared generator uses the expanded catalog and synchronized reasons and hints.
