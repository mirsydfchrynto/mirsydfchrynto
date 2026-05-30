<div align="center">
  <img src="https://raw.githubusercontent.com/mirsydfchrynto/mirsydfchrynto/main/assets/architect_header.svg" width="100%" alt="System Header" />
</div>

<br />

# System Statement
**Operating at the intersection of native OS boundaries and high-performance web systems. Obsessed with reliability, type safety, and the surgical removal of technical debt.**

I build digital artifacts that prioritize operational permanence over transient trends. My work is a continuous exploration of how to maintain system integrity under the pressure of real-world scale—from locking down Android environments for hundreds of live users to architecting reactive web infrastructures that remain performant despite NoSQL constraints.

---

### // Engineering Philosophy: The Three Pillars

**01 / Predictable State**  
If a state is not predictable, the system is not finished. I employ strict immutability and leak-proof stream management to ensure that what the user sees is exactly what the database holds.

**02 / Native Interop as a First-Class Citizen**  
Mobile development is not just about UI wrappers. It is about understanding the underlying hardware. I bridge the gap between Dart and Kotlin with surgical precision to unlock system-level capabilities that generic frameworks cannot reach.

**03 / Maintainability by Constraint**  
Flexibility is often a mask for indecision. I design systems with strict boundaries (Clean Architecture / SOLID) to force clarity and prevent logic leakage across layers.

---

### // Core Artifacts

#### [ 0x01 ] Secure CBT Master
**Context:** High-stakes digital examination for K-12 environments.  
**Problem:** Google Forms and generic web browsers allow for trivial cheating via tab-switching, screenshots, and clipboard manipulation.  
**Constraints:** Low-end student devices, unstable school networks, Spark-tier database limits.  
**Solution:** A dual-platform ecosystem using Flutter for the UI and a custom Kotlin Native bridge for hardware-level isolation.  
**Technical Decisions:**
- **startLockTask Interop:** Utilized native Android APIs via MethodChannel to disable status bar, home button, and recents menu.
- **FLAG_SECURE Implementation:** Forced hardware-level screenshot and screen-recording prevention.
- **Dynamic QR Handshake:** Implemented a 5-second rotating token protocol to prevent replay attacks without incurring high Firestore write costs.
**Trade-offs:** Sacrificed the ease of Flutter's built-in navigation for a strictly controlled native lifecycle.  
**Lessons:** Real-time monitoring at scale (100+ concurrent users) requires aggressive request batching and on-demand listener management.

#### [ 0x02 ] Geges Smart Barber
**Context:** Digitalizing local barbershop operations (SaaS).  
**Problem:** Unfair job distribution among barbers and booking crashes during peak hours due to Firestore composite index lag.  
**Constraints:** Real-time sync required for queue transparency without exceeding Spark tier limits.  
**Solution:** A count-based fair-distribution algorithm integrated with an in-memory fallback filtering system.  
**Technical Decisions:**
- **In-Memory Fallback:** When Firestore indexes failed to build, I implemented a client-side filter that fetched global daily data and sorted it in-memory, ensuring zero downtime for the business.
- **Cascading Permanent Deletion:** Engineered a recursive deleteDoc protocol to ensure 100% data cleanup (Tenant -> Shop -> Admin) to maintain database hygiene.  
**Impact:** 188 verified tests passed; 0 production crashes during peak holiday bookings.

---

### // Operational Stack

| Domain | Strategic Alignment | Technologies |
| :--- | :--- | :--- |
| **Mobile** | Native Performance & Security | Flutter, Kotlin Native, MethodChannel, Hive (AES-256) |
| **Web** | Performance & Rendering | Next.js 16 (Turbopack), TypeScript, React |
| **Back-end** | Serverless & Efficiency | FastAPI, Firebase, NoSQL Optimization |
| **System** | Performance Tuning | Linux Kernel, Bash, Systemd, Process Management |

---

### // Current Research & Focus
- **Procedural Motion in UX:** Reducing cognitive load in complex dashboards through 60fps SVG-based state visualizations.
- **Network Resilience:** Designing "Offline-First" state machines that resolve complex conflicts during intermittent connectivity.
- **Informatics Integrity:** Maintaining a 3.92/4.00 GPA performance node while actively mentoring 40+ junior engineers in Clean Architecture.

---

### // Correspondence Protocol
**Synchronous Communication:** [WhatsApp](https://wa.me/6285865826621)  
**Asynchronous Correspondence:** [irsydfchrynto@gmail.com](mailto:irsydfchrynto@gmail.com)  
**System Portfolio:** [irsyad-architect.surge.sh](https://irsyad-architect.surge.sh)

---

<div align="center">
  <sub>VERSION_V8.0 // Muhammad Irsyad Fachryanto // 2026</sub>
</div>
