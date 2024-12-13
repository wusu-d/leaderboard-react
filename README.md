# Dynamic Leaderboard

A real-time, animated leaderboard with a festive confetti background and a beautiful gradient design, built with Next.js, React, and Tailwind CSS.

![image](https://github.com/user-attachments/assets/b2532e7a-db59-454b-b5fa-e94280df15e4)


## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Implementation Details](#implementation-details)
- [Design Decisions](#design-decisions)
  

## Features

- Real-time score updates every 2 seconds
- Smooth animations for score changes
- Confetti background for a celebratory atmosphere
- Responsive design for various screen sizes


## Demo

You can see a live demo of the project [here](https://leaderboard-react.vercel.app/).

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (v14 or later)
- pnpm (v9.9.0 or later)

### Installation

1. Clone the repository / Download source file
2. Install node dependies using: pnpm install
3. Run project using: pnpm run dev

## Implementation Details

1. React with TypeScript: Ensures type safety and robustness.
2. State Management (useState and useEffect): Core React hooks manage state and handle side effects like score updates and visual highlights.
3. Performance (useCallback): Optimizes the scoring logic to prevent unnecessary re-renders.
4. CSS Transitions: Smooth transformations and animations for an enhanced user experience

## Design Decisions

1. Styling with Tailwind CSS: Tailwind CSS was chosen for its utility-first design, allowing rapid prototyping and consistent styling across components.
2. Component Library: Leveraged shadcn/ui for pre-styled, accessible, and customizable UI components like cards and titles.
3. Gradients and Effects: Background gradients and glowing effects were implemented to enhance visual appeal and user engagement.
4. Responsiveness: Tailwind's flexible classes ensure the layout adapts well to different screen sizes.
