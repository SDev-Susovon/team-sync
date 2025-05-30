# Employee Management System

A modern employee management system built with Next js, TypeScript, and shadcn components. Features Authenticate by clerk js,  Add employee and view into table, when add an employee form validation, and local data persistence implementaion and additionally email send through email js.

## Key Features
- Clerk Authentication
- Add new employees with validated form fields
- AG-Grid data table with sorting/filtering
- LocalStorage persistence
- Automated welcome emails (via EmailJS)
- UI with shadcn/ui components
- Type-safe with TypeScript


## Technologies Used
- Next 15
- TypeScript
- shadcn (Radix + Tailwind CSS)
- React Hook Form + Zod for validation
- AG-Grid for data tables
- EmailJS for email automation

--------------------------------------------------------------------------------------------------------------
### Chosen Method: LocalStorage
--------------------------------------------------------------------------------------------------------------
1. Implemented using localStorage API
2. Automatically persists employee data between sessions
3. Data is saved/loaded using JSON serialization

-------------------------------------------------------------------------------------------------------------
### Future Extensions
-------------------------------------------------------------------------------------------------------------
1. Backend Integration
2. Replace LocalStorage with REST API or Firebase
3. Add user authentication

-------------------------------------------------------------------------------------------------------------
## Setup Instructions

1.
```bash
git clone https://github.com/SDev-Susovon/team-sync.git
cd employee-management

2.
npm install

3.
create env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_dmFsdWVkLWNoaW1wLTQwLmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_yePtd8BY2RXJipiNGFNFOUo6cqH0hs1I97jacE2zs5

4.
npm run dev
