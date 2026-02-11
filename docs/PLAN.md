# UniVerse: Iterative Development Plan

**Goal:** Build a persuasive, research-backed prototype of the UniVerse Student Success Ecosystem to demonstrate its value to stakeholders (faculty, administration, students) and address common skepticism regarding e-portfolios.

**Core Philosophy:** "Evidence, not just Claims."
*   **Skeptic Concern:** "Portfolios are just static folders no one looks at."
*   **UniVerse Answer:** Active, competency-linked living documents that drive career matching.
*   **Skeptic Concern:** "Assessment is subjective and disconnected."
*   **UniVerse Answer:** Integrated rubric-based assessment where every grade is linked to specific evidence.

---

## Phase 1: Foundation & The "Wow" Factor
**Objective:** Establish the visual language and the core "Artifact Lifecycle" (Upload -> Reflect -> Showcase).
*   **Status:** **Complete.**
*   **Task:** Refine the `Dashboard` for immediate visual impact (Gamification elements).
*   **Task:** Polish `Portfolio` view to look less like a file system and more like a gallery.
*   **Task:** Ensure the "AI Career Coach" demo is functional and grounded in the user's data (simulated if necessary for speed, but architected for real calls).
*   **Research Integration:** *Visual Learning* - use high-fidelity previews and visual progress bars.

## Phase 2: Deep Assessment & Academic Rigor (The "Skeptic Killer")
**Objective:** Prove this is a pedagogical tool, not just a social profile.
*   **Status:** **Complete.**
*   **Feature: Competency Mapping.** Connect every artifact to specific learning outcomes (e.g., "Critical Thinking", "Quantitative Reasoning").
    *   *Implementation:* Added `skills` data model, visualization in Portfolio view, and competency context in Assessment view.
*   **Feature: Validated Assessment.** Implement the `Assessment` view where faculty can grade specific artifacts against a rubric.
    *   *Implementation:* Implemented dynamic artifact loading, dashboard-to-assessment navigation, and AI-assisted grading integration.
*   **Feature: Reflection Feedback Loop.** Ensure faculty feedback and grades are persisted back to the artifact and visible to the student.
    *   *Implementation:* Implemented `PortfolioStore` for session-based persistence, linking Dashboard, Portfolio, and Assessment views with synchronized state.
*   **Research Integration:** *Reflective Practice* (Dewey/Schön).
    *   *Implementation:* Artifact detail and assessment views now emphasize the narrative bridge between evidence and competency.

## Phase 3: Social Pedagogy & Institutional Analytics
**Objective:** Show how the system scales and builds community.
*   **Status:** **Complete.**
*   **Feature: Peer Review Gallery.** Show how students can provide structured feedback to each other.
    *   *Implementation:* Implemented `PeerReview` gallery with social feedback loops and gamification (Critic Badge).
*   **Feature: Institutional Analytics.** A view for Deans to see aggregate competency growth (e.g., "80% of Sophomores are meeting the Communication standard").
    *   *Implementation:* Implemented `Analytics` dashboard with competency mastery indices and cohort quartile tracking.
*   **Feature: Shareable Portfolios.** Implement a "Public Profile" simulation for external stakeholders/employers.
    *   *Implementation:* Integrated public profile sharing modal in the Portfolio view.
*   **Research Integration:** *Social Constructivism* (Vygotsky). Learning happens in a social context.
    *   *Implementation:* Peer review loops and departmental transparency demonstrate the social value of learning data.

## Phase 4: Pilot Readiness (Current Status)
**Objective:** Prepare for a closed beta or high-stakes demo.
*   **Status:** **In Progress.**
*   **Task:** End-to-end user flow testing (Student uploads -> Faculty grades -> Student reflects).
*   **Task:** Accessibility audit (WCAG 2.1) to ensure inclusivity.
*   **Task:** Performance tuning (React renders).

## Phase 5: Accreditation & Evidence Management (Planned)
**Objective:** Transform individual portfolios into institutional evidence for accreditation.
*   **Status:** **Planned.**
*   **Feature: Hierarchical Analytics Dashboards.** Create distinct views for Program, Unit, Division, and Institutional Coordinators to track standards (e.g., ABET, HLC).
*   **Feature: Evidence Set Curation.** A tool for coordinators to "bundle" anonymized high-quality examples of student work, faculty feedback, and rubrics into a shareable dossier for accreditation reviewers.
*   **Feature: Employer/Reviewer Verification Path.** Enhance the Public Showcase so external stakeholders can "drill down" from a high-level badge directly into the serialized evidence logs and assessment rubrics.
*   **Research Integration:** *Accountability vs. Improvement* - balancing the need for institutional data with the goal of student growth.

---

## Continuous Improvement Loop
1.  **Build:** Implement a feature based on the plan.
2.  **Critique:** Evaluate against "Skeptic Constraints" (Is it too complex? Is it superficial?).
3.  **Refine:** Update the code and this plan.
