# Meeting Basum

A multi-route dashboard built with React Router.

## 📝 Project Overview

**Meeting Basum** is a multi-route dashboard built using React Router that demonstrates client-side routing, including nested routes, layout shells and dynamic URL patterns.

## 🚀 Features

- **App-Shell Architecture:** Utilizes a persistent App Sheel component containing the Sidebar, Header, and Footer, with an `<Outlet/>` for dynamic content rendering.
- **Active Navigation:** The Sidebar implements `<NavLink>` for automatic "active" state styling across all primary routes.
- **Dynamic Meeting Routing:** Uses `useNavigate` to programmatically route users from the dashboard to specific meeting rooms, where useParams captures the unique meetingId.
- **Nested Sub-Routes:** The Meeting Detail view features its own sub-navigation (Details vs. Participants) using relative links and a nested `<Outlet/>`.
- **Search Parameter Management:** The Calendar view supports stateful URL filtering (e.g., ?view=month) managed via the `useSearchParams` hook.

## 🛣️ Routes

-**Path**: `/` -**Page**: Dashboard -**Hook Used**: `useNavigate` -**Description**: Renders quick-action cards and upcoming meetings.

-**Path**: `/meetings/:meetingId` -**Page**: Meetings -**Hook Used**: `useParams, Outlet` -**Description**: Parent route for specific meetings using dynamic IDs. Can be visited by clicking join button on upcoming meetings section of dashboard.

-**Path**: `/details` -**Page**: Details -**Description**: Nested route inside Meetings for showing details.

-**Path**: `/participants` -**Page**: Participants -**Hook Used**: `useParams, Outlet` -**Description**: Nested route inside Meetings for showing participants.

-**Path**: `/new-meeting` -**Page**: NewMeeting -**Description**: Interface to start a new meeting session.

-**Path**: `/calender` -**Page**: Calendar -**Hook Used**: `useSearchParams` -**Description**: Features month/week view switching via URL parameters.

-**Path**: `*` -**Page**: NotFound -**Description**: Catch-all route for invalid paths and includes a link back home.

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
