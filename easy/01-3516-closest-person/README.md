# Compare Distance to Destination

This project demonstrates a simple comparison logic to determine which of two people reaches a destination faster based on their distance from it.

---

## Problem Overview

Two people start at different positions on a number line and move toward a common destination.  
The goal is to identify who reaches the destination first by comparing their distances.

---

## Comparison Logic

- Distance is measured as the absolute difference between a person’s position and the destination.
- The person with the smaller distance is considered to reach faster.
- If both distances are equal, the result is a tie.

---

## Output Rules

- Return `1` if person 1 reaches faster
- Return `2` if person 2 reaches faster
- Return `0` if both reach at the same time

---

## Key Learnings

- Absolute values remove direction from distance calculations
- Clear conditional ordering prevents inverted logic
- Small naming choices significantly improve readability