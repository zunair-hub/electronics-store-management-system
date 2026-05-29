# Electronics Store Management System

## Project Overview

The Electronics Store Management System is a web-based application developed to manage electronic products through separate administrator and user interfaces. The application provides user authentication, role-based access control, product management, product search functionality, cloud database integration, and automated deployment capabilities.

The project was developed as part of IFQ636 Software Lifecycle Management and demonstrates the application of software design, Agile project management, cloud deployment, and CI/CD practices.

---

## Features

### User Features

* User registration
* User login and logout
* View available products
* Search products
* User dashboard access

### Administrator Features

* Administrator login
* Add products
* Edit products
* Delete products
* View products
* Search products
* Admin dashboard access
* Role-based access control

### Deployment Features

* AWS EC2 deployment
* MongoDB Atlas integration
* GitHub Actions CI/CD pipeline
* Self-hosted GitHub Runner
* PM2 process management
* Nginx reverse proxy configuration

---

## Technology Stack

### Frontend

* React JS
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* Mongoose

### Database

* MongoDB Atlas

### Deployment & DevOps

* AWS EC2 (Ubuntu)
* GitHub Actions
* Self-hosted GitHub Runner
* PM2
* Nginx

---

## Project Structure

```text
electronics-store-management-system

├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── styles
│   └── package.json
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── .github
│   └── workflows
│       └── deploy.yml
│
└── README.md
```

## Installation Guide

### Clone Repository

```bash
git clone https://github.com/zunair-hub/electronics-store-management-system.git

cd electronics-store-management-system
```

### Backend Setup

```bash
cd backend

npm install
```

### Frontend Setup

```bash
cd ../frontend

npm install
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5001

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_jwt_secret
```

Replace the values above with your own MongoDB Atlas connection string and JWT secret key.

---

## Running the Application

### Start Backend

```bash
cd backend

npm start
```

Backend runs on:

```text
http://localhost:5001
```

### Start Frontend

```bash
cd frontend

npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## Application Access

The application is deployed using an AWS EC2 public IP address.

Current deployment URL:

```text
http://13.236.117.26
```

The EC2 instance used for this project is hosted within the university AWS environment. If the instance is stopped or restarted, AWS may assign a new public IP address.

If a new public IP is assigned, update the frontend API configuration file:

```text
frontend/src/services/api.js
```

Example:

```javascript
import axios from "axios";

const API = axios.create({
  baseURL: "http://<NEW_PUBLIC_IP>:5001/api",
});

export default API;
```

After updating the IP address, commit and push the changes to GitHub. The GitHub Actions workflow will automatically redeploy the application.

---

## Deployment Architecture

The deployment environment consists of:

* AWS EC2 Ubuntu Server
* MongoDB Atlas Database
* GitHub Repository
* GitHub Actions CI/CD Workflow
* Self-hosted GitHub Runner
* PM2 Process Manager
* Nginx Reverse Proxy

Deployment workflow:

1. Developer pushes code to GitHub.
2. GitHub Actions workflow is triggered.
3. Self-hosted runner executes deployment tasks.
4. Application files are updated on AWS EC2.
5. PM2 restarts frontend and backend services.
6. Updated application becomes available through the EC2 public IP.

---

## Test Accounts

### Administrator Account

Email: [admin@test.com](mailto:admin@test.com)

Password: admin123

### Standard User Account

Email: [user@test.com](mailto:user@test.com)

Password: user123

---

## Testing Performed

The following functionality was tested:

* User registration
* User login
* User logout
* JWT authentication
* Role-based access control
* Product creation
* Product update
* Product deletion
* Product retrieval
* Product search
* Dashboard access
* Database connectivity
* Cloud deployment
* GitHub Actions workflow execution
* CI/CD deployment automation

---

## Software Design and Project Management

The project was designed using Draw.io and managed using JIRA.

Artifacts created include:

* Requirement Diagram
* Use Case Diagram
* Activity Diagram
* Sequence Diagram
* Block Definition Diagram
* Internal Block Diagram
* Package Diagram
* Parametric Diagram
* State Machine Diagram

Agile project management was implemented through:

* Epics
* User Stories
* Subtasks
* Sprint Planning
* Sprint Tracking

---

## Repository Information

GitHub Repository:

https://github.com/zunair-hub/electronics-store-management-system

---

## Author

Zunair Zafar
n12904210@qut.edu.au
zunairmuhammad.zafar@connect.qut.edu.au

IFQ636 Software Lifecycle Management

Queensland University of Technology (QUT), 2026
