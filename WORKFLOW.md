# WORKFLOW.md: Vague Prompting vs. Spec-Driven AI Development

## Executive Summary
This document analyzes the engineering differences, code quality, accessibility, and time overhead resulting from two distinct AI development workflows (Vague vs. Spec-Driven) when implementing the Contact & Feedback component for the capstone project.

---

## 1. Concrete Code Diffs & AI Mistakes Caught

### A. State Management & Validation Architecture
* **Vague Branch (`feat/contact-form-vague`):** 
  Implemented using uncontrolled HTML inputs and plain React `useState` hooks. Form submission relied purely on native browser HTML5 validation (`required` attributes) without schema-level typing or sanitization before dispatch.
* **Spec Branch (`feat/contact-form-spec`):** 
  Built using `react-hook-form` paired with a strict `zod` schema resolver (`contactFormSchema`). Enforced minimum string lengths (2 chars for name, 10 chars for message) and valid email formatting before dispatch.

### B. Accessibility (a11y) Implementation
* **Vague Branch:** 
  Labels were placed next to inputs without explicit programmatic `htmlFor`/`id` bindings. Error messages rendered as generic text containers without `aria-invalid` or `aria-describedby` associations for screen readers.
* **Spec Branch:** 
  All form fields featured programmatic `id` to `htmlFor` bindings, dynamic `aria-invalid` boolean flags, and `aria-describedby` associations pointing directly to dynamic error message elements with `role="alert"`.

### C. Caught AI Mistakes & Self-Correction
* **Vague Round Mistake Caught:** 
  The AI generated a toast notification import (`import { useToast } from "@/hooks/use-toast"`) that did not exist in the repository tree, causing an immediate compilation error (`Module not found`).
* **Spec Round Verification Fix:** 
  During the spec-driven execution, requiring explicit async loading states forced the inclusion of `disabled={isSubmitting}` across all input fields and the submit button, preventing duplicate API submissions while a request is pending.

---

## 2. Review Effort & Time Metrics

| Metric | Round 1 (Vague) | Round 2 (Spec-Driven) |
|---|---|---|
| **Prompt Engineering** | 0.5 mins | 3.5 mins |
| **Generation Time** | 1.0 mins | 2.5 mins |
| **Manual Debug & Review** | 10.0 mins (fixing broken imports, adding missing validation/a11y) | 1.0 mins |
| **Total End-to-End Time** | **11.5 mins** | **7.0 mins** |
| **Validation Coverage** | Client HTML5 default only | Strict Zod Schema |

*Key Takeaway:* While Round 1 generated initial code faster (1.0 minute vs 2.5 minutes), Round 2 was faster end-to-end (7.0 minutes vs 11.5 minutes) because zero time was spent fixing broken imports or manually adding missing validation logic during code review.
