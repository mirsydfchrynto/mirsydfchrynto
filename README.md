# Muhammad Irsyad Fachryanto
**Architecting system integrity under constraints.**

---

### // SYSTEM_MAP
<img src="https://raw.githubusercontent.com/mirsydfchrynto/mirsydfchrynto/main/assets/SYSTEM_MAP.svg" width="100%" />

---

### // LIVE_ENGINEERING_STATE
<img src="https://raw.githubusercontent.com/mirsydfchrynto/mirsydfchrynto/main/assets/LIVE_STATE.svg" width="100%" />

---

### // FAILURE_ARCHIVE
<img src="https://raw.githubusercontent.com/mirsydfchrynto/mirsydfchrynto/main/assets/FAILURE_ARCHIVE.svg" width="100%" />

---

### // ARCHITECTURE_DEEP_IVE: SECURE_CBT
<img src="https://raw.githubusercontent.com/mirsydfchrynto/mirsydfchrynto/main/assets/CBT_BLUEPRINT.svg" width="100%" />

#### The Core Logic
I built the Secure CBT system to solve a specific problem: students bypassing browser-based exam locks. 
- **The Kotlin Bridge:** Instead of relying on Dart-level listeners, I used `startLockTask()` to request the OS to pin the application.
- **Hardware Control:** `FLAG_SECURE` was implemented at the window level to ensure that screenshot attempts return a zero-byte black image.
- **Time Integrity:** To prevent students from changing their device clock to gain extra time, I implemented a network handshake that compares `FieldValue.serverTimestamp()` with local UTC time to calculate drift.

---

### // SYSTEM_THINKING
- **Complexity Choice:** I pull in native complexity (Kotlin/MethodChannels) when OS-level security is non-negotiable. I reject it when a simple in-memory sort can replace a complex DB query.
- **Abstraction Policy:** If an abstraction hides the lifecycle of the underlying process, I avoid it. I prefer building my own bridges over using generic, heavy plugins.
- **Design Philosophy:** Design exists to communicate state. In my UIs, high-contrast typography and real-time status indicators take priority over decorative assets.

---

### // THE_NOW_OPERATING_SYSTEM
- **Currently Building:** Native-to-web synchronization bridge for a distributed dashboard.
- **Currently Learning:** Procedural motion logic to reduce cognitive load in dense data views.
- **Current Research:** [Offline-First Consistency Models](./research/01_offline_consistency.md).

---

### // ACCESS_POINTS
- [NOW.md](./NOW.md) - Monthly status update.
- [/research](./research) - Engineering notebooks and experiments.
- [Portfolio](https://irsyad-architect.surge.sh) - Visual deployment log.
- [Email](mailto:irsydfchrynto@gmail.com) - Correspondence.

---
<div align="center">
  <sub>M. IRSYAD FACHRYANTO // PUBLIC_ENGINEERING_OS_V1.0 // 2026</sub>
</div>
