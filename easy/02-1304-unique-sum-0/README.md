# Find N Unique Integers That Sum to Zero

## Problem Overview

The task is to return **any array** of length `n` containing **unique integers** such that the **sum of all elements is zero**.

The problem does not require:
- Matching example outputs
- Randomness
- A specific ordering of values

Only the constraints matter.

---

## Initial Interpretation

While reading the problem, the word **“unique”** stood out prominently.

After seeing one of the example outputs: `[-7, -1, 1, 3, 4]`


I initially interpreted the problem as requiring a set of **random unique integers** whose sum must later be balanced to zero.

Seeing one of the examples led me to believe that the solution involved randomness and explicit handling of uniqueness rather than a fixed construction.

That early interpretation is captured in the file:

step-2-assign-random-unique-num.js


This approach focused on generating random numbers and manually enforcing uniqueness, which introduced unnecessary complexity.

---

## Key Realization

The turning point was understanding the importance of the phrase:

> **“Return any array”**

This clarified that:
- Example outputs are illustrative, not prescriptive
- There are infinitely many valid answers
- The problem is **constructive**, not probabilistic

Once this was clear, randomness was no longer needed.

---

## Core Insight

The solution depends entirely on whether `n` is **odd or even**.

- Numbers can always be balanced using positive–negative pairs
- Each pair contributes zero to the total sum
- When `n` is odd, a single zero can be used to complete the array

This approach guarantees:
- Uniqueness
- Correct array length
- Sum equal to zero

Without retries or collision handling.

---

## Final Solution

The correct and finalized approach is implemented in:

step-3-final-answer.js


This version uses a deterministic construction based on mathematical symmetry rather than random generation.

---

## Lessons Learned

- Examples demonstrate valid outputs, not required strategies
- Randomness is unnecessary when a problem allows *any* valid answer
- Loop structure matters when handling retries and constraints
- Mathematical invariants lead to simpler and more reliable solutions

---

## Final Takeaway

This problem is ultimately about recognizing balance and symmetry.

Once the constraints are understood clearly, a simple deterministic approach replaces a complex random one. This README documents that reasoning journey—from misinterpretation to clarity.
