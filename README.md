# Keyora Auth Service

Authentication-as-a-Service platform built with Node.js, Express.js, MongoDB, JWT, and Nodemailer.

## Features

* User Registration
* Secure Login
* Password Hashing with bcrypt
* JWT Authentication
* Refresh Token System
* Logout Functionality
* Forgot Password
* Reset Password
* Email Verification
* Protected Routes
* Role-Based Access Control (Admin/User)
* MongoDB Database Integration

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* bcrypt
* Nodemailer

## Project Structure

```
config/
middleware/
models/
routes/
utils/

server.js
package.json
```

## API Endpoints

### Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |
| POST   | /api/auth/logout   |
| POST   | /api/auth/refresh  |

### Password Management

| Method | Endpoint                        |
| ------ | ------------------------------- |
| POST   | /api/auth/forgot-password       |
| POST   | /api/auth/reset-password/:token |

### Email Verification

| Method | Endpoint                      |
| ------ | ----------------------------- |
| GET    | /api/auth/verify-email/:token |

### User Routes

| Method | Endpoint     |
| ------ | ------------ |
| GET    | /api/auth/me |

### Admin Routes

| Method | Endpoint                  |
| ------ | ------------------------- |
| GET    | /api/auth/admin/dashboard |

## Environment Variables

Create a `.env` file:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
REFRESH_SECRET=your_refresh_secret

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

## Installation

```bash
git clone <repository-url>

npm install

npm start
```

## Future Improvements

* Google OAuth
* API Keys
* Rate Limiting
* Swagger Documentation
* Audit Logs
* Multi-Tenant Support

## Author

Ujjwal Nishad
B.Tech CSE Student