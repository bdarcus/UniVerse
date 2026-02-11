# User Stories: UniVerse Student Success Ecosystem

This document outlines the core user stories for the UniVerse platform, categorized by persona. These stories drive the development of features and ensure the platform remains grounded in the "Folio Thinking" pedagogy.

---

## 1. Student Persona (The Learner)
*Goal: Document learning, reflect on growth, and showcase achievements.*

- **Artifact Collection:** As a student, I want to upload artifacts (essays, code, media, certificates) from both my courses and my internships into a private repository so that I have a central archive of all my learning evidence.
- **Metacognitive Reflection:** As a student, I want to attach a reflection to each artifact where I explain the *why* behind the work and how it connects to my broader goals.
- **Curated Showcases:** As a student, I want to select specific artifacts from my repository to create a public "Showcase" portfolio so that I can present a polished professional narrative to employers.
- **Competency Tracking:** As a student, I want to see a visual map of my progress toward institutional competencies (e.g., "Critical Thinking") so that I can identify which skills I need to further develop.
- **AI Career Coaching:** As a student, I want to ask the AI Career Coach to analyze my portfolio and suggest specific co-curricular opportunities that would fill gaps in my professional profile.
- **Badge Achievement:** As a student, I want to earn "Passport Badges" for extracurricular activities so that my soft skills and leadership experiences are formally recognized and verified.

## 2. Faculty Persona (The Mentor & Assessor)
*Goal: Provide authentic assessment and guide student reflection.*

- **Evidence-Based Grading:** As a faculty member, I want to view a student's artifact and reflection side-by-side with a rubric so that I can provide a grade that is directly linked to specific evidence.
- **Competency Mapping:** As a faculty member, I want to tag artifacts with institutional learning outcomes during the assessment process so that the system can aggregate competency data across the curriculum.
- **Feedback Loops:** As a faculty member, I want to provide qualitative comments on a student's reflection to encourage deeper metacognitive thinking and integrative learning.
- **Persona Switching (Dev):** As a faculty member, I want to easily switch between "Faculty View" and "Student View" so that I can understand the student's experience of my assignments.

## 3. Administrator Persona (The Institutional Leader)
*Goal: Track institutional effectiveness and student engagement.*

- **Competency Heatmaps:** As a Dean, I want to view aggregate dashboards showing competency mastery levels across different departments so that I can identify curriculum strengths and weaknesses.
- **Engagement Analytics:** As an administrator, I want to track the distribution of "Passport Badges" across the student body to measure the impact of co-curricular programming.
- **Accreditation Reporting:** As a Provost, I want to export reports on student learning outcomes backed by direct artifact evidence to simplify the institutional accreditation process.

## 4. Assessment Coordinator Persona (Accreditation & Quality Assurance)
*Goal: Ensure educational quality and maintain institutional accreditation.*

- **Programmatic Excellence:** As a Program Assessment Coordinator, I want to analyze artifact data specific to a degree or certificate (e.g., Nursing or Engineering) so that I can ensure students are meeting specialized accreditation standards (e.g., CCNE or ABET).
- **Unit/Departmental Alignment:** As a Unit Assessment Coordinator, I want to compare assessment results across various courses within my department so that I can identify gaps in the curriculum and justify resource requests.
- **Divisional Oversight:** As a Division Assessment Coordinator, I want to track learning outcome trends across multiple related departments so that I can ensure consistent assessment rigor and alignment with divisional strategic goals.
- **Institutional Accreditation:** As the Institutional Assessment Coordinator, I want to aggregate evidence of high-impact practices and "Integrative Learning" from across all divisions so that I can lead the comprehensive self-study for regional accreditation (e.g., HLC or SACSCOC).
- **Evidence Export:** As an assessment lead at any level, I want to create "Evidence Sets"—curated collections of anonymized artifacts, rubrics, and faculty feedback—so that I can provide undeniable proof of student learning to external accreditation reviewers.

## 5. Employer Persona (The Stakeholder)
*Goal: Identify and verify qualified candidates.*

- **Verified Evidence:** As a recruiter, I want to click on a candidate's "Leadership Badge" and see the specific artifacts and reflections that earned them that badge so that I can verify their skills beyond a simple resume claim.
- **Holistic Profiles:** As a hiring manager, I want to see a candidate's "Unified Record" (academic + co-curricular) so that I can get a more complete picture of their potential and cultural fit.

---

## Technical/Dev User Stories
*Goal: Ensure platform performance, security, and scalability.*

- **Persona Toggling:** As a developer, I want a persistent persona switcher in the UI so that I can rapidly test permissions and context-aware layouts.
- **Data Persistence:** As a developer, I want all reflections and assessments to persist across session changes so that the prototype demonstrates realistic data flow.
- **AI Grounding:** As a developer, I want the AI Career Coach to be grounded in the student's specific artifact metadata so that it provides personalized rather than generic advice.
