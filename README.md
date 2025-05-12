🔧 SkillStrap Login System — Developer Handoff
🎯 Project Overview
We’re building a dual-interface platform for Students and Startups/Businesses. Each user type logs in and accesses a distinct experience. The login page is the entry point.

Live Preview: https://preview--skillstrap-launchpad-ui.lovable.app

🧑‍💻 User Roles
1. Students
Register/login

Create a profile (name, skills, interests, resume, portfolio link)

Browse or get matched with startup opportunities (later stage)

Possibly message/interact with businesses

2. Startups/Businesses
Register/login

Create a company profile (company name, role, description)

Post opportunities (project/internship/gig descriptions)

View student profiles, possibly shortlist/contact

🔐 Authentication Flow
User Type Selection: Toggle or split between “Student” and “Startup” at login/register

Auth Method:

Email + password (baseline)

Google/LinkedIn OAuth preferred (optional for v1)

Post-Login Routing:

Student → /dashboard/student

Business → /dashboard/business
