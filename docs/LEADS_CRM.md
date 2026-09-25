# PearTree.pro — Leads and CRM Specification

## Goal
Convert public visitor intent into manageable tenant-owned business workflows.

## Core entities
- Lead
- Contact
- Conversation/Message (later)
- Pipeline
- PipelineStage
- LeadAssignment
- LeadActivity
- ConsentRecord

## Lead lifecycle
NEW -> QUALIFIED -> IN_PROGRESS -> WON / LOST / SPAM / ARCHIVED.

Projects may customize pipeline stages later while preserving stable system states.

## Capture
Sources may include:
- public forms;
- listing inquiry;
- imported lead;
- API/webhook;
- future chat/WhatsApp integrations.

Each lead records source and project context.

## PII
Leads may contain personal data. Collection is minimized, purpose documented, retention configurable and access audited where appropriate.

## Routing
Lead assignment can start manual. Future automation may assign by category/location/team rules.

## Notifications
Lead-created notifications are asynchronous via Queue. Notification failure must not lose the Lead.

## Anti-spam
Public forms can use rate limiting, Turnstile and content heuristics. Suspected spam is stored/handled according to policy rather than executing downstream automations blindly.

## Analytics
Track funnel events without exposing lead content unnecessarily:
capture -> qualification -> response -> outcome.

## AI
AI may summarize/classify/score a lead only under documented tenant/user controls. Original lead data remains authoritative.
