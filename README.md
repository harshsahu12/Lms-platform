# LearnHub - Learning Management System (LMS) Platform

### LearnHub is an innovative Learning Management System that empowers both students and teachers. It allows students to explore, purchase, and learn from a variety of courses, while teachers can create and manage their courses seamlessly. With robust features and a user-friendly interface, LearnHub is designed to enhance the online learning experience.

## Features

   1. Authentication and Authorization
       Secure user authentication powered by Clerk for a seamless login and signup experience.
       Role-based authorization to distinguish between students, teachers, and administrators.
   2. Admin Protected Routes for Teachers
       Teachers have access to protected routes for managing and creating courses.
       Ensures a secure and controlled environment for course creation and administration.
   3. Stripe Payment Integration
       Secure and convenient Stripe payment integration for students to purchase courses.
       Facilitates easy transactions, providing a smooth payment experience.
   4. Sorting with Categories
       Courses are intelligently categorized for easy navigation.
       Users can sort and filter courses based on categories, enhancing the search experience.
   5. Teacher Analytics
       In-depth analytics for teachers to monitor the performance of their courses.
       Insights include sales data, student engagement, and other key metrics for informed decision-making.
   6. User Interface
       A clean and intuitive user interface for a pleasant learning experience.
       Responsive design for seamless accessibility across various devices.

## Technologies Used

   - Next.js: A React framework for building robust and efficient web applications.
   - MySQL: A reliable and scalable relational database management system.
   - Prisma: Modern database toolkit for Node.js and TypeScript.
   - Tailwind CSS: A utility-first CSS framework for building modern and responsive designs.
   - Clerk: Authentication and authorization solution for Next.js applications.
   - Stripe: Payment processing platform for secure and smooth transactions.

## Getting Started
To run LearnHub locally, follow these steps:

## Clone the repository:

    git clone https://github.com/your-username/learnhub.git

## Install dependencies:

    cd learnhub

    npm install
    
## Set up environment variables:

  - Create a .env file and add necessary environment variables, including Stripe API keys and database connection details.
  
## Run the application:

    ```bash
    npm run dev
    
  - Visit http://localhost:3000 in your browser to explore LearnHub locally.

## Contributions

   - Contributions are welcome! If you have any suggestions, find a bug, or want to add new features, please create an issue or submit a pull request.
