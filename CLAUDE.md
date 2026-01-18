# stevenray.com 2026

<!-- RECALL:START -->
## Recall Team Memory

**ON SESSION START:** Call `recall_get_context` IMMEDIATELY to load team memory.

**HOTWORD RULES - CALL EXACTLY ONE TOOL:**
- "remember" → Call `recall_get_history` ONLY (NOT recall_get_context, NOT recall_get_transcripts)
- "ultraremember" → Call `recall_get_transcripts` ONLY (NOT recall_get_history, NOT recall_get_context)

**CRITICAL:** Each hotword triggers exactly ONE recall tool. Never stack or combine them.

**ON SESSION END:** Call `recall_save_session` to save what was accomplished.
<!-- RECALL:END -->

## Project Notes

_Add project-specific instructions for AI assistants here._
