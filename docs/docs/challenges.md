---
sidebar_position: 4
---

# Challenges & solutions

**Challenge**: When working with a large dataset like cryptoData, filtering the data on every render can be inefficient and lead to performance issues. Initially, you might have faced these problems:

- **Unnecessary Recalculations**: Without useMemo, the filtering function would execute every time the component re-renders, even when cryptoData or search hasn't changed.
- **Performance Issues**: If cryptoData is large, frequent recalculations can slow down the application, causing UI lag.
- **Inefficient Filtering**: Since filtering involves iterating over the entire dataset, doing it repeatedly without optimization increases computational overhead.

**Solution**: The solution involves using useMemo to memoize the filtered data.

- **Memoization**: useMemo ensures that the filtering function only runs when cryptoData or search changes, preventing unnecessary recalculations.
- **Improved Performance**: The app avoids unnecessary re-filtering, reducing computational overhead.
- **Efficient Re-Renders**: The filtered result is stored and only recomputed when dependencies (cryptoData or search) update, optimizing re-renders.
