# Rate & Review System

This project is a Rate & Review System built with a React frontend and an Express backend. It allows users to submit feedback, and administrators to manage and approve or reject feedback.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User feedback submission with rating and review.
- Admin login and dashboard for managing feedback.
- Average rating calculation.
- Responsive design with Tailwind CSS.

## Technologies Used

- **Frontend**: React, Tailwind CSS, Axios, React Router, React Toastify
- **Backend**: Express, MongoDB, Mongoose, bcrypt, JSON Web Token (JWT)
- **Other**: Vite, Helmet, dotenv, cookie-parser

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/rate-review-system.git
    cd rate-review-system
    ```

2. Install dependencies for the client:
    ```sh
    cd client
    npm install
    ```

3. Install dependencies for the server:
    ```sh
    cd ../server
    npm install
    ```

4. Set up environment variables:
    - Create a `.env` file in the `server` directory and add the following:
        ```
        VITE_API_URL=http://localhost:5000/api
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        ```

## Usage

1. Start the server:
    ```sh
    cd server
    npm start
    ```

2. Start the client:
    ```sh
    cd ../client
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:5173`.

## API Endpoints

### User Routes

- `POST /api/v1/feedback`: Submit feedback
- `GET /api/v1/feedback`: Get all approved feedback
- `GET /api/v1/average-rating`: Get average rating

### Admin Routes

- `POST /api/admin/login`: Admin login
- `GET /api/admin/all-feedback`: Get all feedback
- `POST /api/admin/feedback/:id/manpulate`: Approve or reject feedback

## Folder Structure

```
rate-review-system/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   └── package.json
└── server/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── app.js
    ├── server.js
    └── package.json
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.