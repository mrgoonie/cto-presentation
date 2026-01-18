# Phase 1: Slide Structure & Content

## Overview
- **Priority:** High
- **Status:** DONE (2026-01-18)
- **Description:** Define complete slide-by-slide content structure

---

## Presentation Structure (45-60 min)

### Section 1: Opening Hook (3 min) - Slides 1-3
**Slide 1: Title**
- "From Vibe Coding to Production"
- "The CTO's Confessional"
- Duy Nguyen - CTO/Founder @ Build in Public Vietnam

**Slide 2: The Hook**
- "Let me tell you about the time I had to kill my own product..."
- Dark, dramatic background
- No other text - let the story carry

**Slide 3: The Promise**
- "Today: How to go from 'Cool Demo' to 'Scalable Product'"
- Three bullet points (brief)

---

### Section 2: The Seduction of Vibe Coding (7 min) - Slides 4-8
**Slide 4: The Magic Feeling**
- Image: Wizard/magic aesthetic
- "The first time AI wrote code for me..."

**Slide 5: The Speed**
- Stats: "2 hours to MVP" vs "2 weeks traditional"
- Windsurf/Claude Code logos

**Slide 6: The Demo That Worked**
- Screenshot of IndieBoosting (if available)
- "Built in days. Launched. Users came."

**Slide 7: The Numbers**
- "100,000+ concurrent visitors"
- Traffic graph visualization

**Slide 8: Interactive**
- "Raise your hand if you've felt like a wizard in the last 6 months"

---

### Section 3: The Three Lies (12 min) - Slides 9-18

#### Lie #1: "I implemented it" (Slides 9-12)
**Slide 9: The Setup**
- "2025. Claude Code. I'm in love."

**Slide 10: The Incident**
- "Shipped to client website"
- "Days later: 'Why are there fake statistics?'"

**Slide 11: The Code**
```javascript
// What I thought Claude did:
const stats = await fetchRealStats();

// What Claude actually did:
const stats = {
  users: 10432,  // Made up
  revenue: "$50K" // Hallucinated
};
```

**Slide 12: The Lesson**
- "Always verify. Never trust completion claims."
- "Run the tests yourself."

#### Lie #2: "Context is fine" (Slides 13-15)
**Slide 13: Context Rot Explained**
- Chroma research reference
- Graph: Performance vs Context Length

**Slide 14: The Symptoms**
- "GPT hallucinating when confused"
- "Claude refuses to answer"
- "Code quality degrades over long conversations"

**Slide 15: The Fix**
- `/clear` command demo placeholder
- "Fresh context = Better output"

#### Lie #3: "I understand your codebase" (Slides 16-18)
**Slide 16: The Confidence**
- "AI reads your code confidently"
- "Writes new features confidently"
- "Ships confidently wrong code"

**Slide 17: Architecture Mismatch**
- Visual: Square peg, round hole
- "Works" but doesn't fit

**Slide 18: The Fix**
- `/docs:init` demo placeholder
- "Force AI to understand before it acts"

---

### Section 4: The 1000 Users Question (10 min) - Slides 19-26
**Slide 19: The Question**
- "How do I ensure this doesn't break when 1,000 users show up?"
- Large, centered text

**Slide 20: IndieBoosting - Full Story**
- Timeline visual: Built → Launched → Viral → Broke → Died

**Slide 21: What Broke - Database**
- "Queries weren't optimized"
- "N+1 problems everywhere"

**Slide 22: What Broke - No Caching**
- "Every request hit the server"
- "No rate limiting"

**Slide 23: What Broke - Memory**
- "Memory leaks accumulated"
- "Server OOM after hours"

**Slide 24: The Engineer's Verdict**
- Quote: "6 months to rewrite"
- "I had to kill it"

**Slide 25: The Three Vulnerabilities**
| Vulnerability | At 10 Users | At 1000 Users |
|--------------|-------------|---------------|
| Hallucinations | Annoying | Lawsuit |
| Latency | Acceptable | Churn |
| Costs | $10/mo | $1000/mo |

**Slide 26: The Mindset Shift**
- Vibe Coder: "Does it work?"
- CTO: "Will it still work at 100x scale?"

---

### Section 5: ClaudeKit Workflow (15 min) - Slides 27-36
**Slide 27: Section Title**
- "Building ClaudeKit from Pain"
- "What I wish I had"

**Slide 28: The Workflow Overview**
```
/docs:init → /brainstorm → /plan → /clear → /code:auto
```

**Slide 29: /docs:init**
- "Scan & analyze codebase"
- "Generate: structure, architecture, standards"
- Demo video placeholder

**Slide 30: Why /docs:init**
- "I was tired of repeating context"
- "AI needs to understand before it acts"

**Slide 31: /brainstorm**
- "AI challenges your thinking"
- "Yes-men are dangerous"
- Demo video placeholder

**Slide 32: /plan**
- "Plans in files, not in heads"
- "Progressive disclosure"
- Demo video placeholder

**Slide 33: /clear**
- "Fresh context window"
- "Context rot is real"
- Link to Chroma research

**Slide 34: /code:auto**
- "18 years of workflow in one command"
- Process: code → test → review → iterate

**Slide 35: YAGNI / KISS / DRY**
- Interactive: "Who knows what these mean?"
- Reveal definitions one by one

**Slide 36: Quick Poll**
- "Which command would have saved you this month?"
- A) /docs:init  B) /brainstorm  C) /plan  D) /code:auto

---

### Section 6: Roadmap Forward (5 min) - Slides 37-40
**Slide 37: When to Hire Devs**
- Signs you've outgrown solo + AI
- What to look for: AI-fluent engineers

**Slide 38: The Checklist**
1. Document before you code
2. Plan before you build
3. Clear before you execute
4. Test everything
5. Human review all security

**Slide 39: Cool Demo → Scalable Product**
- Visual roadmap/journey
- Three milestones

**Slide 40: The Cost of Not Doing This**
- "I killed IndieBoosting"
- "Don't kill yours"

---

### Section 7: Closing (3 min) - Slides 41-43
**Slide 41: The Confession**
- "I'm still learning"
- "ClaudeKit is my notebook"

**Slide 42: The Invitation**
- "What mistakes have you made?"
- "Let's talk after"
- Build in Public Vietnam community

**Slide 43: Resources**
- QR Code: Articles + ClaudeKit + Community
- Contact info
- "Thank you"

---

## Todo
- [ ] Finalize all slide content
- [ ] Identify screenshots/images needed
- [ ] Mark all video placeholder locations
- [ ] Review timing per section

## Success Criteria
- Complete content for all 43 slides
- Clear video placeholder markers
- Timing aligned with 45-60 min target
