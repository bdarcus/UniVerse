# UniVerse: Iterative Development Plan

**Goal:** Build a persuasive, research-backed prototype of the UniVerse Student Success Ecosystem to demonstrate its value to stakeholders (faculty, administration, students) and address common skepticism regarding e-portfolios.

**Core Philosophy:** "Evidence, not just Claims."
*   **Skeptic Concern:** "Portfolios are just static folders no one looks at."
*   **UniVerse Answer:** Active, competency-linked living documents that drive career matching.
*   **Skeptic Concern:** "Assessment is subjective and disconnected."
*   **UniVerse Answer:** Integrated rubric-based assessment where every grade is linked to specific evidence.

---

## Phase 1: Foundation & The "Wow" Factor (Current Status)
**Objective:** Establish the visual language and the core "Artifact Lifecycle" (Upload -> Reflect -> Showcase).
*   **Task:** Refine the `Dashboard` for immediate visual impact (Gamification elements).
*   **Task:** Polish `Portfolio` view to look less like a file system and more like a gallery.
*   **Task:** Ensure the "AI Career Coach" demo is functional and grounded in the user's data (simulated if necessary for speed, but architected for real calls).
*   **Research Integration:** *Visual Learning* - use high-fidelity previews and visual progress bars.

## Phase 2: Deep Assessment & Academic Rigor (The "Skeptic Killer")
**Objective:** Prove this is a pedagogical tool, not just a social profile.
*   **Feature: Competency Mapping.** Connect every artifact to specific learning outcomes (e.g., "Critical Thinking", "Quantitative Reasoning").
    *   *Status:* **Complete (Prototype).** Added `skills` data model, visualization in Portfolio view, and competency context in Assessment view.
*   **Feature: Validated Assessment.** Implement the `Assessment` view where faculty can grade specific artifacts against a rubric.
    *   *Status:* **In Progress.** Implemented dynamic artifact loading, dashboard-to-assessment navigation, and AI-assisted grading integration.
*   **Feature: Reflection Feedback Loop.** Ensure faculty feedback and grades are persisted back to the artifact and visible to the student.
    *   *Status:* **Next Up.**
*   **Research Integration:** *Reflective Practice* (Dewey/Schön).
    *   Add a "Reflection" step before an artifact is published.
    *   *Prompt:* "What did you struggle with in this project?"
*   **Feature: Evidence Chains.** When a user clicks a "Badge" (e.g., 'Leadership'), they should see the specific artifacts and faculty endorsements that earned it.

## Phase 3: Social Pedagogy & Institutional Analytics
**Objective:** Show how the system scales and builds community.
*   **Feature: Peer Review Mockup.** Show how students can provide structured feedback to each other.
*   **Feature: Department Dashboard.** A view for Deans to see aggregate competency growth (e.g., "80% of Sophomores are meeting the Communication standard").
*   **Research Integration:** *Social Constructivism* (Vygotsky). Learning happens in a social context.

## Phase 4: Pilot Readiness
**Objective:** Prepare for a closed beta or high-stakes demo.
*   **Task:** End-to-end user flow testing (Student uploads -> Faculty grades -> Student reflects).
*   **Task:** Accessibility audit (WCAG 2.1) to ensure inclusivity.
*   **Task:** Performance tuning (React renders).

---

## Continuous Improvement Loop
1.  **Build:** Implement a feature based on the plan.
2.  **Critique:** Evaluate against "Skeptic Constraints" (Is it too complex? Is it superficial?).
3.  **Refine:** Update the code and this plan.
