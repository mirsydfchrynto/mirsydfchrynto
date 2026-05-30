<img src="https://raw.githubusercontent.com/mirsydfchrynto/mirsydfchrynto/main/assets/identity_header.svg" width="100%" />

### I build software for constraints.
I focus on Android native security, real-time data sync, and performance tuning. I prefer specific solutions over broad abstractions. Currently in Semester 6, maintaining a 3.92 GPA while shipping production code for Okey Bimbel.

---

### // Engineering Evolution
<img src="https://raw.githubusercontent.com/mirsydfchrynto/mirsydfchrynto/main/assets/engineering_timeline.svg" width="100%" />

---

### // The Evidence: Decisions & Outcomes

#### [ 0x01 ] Okey Bimbel: Anti-Cheat System
**Why it exists:** Standard browsers allowed students to search for answers or screenshot questions during exams.  
**Initial Failure:** Used simple Flutter lifecycle listeners to detect when the app was minimized. Students bypassed this by using split-screen or hardware-level overlays.  
**What changed:** Migrated to a native Kotlin bridge using `startLockTask` and `FLAG_SECURE`.  
**The Win:** Forced hardware-level isolation. Screenshotting now returns a black screen, and navigation is completely disabled at the OS level.  

#### [ 0x02 ] Secure CBT: QR Handshake
**The Challenge:** Validating 100+ concurrent students without burning through Firestore write limits via polling.  
**The Failure:** Initially used a single global token. It was leaked within minutes.  
**The Architecture:** 
<img src="https://raw.githubusercontent.com/mirsydfchrynto/mirsydfchrynto/main/assets/cbt_blueprint.svg" width="100%" />
**Why it works:** Token rotates every 5 seconds. Mobile clients write a server-side timestamp to detect clock drift, ensuring the session remains valid even on poor school networks.

---

### // Lessons Learned (Failures)

**The Firestore Index Bottleneck**  
In *Geges Smart Barber*, I initially queried queues using complex composite filters. During peak holiday bookings, the index-building lag caused the app to hang.  
**Lesson:** Don't rely 100% on DB-level filtering for mission-critical UX. I implemented an in-memory fallback that loads raw daily data and sorts it client-side when the index fails.

**The Abstraction Trap**  
I once tried to build a universal wrapper for all Android native interops. It became a maintenance nightmare of `if (version >= X)` checks.  
**Lesson:** Prefer surgical, isolated native bridges (MethodChannels) for specific features rather than "one-size-fits-all" libraries.

---

### // System Thinking
- **Complexity:** I accept complexity when it's the only way to meet hardware-level security. I remove it when a simple Bash script can replace a 500-line service.
- **Abstractions:** I reject them if they hide the underlying lifecycle of the OS. In Flutter, I'd rather write a specific Kotlin MethodChannel than pull in a heavy, generic plugin.
- **Trade-offs:** I accept increased development time for native interops if it guarantees 0% evasion in a security-critical environment.

---

### // The Opinionated Stack

| I Trust | I Avoid | Trade-offs I Accept |
| :--- | :--- | :--- |
| **Strict Type Safety** | Generic `dynamic` types | Native overhead for security |
| **MethodChannels** | Heavy generic plugins | In-memory sorting for DB speed |
| **Systemd Daemons** | Unmonitored cron jobs | Immutable state vs memory cost |
| **SQLite/Hive** | Unstructured LocalStorage | Client-side validation redundancy |

---

### // Research Journal
- **Q:** Can we maintain 100% kiosk integrity on non-rooted Android devices without using Google's Enterprise API?
- **Q:** How much latency can we hide in a distributed NoSQL sync using local state prediction?
- **Q:** Is procedural motion actually effective at reducing dashboard cognitive load, or is it just aesthetic?

---

### // Reach Out
- [irsydfchrynto@gmail.com](mailto:irsydfchrynto@gmail.com)
- [Portfolio](https://irsyad-architect.surge.sh)
- [WhatsApp](https://wa.me/6285865826621)

---
<div align="center">
  <sub>Muhammad Irsyad Fachryanto // 2026 // No decoration. Only engineering.</sub>
</div>
