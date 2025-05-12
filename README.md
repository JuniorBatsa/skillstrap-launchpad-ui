# 🔧 SkillStrap Login System

## 🎯 Project Overview

SkillStrap is a dual-interface platform for **Students** and **Startups/Businesses**. Each user type logs in and is routed to a distinct dashboard experience. This project includes the login and authentication system as well as basic role-based routing.

**Live Preview:** [SkillStrap UI Preview](https://preview--skillstrap-launchpad-ui.lovable.app)

---

## 🧑‍💻 User Roles

### 1. Students
- Register/Login  
- Create a profile (name, skills, interests, resume, portfolio link)  
- Browse or get matched with startup opportunities *(future feature)*  
- Possibly message/interact with businesses *(future feature)*  

### 2. Startups/Businesses
- Register/Login  
- Create a company profile (company name, role, description)  
- Post opportunities (projects, internships, gigs)  
- View student profiles, possibly shortlist/contact *(future feature)*

---

## 🔐 Authentication Flow

### User Type Selection
- Provide a toggle or UI split for selecting **Student** or **Startup** at login/register.

### Auth Method
- Email + Password (required)  
- Google/LinkedIn OAuth (preferred for future, optional in v1)

### Post-Login Routing
- Students → `/dashboard/student`  
- Businesses → `/dashboard/business`

---

## 🛠 Tech Notes

- Role-based authentication and routing must be implemented.  
- UI/UX should follow the styling and layout from the preview link.  
- Mobile responsiveness is required.

---

## 📈 Stretch Features (Future Implementation)
- Admin dashboard  
- Messaging between students and businesses  
- Multi-user company accounts  
- Analytics and notifications systems
