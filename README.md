# Feedback App – MERN Stack Based

## 1. Project Overview
The Feedback App allows students to submit their opinions, suggestions, or reviews through a simple interface. Each feedback entry includes:
- **Student Name**
- **Comment or Suggestion**
- **Rating** (1 to 5)

This project is divided into two main parts:
- **Frontend:** Built using modern UI technologies
- **Backend:** Powered by MongoDB, Express.js, and Node.js

## 2. Key Features
- Easy form for submitting feedback
- Table that displays all submitted feedback
- Rating system from 1 (Poor) to 5 (Excellent)
- Mobile-friendly design using responsive styling

## 3. How the App Works (Functionality Overview)
1. User opens the app in their browser
2. Fills out a form with their name, comment, and rating
3. Submits the form, which sends the feedback to the database
4. The app displays all submitted feedback in a structured table format

## 4. Backend API (Technical Flow)
The app uses two backend routes:
- `GET /api/feedback` → Fetches all feedback from the database
- `POST /api/feedback` → Adds a new feedback entry into the system

These operations allow the app to collect and display data in real-time.

## 5. Project Folder Structure (Explanation)
- **api** – Used to connect frontend with backend services
- **components** – Reusable visual parts like the feedback display table
- **pages** – Main interface of the app (feedback form + list)
- **App** – Entry point of the application
- **Main** – Initializes and runs the entire app

## 6. Technology Stack
- **Frontend:** React (with Vite for fast development), Bootstrap (for styling)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (to store feedback)
- **Other Tools:** Axios (for API requests), CORS & dotenv (for configuration)

## 7. Flowchart
```
[User]
  |
  | Fill in Feedback Form
  v
[Submit Button Clicked]
  |
  v
Send data to server (POST request)
  |
  v
Store feedback in MongoDB
  |
  v
Request updated feedback list (GET request)
  |
  v
Display all feedback in table format
```

## 8. Project Highlights (Non-Technical)
- Clean and user-friendly interface
- Organized structure for easy understanding
- Real-time feedback display
- Good use of modern tools and technologies
- Can be extended with login or filtering features in future

## 9. Suggestions for Future Improvements
- Add edit and delete feedback functionality
- Show average rating dynamically
- Export feedback data as a PDF or Excel file
- Integrate with email notifications for admin

---
**Prepared By:**
- Vaishnavi Nimbalkar


**Date:** 8 August 2025
