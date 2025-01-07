# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener in React applications: forgetting to unsubscribe, leading to potential memory leaks. The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem

The `onAuthStateChanged` listener is attached but never detached, causing the listener to remain active even after the component unmounts. This can lead to memory leaks and unpredictable behavior.

## Solution

The solution involves using a cleanup function within the component's `useEffect` hook or equivalent lifecycle method to ensure the listener is removed when the component unmounts.