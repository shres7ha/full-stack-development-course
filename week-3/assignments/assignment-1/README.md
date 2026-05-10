# Digital Clock

A minimalist digital clock application for the modern web.

## 📝 Project Overview

**Digital Clock** is a real time clock application built using React.

## 🚀 Features

- **Real-Time State Synchronization:** Uses React's `useState` hook to maintain a live `Date` object, ensuring the UI stays perfectly in sync with the system clock.
- **Precision Interval Engine:** Implements a setInterval loop within `useEffect` that triggers a re-render exactly every 1,000 milliseconds for a smooth ticking experience.
- **Memory-Safe Cleanup:** Features a dedicated cleanup function that invokes `clearInterval` which prevents memory leaks.

## 🏃 Run Locally

1. **Clone:**
   git clone https://github.com/shres7ha/full-stack-development-course.git

2. **Navigate:**
   Go to the assignment-1 folder located inside `full-stack-development-course/week-3/assignments`

3. **Install Dependencies:**
   - Ensure you have Node.js installed.
   - Open the folder in an IDE.
   - Run the command: `npm install`

4. **Run:**
   - Run the command: `npm run dev`
   - Open the link shown on your terminal in any modern browser (e.g., `http://localhost:5174/`).
