# ResumeIQ

> **ResumeIQ** is an AI-powered interview preparation platform that analyzes your resume against a target job description to generate personalized interview insights, technical and behavioral questions, skill gap analysis, a preparation roadmap, and an AI-generated resume.

---
**Live Demo:** https://resume-iq-wheat-phi.vercel.app/

## Introduction

Preparing for technical interviews often requires candidates to manually compare their resume with job descriptions, identify missing skills, search for relevant interview questions, and create a study plan. This process is repetitive, time-consuming, and rarely personalized.

ResumeIQ simplifies this entire workflow by leveraging **Google Gemini AI** to provide a role-specific interview preparation experience. Users can upload their resume (or provide a self-description) along with a target job description, and the platform generates a comprehensive interview report tailored to their profile and the role they are applying for.

Whether you're applying for a Frontend Developer, Backend Developer, Full Stack Developer, or another software engineering position, ResumeIQ helps you understand your strengths, identify improvement areas, and prepare more efficiently.

---

## Problem Statement

Most interview preparation platforms provide generic interview questions and learning resources. They do not consider an individual's background or the specific requirements of the target role.

Candidates typically spend significant time:

- Reading and understanding lengthy job descriptions.
- Comparing required skills with their resume.
- Searching for relevant technical and behavioral interview questions.
- Identifying missing skills.
- Planning what to study before interviews.
- Updating their resume according to the target role.

This fragmented process often leads to inefficient preparation.

---

## Solution

ResumeIQ brings all these tasks together into a single AI-powered platform.

By analyzing the user's resume (or self-description) alongside the target job description, ResumeIQ generates a personalized interview preparation report that includes:

- Interview Match Score
- Technical Interview Questions
- Behavioral Interview Questions
- Skill Gap Analysis
- Personalized Preparation Roadmap
- AI-Generated Resume

This enables candidates to focus on the areas that matter most instead of spending hours preparing manually.

---

# Key Features

###  Authentication & Security

- Secure User Registration
- User Login & Logout
- JWT Authentication
- HTTP-Only Cookie Authentication
- Protected Routes
- User-Specific Resource Authorization

---

### Resume Analysis

- Upload Resume in PDF format
- Resume Text Extraction
- Self Description Support (without resume)

---

### AI Interview Report

Generate a personalized interview report containing:

- Match Score
- Technical Interview Questions
- Behavioral Interview Questions
- Interview Intentions
- Model Answers
- Skill Gap Analysis
- Personalized Preparation Roadmap

---

### AI Resume Generation

Generate and download an AI-enhanced resume tailored to the selected interview report.

---

### Interview History

- View previously generated reports
- Open reports anytime
- Download generated resumes

---

## Tech Stack

### Frontend

- React
- React Router
- Context API
- Axios
- SCSS
- React Toastify

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JSON Web Token (JWT)
- HTTP-Only Cookies

### AI Integration

- Google Gemini AI

---

# How to Use ResumeIQ

Using ResumeIQ is simple and requires only a few steps:

### 1. Create an Account

Register using your username, email, and password.

---

### 2. Login

Sign in securely to access your personalized dashboard.

---

### 3. Provide Job Information

Paste the complete job description of the position you are targeting.

---

### 4. Add Your Profile

Choose one of the following:

- Upload your Resume (PDF)
- Write a Self Description

---

### 5. Generate Interview Report

Click **Generate Interview Strategy**.

ResumeIQ uses AI to analyze your profile and generate a personalized interview report.

---

### 6. Review Your Report

The generated report includes:

- Match Score
- Technical Questions
- Behavioral Questions
- Skill Gap Analysis
- Personalized Preparation Roadmap

---

### 7. Download Your Resume

Generate and download an AI-enhanced resume based on your interview report.

---

### 8. Access Previous Reports

All interview reports are securely saved and can be accessed anytime from your dashboard.

---

#  Project Structure

```
ResumeIQ
│
├── Backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── validators
│   └── utils
│
├── Frontend
│   ├── components
│   ├── features
│   │   ├── auth
│   │   └── interview
│   ├── services
│   └── styles
│
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Vishnu-222/ResumeIQ.git
```

Move into the project directory

```bash
cd ResumeIQ
```

### Backend

```bash
cd Backend
npm install
npm run dev
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

#  Environment Variables

Create a `.env` file inside the Backend directory.

```env
PORT=

MONGO_URI=

JWT_SECRET=

GEMINI_API_KEY=

NODE_ENV=
```

# Author

**Vishnu Singh**

GitHub: https://github.com/Vishnu-222

---

## If you found this project helpful, consider giving it a star! ⭐
