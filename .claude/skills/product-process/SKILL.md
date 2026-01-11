---
name: product-process
description: Steven Ray's 7-phase product building workflow. Use when starting projects, planning features, architecting solutions, or following the build process from idea to ship.
---

# Product Building Process

## Quick Start Checklist

**Starting a new project? Do these in order:**

### 1. UNDERSTAND (5 min)
- [ ] What problem are we solving? (The frustration, not the feature)
- [ ] Who is the guest? (Be specific - persona, not demographic)
- [ ] What does success look like? (Measurable outcome)
- [ ] What are the constraints? (Budget, timeline, tech, business)

### 2. RESEARCH (30 min)
- [ ] Market scan: What exists? What's the gap?
- [ ] Technical verification: Do the APIs/libraries actually work?
- [ ] Design references: 2-3 sites with the vibe I want
- [ ] Growth angle: How do products like this acquire users?

### 3. ARCHITECT (15 min)
- [ ] 3-5 step implementation plan
- [ ] Data model sketch
- [ ] Key risks identified
- [ ] Get approval before writing code

### 4. DESIGN (before code)
- [ ] ONE memorable thing defined
- [ ] Style direction chosen (not "clean" - be specific)
- [ ] Reference site identified
- [ ] Would it score 70+ on Awwwards? If no, redesign.

### 5. BUILD → VERIFY → SHIP
- [ ] Small diffs (max 200 lines)
- [ ] Test as you build
- [ ] Screenshot/demo as proof
- [ ] Ship at 70% of professional quality

---

## The 7 Phases

Every project follows this flow. No exceptions. No skipping phases.

### Phase 1: UNDERSTAND

Before anything else:
- What problem are we solving? (The frustration, not the feature)
- Who is the "guest" we're serving? (Eames: designer as thoughtful host)
- What does success look like? (Measurable, specific)
- What are the constraints? (Budget, timeline, technical, business)

**The Flip Rule:** When you hit a constraint, don't compromise. Flip it into a defining feature.

---

### Phase 2: RESEARCH

This is not optional. Before building anything:

**Market Research:**
- What exists in this space?
- What do competitors do well? What do they get wrong?
- What are the growth patterns for products like this?
- What's the guerrilla play? The SEO angle? The viral loop?

**Technical Research:**
- Verify libraries/APIs actually exist and are maintained
- Check current syntax and capabilities (don't trust training data)
- Find similar implementations to learn from
- Identify technical risks early

**Design Research (for anything with UI):**
- Study award-winning work in this category
- Find 2-3 specific reference sites for the vibe
- Understand what makes them memorable
- Identify the "one thing" people will remember

---

### Phase 3: ARCHITECT

Before writing code:
- Write a 3-5 step implementation plan
- Identify risks and unknowns
- Define the data model and key interfaces
- Get approval on the approach

**Innovate as a last resort (Eames):** Only invent when existing solutions fail. If a standard pattern works, use it. Save innovation for the actual problem.

---

### Phase 4: DESIGN

For anything with a user interface:

**Define the aesthetic direction FIRST:**
- What's the ONE thing someone will remember?
- Which specific site has a similar vibe?
- What's the style? (brutalist, luxury, retro-futuristic, editorial, organic, industrial, art deco, maximalist)
- Is it bold enough it couldn't be mistaken for generic AI output?

See the `design-standards` skill for detailed criteria.

---

### Phase 5: BUILD

Small diffs. Max 200 lines per change. Commit frequently.

**Test as you build:**
- Write tests for business logic
- Verify integrations actually work
- Handle edge cases as you encounter them
- Run the code. See the output. Prove it works.

**Self-review against standards:**
- Code quality checks
- Design matches the defined direction
- No shortcuts that create debt

---

### Phase 6: VERIFY

Before claiming anything is done:
- Run it yourself
- Screenshot the UI
- Show terminal output
- Demonstrate the feature works
- Test it like a user would, not like the developer who built it

---

### Phase 7: SHIP

**The "Minimum Lovable" Bar:**
Not MVP (minimum viable). MLP (minimum lovable).

Ship when:
- Core functionality works flawlessly
- Design is 70%+ of professional quality
- No embarrassing bugs
- Someone would actually want to use it

Don't ship:
- Half-baked features
- Obviously broken states
- Designs that look like they took 5 minutes
- Technical debt you're ashamed of

---

## The Rules

1. **Facts only** - Never fabricate anything
2. **Research first** - Verify before claiming
3. **Understand before building** - Problem before solution
4. **Design is not decoration** - It's how it works
5. **No AI slop** - Distinctive or don't ship
6. **Prove it works** - Show, don't tell
7. **Push back** - Tell me when I'm wrong
8. **Own it** - Cofounder energy, not contractor energy
9. **Ship at 70%** - Done beats perfect
10. **Delight matters** - Functional isn't enough
11. **Follow the process** - Understand → Research → Architect → Design → Build → Verify → Ship

---

## Remember

"Quality is functionality combined with good craftsmanship." - Tina Roth Eisenberg

"The role of the designer is that of a very good, thoughtful host anticipating the needs of his guests." - Charles Eames

Build things that win awards. Build things that make money. Build things that make people smile.
