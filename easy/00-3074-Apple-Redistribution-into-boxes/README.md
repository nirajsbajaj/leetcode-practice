# Apple Redistribution into Boxes — Problem Solving Notes

This repository documents my reasoning and learnings while solving the LeetCode problem **Apple Redistribution into Boxes**.

The focus here is not just the final solution, but the **problem-solving process**—how to interpret constraints, identify invariants, and simplify a seemingly complex statement into a clear algorithm.

---

## Problem Summary

- You are given multiple packs of apples.
- You are also given boxes, each with a fixed capacity.
- Apples from any pack can be split and redistributed across multiple boxes.
- The task is to determine the **minimum number of boxes** required to store all apples.

---

## Initial Interpretation

At first glance, the problem appears more complex than necessary due to:
- explicit references to individual packs,
- indexed descriptions of packs and boxes,
- and detailed constraints.

This initially led me to assume that pack boundaries or pack-to-box relationships might matter, requiring careful tracking during redistribution.

---

## Key Insight

The critical realization comes from this condition:

> *Apples from the same pack can be distributed into different boxes.*

Once this is understood, the problem simplifies significantly:

- Individual apple packs become irrelevant.
- Only the **total number of apples** matters.
- The task reduces to selecting box capacities that can cover this total.

---

## Core Concepts Learned

### Invariant
An **invariant** is a quantity that remains unchanged regardless of allowed operations.

- In this problem, the invariant is the **total number of apples**.
- Redistribution does not affect this value.

### Red Herring
A **red herring** is information that appears important but does not influence the solution.

- The concept of individual apple packs is a red herring.
- Once splitting is allowed, pack identity has no impact.

Recognizing these helped strip away unnecessary structure and focus on the real problem.

---

## Solution Strategy

1. Compute the total number of apples.
2. Sort box capacities in descending order.
3. Greedily select the largest boxes until their combined capacity meets or exceeds the total apples.
4. Count how many boxes were used.

This greedy approach is optimal because choosing larger capacities first minimizes the number of boxes required.

---

## Outcome

- The solution passes all test cases on LeetCode.
- The primary challenge was **problem comprehension**, not implementation.
- This exercise reinforced the importance of:
  - trusting constraints,
  - identifying invariants early,
  - and ignoring misleading details.
