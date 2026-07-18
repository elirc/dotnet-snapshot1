# Retrospective

The walking skeleton paid off because every later feature had a place to connect. The in-memory repository abstraction also aged well because services never needed to know where records lived.

The biggest intentional shortcut was manual frontend fetching. It was useful for teaching loading and error state, then became noisy enough to justify hooks and cache behavior.

The N+1 lesson shows why realistic boundaries matter even in fake persistence. Once the repository exposed countByClientIds, the service could express the efficient use case without caring about storage mechanics.

The remaining production gaps are real persistence, a real identity provider, background workflow automation, and external rate-limit storage.
