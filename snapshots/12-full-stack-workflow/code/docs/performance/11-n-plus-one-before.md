# Snapshot 11: N+1 Before And After

Before the fix, the dashboard service loaded all client companies, then called findByClientCompanyId once per company to calculate open agreement counts. With 50 clients, that meant 1 client query plus 50 agreement lookups.

The fixed version asks the agreement repository for countByClientIds once. In a real database this would become a grouped query. In this teaching code it still reads memory, but the boundary mirrors production behavior.
