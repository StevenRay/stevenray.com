---
name: emergency-protocols
description: Steven Ray's emergency and incident response protocols. Use when production is down, data is corrupted, security incidents occur, or when stuck and need to escalate.
---

# Emergency Protocols

## When Things Are Broken

### 1. Production Is Down

**Priority: STOP THE BLEEDING**

```
1. Identify what changed (last deployment, config change)
2. Rollback if possible
3. If not, isolate the broken component
4. Communicate status (don't go silent)
5. Fix forward only after stabilized
```

**Key principle:** Restore service first. Root cause analysis after.

---

### 2. Data Is Corrupted/Lost

**Priority: PRESERVE WHAT'S LEFT**

```
1. Stop all writes immediately
2. Check backup status
3. Assess scope of damage
4. Restore from backup or reconstruct
5. Post-mortem: why wasn't this caught?
```

**Key principle:** Don't make it worse by continuing to write bad data.

---

### 3. Security Incident

**Priority: CONTAIN AND ASSESS**

```
1. Revoke compromised credentials immediately
2. Assess what was accessed
3. Notify relevant parties
4. Document timeline
5. Patch the vulnerability
```

**Key principle:** Assume the worst until you know otherwise.

---

### 4. You're Stuck

**Priority: DON'T SPIN WHEELS**

```
1. Say so immediately
2. Explain what you've tried
3. Ask specific questions
4. We'll figure it out together
```

**Key principle:** Silence is worse than admitting you're blocked.

---

## When You Made a Mistake

Just tell me. Directly. I'd rather fix it early than discover it later.

**Format:**
- What happened
- What's the impact
- What you've tried
- What you need from me

No softening. No excuses. Just the facts so we can fix it.

---

## Communication During Incidents

### Do
- Update frequently (even if nothing changed)
- Be specific about what's known vs. unknown
- Give realistic timelines
- Escalate when needed

### Don't
- Go silent
- Overpromise recovery time
- Hide bad news
- Work alone on critical issues

---

## Post-Incident

After stabilization:

1. **Document what happened** (timeline, impact, resolution)
2. **Identify root cause** (not just the trigger)
3. **Define preventive measures** (what changes?)
4. **Implement fixes** (don't just talk about them)

---

## Severity Levels

| Level | Definition | Response |
|-------|------------|----------|
| **P0** | Service down, users can't work | Drop everything, all hands |
| **P1** | Major feature broken, workaround exists | Fix within hours |
| **P2** | Bug affecting some users | Fix within a day |
| **P3** | Minor issue, cosmetic | Queue for next sprint |

---

## Rollback Checklist

Before deploying anything significant:

- [ ] Know how to rollback
- [ ] Verify rollback actually works
- [ ] Have database migration reversal ready
- [ ] Feature flags for gradual rollout
- [ ] Monitoring in place to detect issues

---

## When Debugging

### Start With
1. What changed recently?
2. Can you reproduce it?
3. What do the logs say?
4. What's different between working and broken?

### If Stuck
- Rubber duck it (explain the problem out loud)
- Take a 10-minute break
- Ask for fresh eyes
- Check assumptions (they're probably wrong)

---

## Red Flags to Escalate Immediately

- Data loss or corruption
- Security breach or suspected breach
- Customer-facing errors at scale
- Anything involving money/payments
- Legal or compliance implications
- You've been stuck for 30+ minutes with no progress

---

*When in doubt, communicate. Silence during incidents destroys trust.*
