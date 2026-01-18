# Maximum Happiness Sum (LeetCode)

This repository documents my solution journey for the LeetCode problem **“Maximum Happiness Sum”**, focusing on *how the solution evolved* from a correct but inefficient approach to an optimized greedy solution that satisfies all constraints.

The code is intentionally split into two files to reflect this progression.

---

## 🧩 Problem Overview

You are given:
- An integer array `happiness`, where `happiness[i]` represents the happiness of the `i`-th child.
- A positive integer `k`.

You must select **exactly `k` children** in `k` turns.

### Rules
- When a child is selected, the happiness of **all remaining unselected children** decreases by `1`.
- Happiness values **never become negative**.
- The goal is to return the **maximum possible sum** of the happiness values of the selected children.

---

## 🧠 Approach 1 — Simulation (Correct but Inefficient)

**File:** `step-3-final-answer.js`

### Idea

This approach directly simulates the problem statement:

1. Sort the happiness values in descending order.
2. For each of the `k` turns:
   - Select the happiest child.
   - Remove that child from consideration.
   - Decrease the happiness of all remaining children by `1` (clamped at `0`).
3. Sum the selected happiness values.

### Characteristics

- Mirrors the problem description literally
- Easy to reason about
- Useful for validating correctness

### Complexity

- **Time Complexity:** `O(n²)`
- **Space Complexity:** `O(n)`

### Result

Although logically correct, this approach results in **Time Limit Exceeded (TLE)** on LeetCode due to nested loops and repeated array mutations.

This file is kept intentionally to preserve the learning process and reasoning.

---

## 🚀 Approach 2 — Optimized Greedy Solution (Accepted)

**File:** `step-3-final-answer-optimised.js`

### Key Insight

Each unselected child loses **exactly 1 happiness point per prior selection**.

Therefore:
- The child selected at index `i` has effectively lost `i` happiness.
- Explicit simulation of decrements is unnecessary.

### Strategy

1. Sort the happiness array in descending order.
2. For each of the first `k` children:
   - Add `max(happiness[i] - i, 0)` to the total sum.
3. Return the sum.

### Complexity

- **Time Complexity:** `O(n log n)`
- **Space Complexity:** `O(1)` (excluding sorting)

### Result

This approach passes all constraints and is the **recommended submission** for LeetCode and interviews.

---

## 📊 Comparison

| Aspect | Simulation | Optimized |
|------|-----------|-----------|
| Correctness | ✅ | ✅ |
| Passes LeetCode | ❌ (TLE) | ✅ |
| Time Complexity | O(n²) | O(n log n) |
| Space Complexity | O(n) | O(1) |
| Interview-ready | ❌ | ✅ |

---

## 🎯 Key Takeaway

This problem demonstrates a common algorithmic progression:

> **Simulate the process → Observe the pattern → Replace simulation with a mathematical invariant**

The first solution builds intuition and confidence, while the optimized solution leverages a greedy insight to meet performance constraints.

Both files are retained to document this evolution clearly.

---

## 📌 File Structure

step-3-final-answer.js // Simulation-based solution (TLE)
step-3-final-answer-optimised.js // Optimised greedy solutiion (Accepted)


---

## 📝 Notes

- The simulation approach is intentionally preserved for learning and documentation.
- The optimized approach is the one that should be submitted to LeetCode.

---