# PearTree.pro — Rules for Claude, Cursor, ChatGPT and Coding Agents

## Purpose
Prevent parallel AI tools from creating conflicting architecture, duplicate implementations or unsafe shortcuts.

## Source-of-truth order
1. Accepted ADRs.
2. PRD and domain specifications.
3. Security / multi-tenancy / RBAC documents.
4. Current issue/PR acceptance criteria.
5. Existing implementation.

When implementation conflicts with an accepted higher-level document, do not silently preserve the conflict: raise/update the issue or propose an ADR/document correction.

## Mandatory rules
- Do not invent new modules or product scope without documentation.
- Do not bypass tenant-scoped repositories/services.
- Do not weaken authorization to make a test pass.
- Do not copy architecture/code from Documenty.pl or any prior PearTree implementation unless explicitly approved.
- Do not introduce a VPS dependency into the core runtime without a replacement ADR.
- Do not replace D1/R2/Queues choices casually; use ADR process.
- Do not add secrets or real credentials to commits.
- Do not deploy from an unreviewed branch to production.
- Do not merge failing CI.
- Do not duplicate an existing issue/PR implementation without first checking repository state.

## Working sequence
1. Read relevant docs.
2. Inspect current main branch, open issues and PRs.
3. Identify the smallest documented slice.
4. Create/update issue with acceptance criteria.
5. Implement on focused branch.
6. Add tests including authorization negatives.
7. Run required checks.
8. Open PR with risk/test summary.
9. Do not start overlapping work until ownership is clear.

## Required PR summary
- problem;
- documented requirement;
- implementation;
- security/tenant impact;
- data/migration impact;
- Cloudflare resource impact;
- test evidence;
- deployment/rollback notes.

## Stop conditions
Agent must stop and surface a decision instead of guessing when:
- docs materially conflict;
- tenant ownership is ambiguous;
- destructive migration lacks recovery plan;
- auth/security model would be weakened;
- a Cloudflare limitation changes the agreed architecture;
- billing behavior is uncertain;
- another active PR owns the same core files/feature.

## Review priority
P0 security/tenant correctness > data integrity > production availability > product acceptance criteria > UX polish > refactoring.
