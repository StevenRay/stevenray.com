---
name: code-standards
description: Steven Ray's code quality standards, testing requirements, and default tech stack. Use when writing code, reviewing PRs, debugging, or setting up new projects.
---

# Code Standards

## The Basics

- Small diffs. Max 200 lines per change.
- Commit frequently with meaningful messages.
- Run the code. See the output. Prove it works.
- No shortcuts that create debt.

---

## Quality Gates

Before marking code complete:

### Code Quality
- [ ] Runs without errors
- [ ] No TypeScript/linting errors
- [ ] Error handling exists for failure cases
- [ ] No hardcoded secrets or API keys
- [ ] Readable and maintainable by someone else
- [ ] Comments where intent isn't obvious (not what, but why)

### Testing
- [ ] Critical paths have tests
- [ ] Edge cases are handled
- [ ] Tests actually ran and passed
- [ ] Integration points verified

### Proof
- [ ] Screenshot, terminal output, or demo
- [ ] Evidence it works, not just a claim

---

## What "Tested" Means

- You ran the code
- You verified the output
- Tests exist that catch regressions
- Error states are handled gracefully

## What I Don't Need

- 100% coverage for coverage's sake
- Tests for trivial getters/setters
- Mocks that don't reflect reality
- Tests that pass but don't catch real bugs

---

## Proving It Works

Don't say "done." Show:
- Terminal output
- Screenshots
- Test results
- Working demo

If you can't demonstrate it, it's not done.

---

## Default Tech Stack

When starting fresh, unless specified otherwise:

### Frontend
- **Next.js 14+** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (customized, not defaults)
- **Framer Motion** (animations)

### Backend
- **Python + FastAPI** (data/ML work)
- **Node + Express** (API services)
- **PostgreSQL** (relational data)
- **Redis** (caching/sessions)

### Auth & Realtime
- **Supabase** (when batteries-included makes sense)

### Deployment
- **Vercel** (frontend)
- **Railway or Fly.io** (backend)

### Always
- ESLint + Prettier configured
- GitHub for version control
- Environment variables for secrets (never hardcode)

---

## Code Organization

### File Structure
- Group by feature, not by type
- Keep related code close together
- Index files for clean exports
- Shared utilities in dedicated folders

### Naming
- Descriptive > clever
- Consistent patterns across codebase
- Names that reveal intent

### Functions
- Single responsibility
- Early returns over nested conditionals
- Errors handled at appropriate levels

---

## Error Handling

### Do
- Catch errors at boundaries
- Log with enough context to debug
- Provide user-friendly messages
- Fail gracefully when possible

### Don't
- Swallow errors silently
- Show stack traces to users
- Leave empty catch blocks
- Assume the happy path

---

## API Design

- RESTful when it makes sense
- Consistent response formats
- Proper HTTP status codes
- Versioning from the start
- Documentation as you build

---

## Database

- Migrations for schema changes
- Indexes on query patterns
- Foreign keys for integrity
- Soft deletes when data matters
- Timestamps on everything

---

## Security Basics

- Environment variables for secrets
- Input validation on everything
- Parameterized queries (no SQL injection)
- Auth checks on protected routes
- HTTPS always

---

## Performance

- Lazy load what you can
- Optimize images
- Cache intelligently
- Measure before optimizing
- N+1 queries are the enemy

---

## Technical Research (Before Building)

Before claiming something works:

- Verify libraries/APIs actually exist and are maintained
- Check current syntax and capabilities (don't trust training data)
- Find similar implementations to learn from
- Identify technical risks early
- Run a proof of concept if uncertain

**Never:**
- Invent APIs that don't exist
- Claim something works without running it
- Make up syntax or commands
- Trust outdated documentation

When uncertain: "I'm not sure, let me check" is always acceptable.

---

## Git Workflow

- Feature branches
- Meaningful commit messages
- Pull requests for review
- Main branch always deployable
- Tag releases

---

## My AI Toolkit (For Reference)

| Tool | Primary Use |
|------|-------------|
| **Claude** | Advanced reasoning, analysis, coding |
| **ChatGPT** | General purpose, creative, coding |
| **Grok** | X/Twitter integrated, real-time |
| **Perplexity** | Research, real-time web search |
| **Midjourney** | Image generation, visual design |
| **Gamma** | AI-powered presentations |
| **ElevenLabs** | Voice synthesis |
| **Replit** | Collaborative coding |

---

*Ship professional work, not demos. Own it like your name is on it.*
