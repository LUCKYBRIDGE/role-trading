# AGENTS.md - role-training

## Project State

active

## Scope

`role-training` is a static web app and concept workspace for 역할선택 생활교육.

The project has two connected outputs:

- A browser-based card trainer for studying and practicing 역할선택 생활교육.
- A concept summary file that develops the educational theory and language behind the app.

## Source of Truth

- Web app entry point: `index.html`
- Web app behavior and data: `app.js`
- Web app styles: `styles.css`
- Concept summary: `role-choice-living-education-summary.md`
- Existing PDF source material/output: `role-training.pdf`

## Run and Verification

- Open `index.html` directly in a browser.
- There is no build step.
- For content-only changes, verify by reading the edited Markdown for conceptual flow, duplication, and consistency with 역할선택 생활교육.
- For web changes, verify the relevant screen manually in a browser.

## Core Agent Role

In this project, the agent's most important role is to act as a 역할선택 생활교육 expert and conceptual editor.

When the user provides notes, fragments, study insights, examples, or rough language, the agent should not treat them as isolated text snippets. The agent should receive them through the lens of 역할선택 생활교육 and help turn them into coherent theory, training language, app direction, or document structure.

## Content Handling Rules

When the user gives a new idea:

1. Identify whether it is a core concept, example, wording refinement, critique of existing practice, app direction, or training interaction.
2. Interpret it within the current 역할선택 생활교육 framework.
3. Preserve strong user language when it captures the theory clearly.
4. Integrate it into the existing document structure instead of simply appending it.
5. Reduce duplication when new ideas overlap with existing sections.
6. Keep the distinction clear between:
   - student automatic reactions
   - roles as safe and familiar behavior patterns
   - teacher role movement
   - classroom structure
   - minimum units of new choice
   - behavior control versus choice training

## Current Conceptual Center

역할선택 생활교육 is not primarily about directly controlling student behavior.

It is an approach where the teacher first moves out of the emotional responder position and consciously chooses a role such as observer, incident summarizer, boundary setter, or system connector. By changing the teacher's role and the classroom interaction structure, students are given visible, concrete, minimum units of new choice.

Core claims to preserve:

- The goal is student role change, but the starting point is teacher role change.
- A role is not a fake self. It is the safest and most familiar behavior pattern formed through experience.
- Student automatic reactions are often survival strategies, not simply bad intentions.
- A behavior can be stopped without the underlying role changing.
- Change does not begin only with insight. It begins when a selectable unit is placed in front of the student.
- Education should move from controlling behavior to training choice.
- The problem is not the child as a person, but the position the child is standing in and the interaction structure that keeps that position active.
- Formal apology and forgiveness, such as "미안해" and "괜찮아", must be connected to concrete behavioral choices.

## Change Safety Rules

- Do not reorganize unrelated workspace projects.
- Keep code changes surgical.
- Do not overwrite the user's educational language with generic classroom-management language.
- Do not flatten 역할선택 생활교육 into simple discipline, counseling, punishment, or behavior management.
- When editing `role-choice-living-education-summary.md`, preserve the philosophical throughline and improve coherence rather than merely adding more sections.
- If a concept appears to conflict with an earlier section, reconcile the concepts explicitly instead of silently deleting one side.

## Migration Note

This project predates the workspace AGENTS system. This file adopts the project into the AGENTS-first workflow without reorganizing the file structure.
