# 14-polish-docs: Polish And Docs

## Goal
Finish the teaching artifact with codebase docs, API docs, and a retrospective tying the snapshots together.

## What changed and why
Added API documentation, codebase organization guide, operational runbook, and retrospective notes. Cleaned up earlier TODOs by either resolving them or documenting why they remain out of scope.

## Key decisions
- Docs live beside code: rejected Only top-level learning journal. Local docs help the codebase stand alone. The top-level journal still teaches how to navigate snapshots.
- Retrospective includes tradeoffs: rejected Only success narrative. Real engineering includes revisiting decisions. The tradeoff is more reading, but better judgment.
- Keep demo auth documented as demo auth: rejected Pretend it is production auth. Being honest prevents juniors from copying unsafe patterns. The tradeoff is explaining what production would change.

## Deferred on purpose
Nothing further in this artifact. Natural extensions would be real persistence, background jobs, and production identity integration.

## Where to look
- code/README.md
- code/docs/api.md
- code/docs/codebase-organization.md
- code/docs/operations-runbook.md
- code/docs/retrospective.md

## Predict before you read
Which early shortcut aged well, and which one needed the most correction by the final snapshot?

## Skills introduced
- technical documentation
- API documentation
- runbook writing
- engineering retrospective
