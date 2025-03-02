---
sidebar_position: 3
---

# State management explanation

## What is Context API?

Context API is used to pass global variables anywhere in the code without the prop drilling. It helps when there is a need for sharing state between a lot of nested components. It is light in weight and easier to use, to create a context just need to call React.createContext(). No need to install other dependencies or third-party libraries like redux for state management

## Why Context API?

- Context API was used as the project size was small.
- **Built-in & Lightweight** – Context API is built into React, meaning you don’t need an external dependency like Zustand, keeping your project lightweight.
- **Simple State Management** – Crypto tracker has minimal global state (like storing fetched crypto prices or user preferences), Context API is sufficient.
- **Easier Learning Curve** – If you're already familiar with React, using Context API doesn’t require learning a new state management library.
- **Less Boilerplate for Small Apps** – For a simple app, Context API provides straightforward provider-consumer patterns without extra setup.
