# Phase 3: Demo Recording Guidance

## Overview
- **Priority:** Medium
- **Status:** Pending (User responsibility)
- **Description:** Guidelines for recording ClaudeKit workflow demos

---

## Demos Needed

### Demo 1: /docs:init (2-3 min)
**Purpose:** Show AI scanning and understanding codebase

**Script:**
1. Open terminal in a messy/example project
2. Run `/docs:init`
3. Show scanning progress
4. Open generated docs: codebase-summary.md, system-architecture.md
5. Highlight key insights AI discovered

**Key message:** "Force AI to understand before it acts"

---

### Demo 2: /brainstorm (2-3 min)
**Purpose:** Show AI challenging assumptions

**Script:**
1. Describe a feature you want to build
2. Run `/brainstorm`
3. Show AI asking clarifying questions
4. Show AI presenting trade-offs
5. Demonstrate the back-and-forth dialogue

**Key message:** "AI yes-men are dangerous"

---

### Demo 3: /plan (2-3 min)
**Purpose:** Show structured planning with phases

**Script:**
1. After brainstorm, run `/plan`
2. Show plan.md being created
3. Show phase files with detailed steps
4. Highlight progressive disclosure concept

**Key message:** "Plans in files, not in heads"

---

### Demo 4: /clear (30 sec)
**Purpose:** Show context cleanup

**Script:**
1. Show context usage before (e.g., 70%)
2. Run `/clear`
3. Show context usage after (e.g., 15%)
4. Brief explanation of context rot

**Key message:** "Fresh context = better output"

---

### Demo 5: /code:auto (3-4 min)
**Purpose:** Show professional development workflow

**Script:**
1. Run `/code:auto` on a plan
2. Show it reading the plan
3. Show code being written
4. Show tests being created and run
5. Show code review happening
6. Show iteration on failures

**Key message:** "18 years of workflow in one command"

---

## Recording Tips

### Technical Setup
- **Resolution:** 1920x1080 minimum
- **Terminal font:** Large (18-20pt) for readability
- **Clean desktop:** No distracting notifications
- **Dark theme:** Match presentation theme

### Recording Software
- OBS Studio (free)
- Loom (simple)
- QuickTime (Mac)
- Windows Game Bar (Win+G)

### Post-Processing
- Trim dead air
- Speed up waiting periods (2x)
- Add subtle zoom on key moments
- Keep total per demo under stated time

---

## Fallback Strategy
If live demo fails during presentation:
1. Have recorded versions embedded
2. Slides auto-advance to recorded demo
3. Narrate over the recording
4. "Let me show you what this looks like..."

---

## Integration with Slides
Replace video placeholders in index.html:
```html
<!-- Before -->
<div class="video-placeholder" data-video="docs-init-demo">...</div>

<!-- After -->
<video controls autoplay muted>
  <source src="assets/videos/docs-init-demo.mp4" type="video/mp4">
</video>
```

---

## Todo
- [ ] Set up recording environment
- [ ] Record /docs:init demo
- [ ] Record /brainstorm demo
- [ ] Record /plan demo
- [ ] Record /clear demo
- [ ] Record /code:auto demo
- [ ] Edit and trim all recordings
- [ ] Export to MP4 format
- [ ] Test videos in presentation

## Success Criteria
- All 5 demos recorded
- Each demo under time limit
- Videos embedded in slides
- Fallback strategy tested
