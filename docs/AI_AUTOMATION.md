# PearTree.pro — AI and Automation Specification

## Principle
AI assists customer workflows; it does not create a parallel authorization system or silently perform high-impact actions.

## AI capabilities
Potential:
- content drafting;
- SEO suggestions;
- listing description assistance;
- lead summarization/classification;
- duplicate detection;
- semantic search;
- support/operator assistance.

## Platform options
Cloudflare Workers AI, AI Gateway and Vectorize may be used where appropriate, but provider choice is behind service adapters and documented by ADR.

## Guardrails
- tenant context enforced before AI access;
- only necessary data sent to a model/provider;
- secrets/auth tokens never included in prompts;
- model output treated as untrusted input;
- generated HTML/code is not directly executed;
- high-impact actions require deterministic authorization and, where appropriate, human confirmation;
- prompt/model/version metadata captured for critical workflows where reproducibility matters.

## Automation engine
Future automation structure:
Trigger -> Conditions -> Actions.

Examples:
lead.created -> category matches -> assign team -> send notification.

## Action safety classes
### Low risk
tag record, create internal note.

### Medium risk
send customer notification, publish non-sensitive content.

### High risk
financial action, deletion, permission change, domain/security change.

High-risk actions require additional confirmation/policy and are not delegated to open-ended AI reasoning.

## Idempotency
Automation runs have unique IDs and action-level idempotency. Retry cannot duplicate external side effects.

## Audit
Automation records trigger, evaluated conditions, actions, outcome and actor/system identity.
