# ProPeak Platform Backend API Integration Specification

This developer guide documents the REST API endpoints and WebSocket event architectures required to back the ProPeak client application.

---

## 1. Base Configurations

- **Base URL**: `https://api.propeak.dev/api/v1`
- **Security Headers**: Standard JWT authorization header is expected for protected routes:
  ```http
  Authorization: Bearer <jwt_token>
  ```
- **Content Type**: `application/json`

---

## 2. Authentication Services

### Register Account
- **Endpoint**: `POST /auth/signup`
- **Request Body**:
  ```json
  {
    "name": "Ashok Kumar",
    "email": "ashok@propeak.dev",
    "password": "securepassword123",
    "role": "EMPLOYEE"
  }
  ```
- **Success Response (201 Created)**:
  ```json
  {
    "user": {
      "id": "usr-employee-1",
      "name": "Ashok Kumar",
      "email": "ashok@propeak.dev",
      "role": "EMPLOYEE",
      "headline": "Silver Talent",
      "skills": []
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

### User Login
- **Endpoint**: `POST /auth/login`
- **Request Body**:
  ```json
  {
    "email": "ashok@propeak.dev",
    "password": "securepassword123",
    "role": "EMPLOYEE"
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "user": {
      "id": "usr-employee-1",
      "name": "Ashok Kumar",
      "email": "ashok@propeak.dev",
      "role": "EMPLOYEE",
      "headline": "Gold Level Developer"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

### Password Recovery
- **Endpoint**: `POST /auth/forgot-password`
- **Request Body**:
  ```json
  {
    "email": "ashok@propeak.dev"
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Verification recovery link successfully dispatched to ashok@propeak.dev"
  }
  ```

---

## 3. Project Management API

### Get Available Listings
- **Endpoint**: `GET /projects`
- **Query Params**: `?status=available&skills=react`
- **Success Response (200 OK)**:
  ```json
  [
    {
      "id": "proj-1",
      "title": "AI Chatbot Integration for SaaS Platform",
      "description": "We require a developer to build and embed a custom LLM chat system...",
      "budget": 15000,
      "deadline": "2026-06-30",
      "skills": ["React", "TypeScript", "OpenAI API", "Tailwind CSS"],
      "experience": "Intermediate",
      "status": "available",
      "clientName": "Sarah Jenkins",
      "clientCompany": "Vertex Systems",
      "appliedCount": 8,
      "milestones": [
        { "id": "m1", "title": "System Architecture Design", "budget": 5000, "status": "pending" }
      ]
    }
  ]
  ```

### Create Project (Client only)
- **Endpoint**: `POST /projects`
- **Request Body**:
  ```json
  {
    "title": "AI Chatbot Integration for SaaS Platform",
    "description": "We require a developer to build and embed...",
    "budget": 15000,
    "deadline": "2026-06-30",
    "skills": ["React", "TypeScript", "OpenAI API"],
    "experience": "Intermediate"
  }
  ```
- **Success Response (201 Created)**:
  ```json
  {
    "id": "proj-1",
    "title": "AI Chatbot Integration for SaaS Platform",
    "status": "available",
    "milestones": [
      { "id": "m1", "title": "Milestone 1: Prototype and Core Deliverables", "budget": 6000, "status": "pending" },
      { "id": "m2", "title": "Milestone 2: Polish and Handover", "budget": 9000, "status": "pending" }
    ]
  }
  ```

### Submit Project Application (Employee only)
- **Endpoint**: `POST /projects/:id/apply`
- **Request Body**:
  ```json
  {
    "proposal": "I have built similar streaming chat models using SSE and React..."
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "applicationId": "app-101"
  }
  ```

---

## 4. Milestone Work Submission & Payments

### Submit Milestone Deliverables
- **Endpoint**: `POST /projects/:projectId/milestones/:milestoneId/submit`
- **Request Body**:
  ```json
  {
    "attachments": ["https://s3.amazonaws.com/propeak/deliverable_1.zip"],
    "submissionNotes": "The core frontend component matches the styling system perfectly."
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "milestoneId": "m1",
    "status": "submitted"
  }
  ```

### Approve Milestone Deliverable (Client & Admin only)
- **Endpoint**: `POST /projects/:projectId/milestones/:milestoneId/approve`
- **Success Response (200 OK)**:
  ```json
  {
    "milestoneId": "m1",
    "status": "approved",
    "payoutReleased": true,
    "transactionId": "tx-release-2910"
  }
  ```

---

## 5. Real-Time Chat Gateway (WebSockets)

### WebSocket Connection
- **Socket namespace**: `/chat`
- **Handshake auth**: `{ token: "Bearer jwt..." }`

### Outgoing Message event
- **Event**: `sendMessage`
- **Payload**:
  ```json
  {
    "recipientId": "usr-client-1",
    "text": "The custom styling config file is written.",
    "attachment": null
  }
  ```

### Incoming Message event
- **Event**: `messageReceived`
- **Payload**:
  ```json
  {
    "id": "msg-1290",
    "senderId": "usr-client-1",
    "senderName": "Sarah Jenkins",
    "text": "Excellent! That was super fast.",
    "timestamp": "2026-06-09T10:32:00Z",
    "status": "delivered"
  }
  ```

---

## 6. disputes, reviews & platform notifications

### Register Dispute Resolution
- **Endpoint**: `POST /disputes/:disputeId/resolve`
- **Request Body**:
  ```json
  {
    "action": "RELEASE_TO_EMPLOYEE" // or REFUND_CLIENT
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "disputeId": "DIS-901",
    "status": "resolved"
  }
  ```
