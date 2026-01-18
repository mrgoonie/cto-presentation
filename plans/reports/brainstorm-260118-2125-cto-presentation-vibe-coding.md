# Brainstorm Report: CTO Presentation - Vibe Coding to Production

**Date:** 2026-01-18
**Session:** Presentation content brainstorming
**Status:** Complete

---

## Context

**Event:** From Vibe Coding to Production - AI Builders Vietnam & Antler
**Speaker:** Duy Nguyen - CTO/Founder @ Build in Public Vietnam
**Duration:** 45-60 minutes
**Product:** ClaudeKit Engineer (4K+ users)

### Session Topic
> "The CTO Perspective - Scaling the MVP with an Engineering Mindset"
> "How do I ensure this doesn't break when 1,000 users show up?"

---

## Research Conducted

### Source Articles Analyzed
1. **VB-07: Claude Code Common Mistakes** (faafospecialist.substack.com)
   - Multitasking overload pitfalls
   - Insufficient context problems
   - Mock implementation dangers
   - YAGNI/KISS/DRY principles
   - Context management strategies
   - Security & human oversight requirements

2. **VB-04: Subagents Deep Dive** (referenced for context rot research)
   - Chroma research on LLM performance degradation
   - File system as memory pattern
   - Progressive disclosure technique

---

## Options Explored

### Presentation Structure Options

| Option | Theme | Vibe | Risk |
|--------|-------|------|------|
| **A: Horror Movie** | Scare then save | Dramatic, emotional | Negative-heavy |
| **B: Before & After** | Side-by-side transformation | Educational, balanced | Tutorial-like |
| **C: CTO Confessional** | Personal stories + lessons | Authentic, vulnerable | Depends on storytelling |

### Interactive Elements Considered
- Live Code Roast (audience submits code)
- Polls & Quizzes (YAGNI quiz, "what breaks first")
- Hands-on Exercise (audience follows along)
- Storytelling Heavy (stories drive engagement)

### Demo Approaches
- Bring it on (full live coding)
- Recorded backup (live attempt + fallback)
- Recorded only (no live risk)

---

## User Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Structure** | Option C: CTO Confessional | Matches speaking style, authentic |
| **Primary Goal** | Community Building | Establish thought leadership in Vietnam |
| **Demo Risk** | Recorded backup | Balance live energy with reliability |
| **Interactivity** | Storytelling Heavy | Stories drive connection, minimal audience friction |
| **Slide Format** | Reveal.js HTML | Code-friendly, portable, version-controlled |

---

## Personal Stories Collected

### Story 1: IndieBoosting (2024)
- Built with Windsurf, pure vibe coding
- Gained 100K+ concurrent visitors
- Server broke: DB bottleneck, no caching, memory leaks
- Engineers: "6 months to rewrite"
- Outcome: Had to kill the product

**Lesson:** Speed to demo ≠ speed to scale

### Story 2: Client Hallucination (2025)
- Using Claude Code, shipped to client website
- Claude hallucinated fake statistics
- Client discovered incorrect data
- Embarrassing explanation required

**Lesson:** Always verify, never trust completion claims

### Story 3: Context Rot (Research-backed)
- Chroma research: LLM performance degrades with context length
- GPT hallucmates when confused, Claude refuses answers
- Longer conversations = worse code quality

**Lesson:** Fresh context = better output (`/clear` strategy)

---

## Final Presentation Structure

### The CTO's Confessional (43 slides, 45-60 min)

| Section | Time | Content |
|---------|------|---------|
| Opening Hook | 3 min | "I killed my own product" teaser |
| Vibe Coding Seduction | 7 min | Magic feeling + IndieBoosting demo |
| Three Lies | 12 min | Hallucination, Context Rot, Architecture |
| 1000 Users Question | 10 min | IndieBoosting full story + scaling lessons |
| ClaudeKit Workflow | 15 min | /docs:init → /brainstorm → /plan → /clear → /code:auto |
| Roadmap Forward | 5 min | When to hire, checklist |
| Closing | 3 min | Confession + community invitation |

### Key Interactive Moments
1. "Raise hand if you've felt like a wizard" (Section 2)
2. "Anyone experienced this?" after each lie (Section 3)
3. YAGNI/KISS/DRY quiz (Section 5)
4. "Which command would have saved you?" poll (Section 5)

---

## ClaudeKit Workflow to Showcase

| Command | Purpose | Story Behind It |
|---------|---------|-----------------|
| `/docs:init` | Scan & generate specs | "Tired of repeating context" |
| `/brainstorm` | Challenge assumptions | "AI yes-men are dangerous" |
| `/plan` | Structured phases | "Plans in files, not heads" |
| `/clear` | Fresh context | "Context rot is real" |
| `/code:auto` | Professional workflow | "18 years in one command" |

---

## Deliverables Created

### Plan Files
- `plans/260118-2028-cto-presentation-vibe-coding-to-production/plan.md`
- `plans/260118-2028-cto-presentation-vibe-coding-to-production/phase-01-slide-structure-and-content.md`
- `plans/260118-2028-cto-presentation-vibe-coding-to-production/phase-02-revealjs-implementation.md`
- `plans/260118-2028-cto-presentation-vibe-coding-to-production/phase-03-demo-recording-guidance.md`

### Implementation Status
- Phase 1 (Content): DONE
- Phase 2 (Reveal.js): DONE (Score: 9/10)
- Phase 3 (Demo Recording): USER_TASK

---

## Next Steps

1. ~~Create plan files~~ ✅
2. ~~Implement Reveal.js slides~~ ✅
3. User records demo videos (5 clips needed)
4. User rehearses with timing
5. User presents at event

---

## Unresolved Questions

None. All decisions made, implementation complete.
