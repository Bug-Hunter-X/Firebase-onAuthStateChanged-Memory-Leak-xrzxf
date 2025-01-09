# Firebase onAuthStateChanged Memory Leak

This repository demonstrates a common error when using Firebase's `onAuthStateChanged` function: forgetting to unsubscribe.  This can cause memory leaks and unexpected behavior in your application.

## The Problem

The `onAuthStateChanged` listener remains active until explicitly unsubscribed. If not unsubscribed, when a component using it unmounts, it continues to consume resources, leading to memory leaks. 

## The Solution

The `authSolution.js` file demonstrates the correct way to use `onAuthStateChanged`.  It includes an unsubscribe function to cleanly remove the listener when it's no longer needed.  This prevents memory leaks and ensures your app runs efficiently.

## How to Reproduce

1. Clone this repository.
2. Install dependencies (if any).
3. Run the buggy example (`authBug.js`). Observe memory usage over time. 
4. Run the solution example (`authSolution.js`). Compare memory usage. 