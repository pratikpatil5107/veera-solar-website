/*
# Create contact_inquiries table (single-tenant, no auth)

1. New Tables
- `contact_inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `company` (text) — optional company name
  - `phone` (text) — contact phone
  - `email` (text, not null) — contact email
  - `location` (text) — project location
  - `project_type` (text) — e.g. Residential, Commercial, Ground Mounted, EPC
  - `message` (text) — inquiry details
  - `status` (text, default 'new') — workflow status for follow-up
  - `source` (text, default 'website') — where the inquiry came from
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_inquiries`.
- This is a public website contact form with no sign-in, so inserts are allowed
  for the anon role. Reads/updates/deletes are restricted to authenticated
  (internal staff) only — public visitors must not be able to list or read
  other people's inquiries.

3. Notes
- Idempotent: uses IF NOT EXISTS and drops policies before creating.
- No user_id / auth.users reference — no sign-in flow on this site.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  phone text,
  email text NOT NULL,
  location text,
  project_type text,
  message text,
  status text NOT NULL DEFAULT 'new',
  source text NOT NULL DEFAULT 'website',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Public can submit inquiries (no sign-in on the site)
DROP POLICY IF EXISTS "anon_insert_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_inquiries"
ON contact_inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated staff can read inquiries
DROP POLICY IF EXISTS "auth_select_inquiries" ON contact_inquiries;
CREATE POLICY "auth_select_inquiries"
ON contact_inquiries FOR SELECT
TO authenticated
USING (true);

-- Only authenticated staff can update inquiry status
DROP POLICY IF EXISTS "auth_update_inquiries" ON contact_inquiries;
CREATE POLICY "auth_update_inquiries"
ON contact_inquiries FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- Only authenticated staff can delete inquiries
DROP POLICY IF EXISTS "auth_delete_inquiries" ON contact_inquiries;
CREATE POLICY "auth_delete_inquiries"
ON contact_inquiries FOR DELETE
TO authenticated
USING (true);
