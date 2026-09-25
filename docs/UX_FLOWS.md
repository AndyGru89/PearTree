# PearTree.pro — Foundation UX Flows

## 1. First-time onboarding
Landing -> Sign up -> Verify identity -> Create Organization -> Create Project -> Project setup checklist -> Console overview.

Checklist:
- project name;
- default locale/timezone;
- branding;
- team;
- domain;
- publish.

Users may leave and resume onboarding.

## 2. Organization switch
Current organization is always visible. Switching clears project-specific view state and reloads permitted resources.

## 3. Project creation
Create Project -> name -> slug suggestion -> locale/timezone -> initial modules/template (minimal in Foundation) -> create as DRAFT -> open Project Overview.

## 4. Member invitation
Members -> Invite -> email + role -> send -> PENDING state -> acceptance -> ACTIVE membership.

UI shows expiration/revoke/resend where supported. Role limits are explained before submit.

## 5. Role change/removal
Members -> member -> change role/remove -> confirmation for material privilege change -> immediate permission update -> audit event.

OWNER-sensitive operations use separate high-assurance flow.

## 6. Branding
Project -> Branding -> logo/colors/basic identity -> preview -> save. Failed upload/save preserves user input and provides retry.

## 7. Domain
Project -> Domains -> Add domain -> validation -> DNS/ownership instructions -> VERIFYING -> VERIFIED/ACTIVE or FAILED -> retry/support.

Canonical domain selection is explicit.

## 8. Publish
DRAFT Project -> readiness checklist -> Activate/Publish -> ACTIVE -> show resolved public domain and status.

Publish fails safely if required domain/runtime prerequisites are missing.

## 9. Platform Admin
Admin search -> organization/project detail -> safe operational view -> explicitly privileged action if required -> confirmation -> audit.

No hidden customer impersonation.
