# Architecture Roadmap: From Prototype to Production

**Note:** As this a prototype to test ideas, this only is a hypothetical plan for what it might take to turn this into a production ready system.

**Goal:** Transition the UniVerse prototype (Vite/React SPA) into a robust, scalable, and maintainable production system using Go microservices and Next.js.

---

## 1. Frontend Migration (The Presentation Layer)
**Current:** Vite + React (SPA). Good for fast prototyping.
**Target:** Next.js (App Router).
*   **Why:**
    *   **SSR (Server-Side Rendering):** Critical for SEO if students want public portfolios to be indexed by employers.
    *   **Performance:** Faster First Contentful Paint (FCP) for heavy dashboards.
    *   **Data Fetching:** Server Components allow secure, direct calls to internal services without exposing API keys.

## 2. Backend Architecture (The Logic Layer)
**Target:** Concurrent Go Microservices (gRPC/Protobuf internal, REST/GraphQL external).

### Core Services Map

#### A. Identity & Access Service (`auth-service`)
*   **Responsibility:** Authentication (OIDC/SAML integration for Universities), Role Management (Student, Faculty, Admin), Session handling.
*   **Tech:** Go, Casbin (for RBAC), JWT.

#### B. Artifact & Portfolio Service (`portfolio-service`)
*   **Responsibility:** CRUD for student work, file handling (S3 integration), reflection logs.
*   **Key Model:** `Artifact`
    ```go
    type Artifact struct {
        ID          string
        StudentID   string
        Title       string
        ContentURL  string
        Reflections []Reflection
        Metadata    map[string]interface{}
    }
    ```

#### C. Competency & Assessment Service (`assessment-service`)
*   **Responsibility:** Managing rubrics, storing grades, linking artifacts to learning outcomes (Competency Map).
*   **Key Model:** `Rubric`, `Assessment`
    ```go
    type Competency struct {
        ID          string
        Domain      string // e.g., "Critical Thinking"
        Level       int    // 1-5
    }
    ```

#### D. Intelligence Service (`inference-service`)
*   **Responsibility:** Abstraction layer for AI. Handles prompt engineering, context window management, and rate limiting for Gemini/LLM calls.
*   **Features:** "Resume Generator", "Gap Analysis".

#### E. Analytics Service (`analytics-service`)
*   **Responsibility:** Asynchronous event processing (Kafka/NATS) to calculate aggregate stats (e.g., "Department-wide skill growth").

---

## 3. Data Strategy
*   **Primary DB:** PostgreSQL (Relational data: Users, Courses, Grades).
*   **Document Store:** MongoDB or JSONB in Postgres (Flexible artifact metadata, dynamic rubrics).
*   **Vector DB:** pgvector or Pinecone (for Semantic Search of artifacts - "Find me all biology papers about 'mitosis'").

## 4. Migration Steps
1.  **Define API Contracts (Protobuf/OpenAPI):** Agree on the interface between Frontend and Backend.
2.  **Strangler Fig Pattern:**
    *   Build `auth-service` first.
    *   Replace the "Mock Data" in the prototype with calls to the new Go API for *one* feature (e.g., Authentication).
    *   Gradually migrate `Portfolio` data fetching to the new backend.
3.  **Frontend Swap:** Port React components from Vite to Next.js pages one route at a time.
