# Chatbot UI

## Demo
https://chatbot-ui-six-pearl.vercel.app/

## About
This project is a chatbot interface built with React and TypeScript. It allows users to send messages and receive mocked responses with a simulated delay.

The goal of this project was to demonstrate my ability to create a responsive and user-friendly interface, manage local state and build clean and scalable component architecture.

## Tech Stack
- React
- TypeScript
- Tailwind CSS
- Vite

## Features
- Sending messages
- Receiving mocked answers with simulated delays
- Clickable suggestion bubbles in the empty state
- Responsive layouts (mobile and desktop)
- Controlled inputs, that prevents unexpected behavior
- Typing indicator
- Disabled input and button during response typing
- Custom SVG-based UI elements
- Voice input functionality 
- Edit user message functionality
- Copying to clicboard chat response

## How to run 
```bash
npm install
npm run dev
```

## Architecture & Decisions
- Used local state instead of global state to keep the application simple and aligned with the project scope
- Split the UI into small, reusable components (ChatContainer, MessagesList, MessageInput, etc.)
- Used controlled inputs to ensure predictable behavior and better form handling
- Implemented conditional rendering for empty state vs. active conversation
- Tailwind CSS was used for fast and consistent styling
- Implemented voice input using the Web Speech API (via react-speech-recognition). The transcript is synced with the textarea, allowing users to review and edit the message before sending.

## Challenges
- Creating custom SVG shape for suggestion cards with precise sizes and color gradients
- Handling auto-scroll for new messages
- Designing responsive layouts 
- Implementing voice input functionality 

## Future Improvements
- Add backend for persistence
- Add support for multiple chats
- Improve accessibility (ARIA roles, keyboard navigation)