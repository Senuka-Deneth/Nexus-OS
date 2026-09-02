-- Wave 1 D3 — scoring_version is a string constant (e.g. people.match.v1), not an integer.

alter table public.candidate_jobs
  alter column scoring_version type text using scoring_version::text;

comment on column public.candidate_jobs.scoring_version is
  'Deterministic scorer version string from lib/people/score.ts (SCORING_VERSION).';
