# Electronics Store Management System Requirements

## Project Overview

The Electronics Store Management System is a web-based application developed to support the management of electronic products through admin and user interfaces/dashbords. The purpose of the system is to let administrators  manage product details while allowing users to browse and search available electronic items through a simple and responsive design interface.

The application is being developed using React JS for the frontend user interface, Node.js and Express.js for backend structure, and MongoDB for database management.

---

# Functional Requirements

## User Authentication

- Users should be able to register a new account.
- Registered users should be able to log into the system securely.
- The system should validate login credentials using JWT authentication.
- Users should be able to logout from the application securely.

---

## Product Management

- Administrators should be able to add new electronic products into the system.
- Administrators should be able to update product details when required.
- Administrators should be able to delete products from the system.
- Users should be able to view the list of available products.
- Users should be able to search products using keywords.

---

## Dashboard and Access Control

- Administrators should have access to an admin dashboard for managing products and system activities.
- Standard users should have access to a user dashboard for browsing products.
- The system should restrict admin-only functions from unauthorised users.
- Role-based access control should be implemented within the application.

---

## Deployment and DevOps

- GitHub should be used for version control and source code management.
- The application should be deployed using AWS EC2 cloud services.
- PM2 should be used to manage and monitor the Node.js application process.
- GitHub Actions should be configured to support CI/CD automation.

---

# Non Functional Requirements

- The application should provide a responsive and user-friendly interface.
- The system should support secure user authentication.
- Input validation should be implemented for forms and user entries.
- The frontend and backend structure should remain organised and maintainable.
- The deployed application should be accessible through a public cloud environment.

---

# Technologies Used

- React JS
- Node.js
- Express.js
- MongoDB
- JSON Web Token (JWT)
- GitHub
- AWS EC2
- GitHub Actions
- CSS