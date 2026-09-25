# PearTree.pro — Design System 0.1

## Goal
A professional B2B SaaS interface with strong clarity, predictable states and low cognitive load. The system must support public marketing, customer Console and privileged Admin without becoming three unrelated products.

## Principles
- clarity over decoration;
- consistent hierarchy;
- accessible contrast;
- keyboard-first operability;
- responsive by default;
- state visibility;
- restrained motion;
- reusable semantic components over page-specific styling.

## Foundations
### Layout
Use an 8px spatial rhythm with controlled exceptions for compact controls.

Recommended page structure:
- app shell;
- context header;
- primary action zone;
- content sections/cards;
- persistent feedback/toast region.

### Typography
Use a modern sans-serif system with clear distinction between:
- display/marketing heading;
- page heading;
- section heading;
- body;
- small/supporting text;
- labels;
- monospace technical values.

Exact font choice is an implementation decision, but it must be web-safe, performant and support Polish/European diacritics.

### Color semantics
Tokens, not hard-coded component colors:
- background/surface/elevated surface;
- foreground/muted;
- border;
- primary/action;
- success;
- warning;
- danger;
- info;
- focus ring.

Dark mode may be added only if token architecture supports it cleanly; it is not required for Foundation.

## Components
Foundation component set:
- Button
- IconButton
- Link
- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Field / Label / Help / Error
- Card
- Table/DataGrid shell
- Badge
- Tabs
- Breadcrumbs
- Dropdown/Menu
- Dialog
- Drawer
- Tooltip
- Toast
- Alert
- EmptyState
- Skeleton
- Spinner/Progress
- Pagination
- Avatar
- AppShell
- Sidebar
- Topbar
- ContextSwitcher

## Required component states
Default, hover, active, focus-visible, disabled, loading, invalid and read-only where applicable.

## Accessibility
Target WCAG 2.2 AA.
- semantic HTML first;
- visible focus;
- no color-only status communication;
- labels associated with fields;
- dialogs trap/restore focus correctly;
- keyboard navigation for menus/tabs;
- reduced-motion preference respected;
- minimum touch target sizing considered on mobile.

## Responsive behavior
Primary breakpoints are implementation tokens, not page assumptions.

Design for:
- small mobile;
- large mobile;
- tablet;
- desktop;
- wide desktop.

Console tables must degrade to responsive list/card patterns when necessary rather than forcing unusable horizontal layouts.

## Motion
Use subtle transitions for state change and hierarchy. Avoid motion that delays workflows.

## Content style
UI copy should be direct, specific and action-oriented. Error messages state what failed and the user's next possible action without exposing secrets/internal stack traces.

## Design review checklist
- hierarchy obvious within 3 seconds;
- primary action clear;
- no dead-end state;
- all async states present;
- keyboard flow works;
- mobile layout remains usable;
- destructive action visually distinct and confirmed appropriately.
