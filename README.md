# Doctor Appointment Booking System (MERN Stack)

This project is a comprehensive doctor appointment booking system built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes separate front-end, back-end, and dashboard components for a complete user experience.

## Features

* **Patient Features (Frontend):**
    * User authentication (registration and login).
    * Search for doctors by specialization, location, and name.
    * View doctor profiles and availability.
    * Book appointments online.
    * View and manage appointment history.
    * User profile management.
* **Doctor Features (Dashboard):**
    * Doctor authentication (login).
    * Manage availability and schedules.
    * View and manage scheduled appointments.
    * Update profile information.
* **Admin Features (Dashboard):**
    * User management (CRUD operations).
    * Doctor Management (CRUD operations).
    * Appointment management (view, edit, delete appointments).
* **Backend (API):**
    * Robust RESTful API for data management.
    * Secure authentication using JWT.
    * Database interactions with MongoDB.

## Technologies Used

* **Frontend (React.js):**
    * React.js
    * React Router
    * Axios
    * CSS/Material UI/Tailwind CSS
* **Backend (Node.js/Express.js):**
    * Node.js
    * Express.js
    * MongoDB (Mongoose)
    * JWT (JSON Web Tokens)
    * Bcrypt
    * Cors
* **Dashboard (React.js):**
    * React.js
    * React Router
    * Axios
    * A UI Library (e.g., Ant Design, Material UI)
* **Database:**
    * MongoDB

## Project Structure

doctor-appointment-booking/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── ...
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── ...
├── dashboard/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── ...
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── ...
├── .gitignore
├── README.md
└── package-lock.json (or yarn.lock)

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone <## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone <## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Backend Setup:**

    * Navigate to the `backend` directory: `cd backend`
    * Install dependencies: `npm install`
    * Create a `.env` file with your MongoDB URI and JWT secret.
        ```
        MONGODB_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        ```
    * Start the server: `npm run dev`

3.  **Frontend Setup:**

    * Navigate to the `frontend` directory: `cd ../frontend`
    * Install dependencies: `npm install`
    * Create a `.env` file with your backend api url.
        ```
        REACT_APP_API_URL=http://localhost:5000/api
        ```
    * Start the development server: `npm start`

4.  **Dashboard Setup:**

    * Navigate to the `dashboard` directory: `cd ../dashboard`
    * Install dependencies: `npm install`
    * Create a `.env` file with your backend api url.
        ```
        REACT_APP_API_URL=http://localhost:5000/api
        ```
    * Start the development server: `npm start`

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## License

[MIT License](LICENSE) (or any other license you prefer)>
    ```

2.  **Backend Setup:**

    * Navigate to the `backend` directory: `cd backend`
    * Install dependencies: `npm install`
    * Create a `.env` file with your MongoDB URI and JWT secret.
        ```
        MONGODB_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        ```
    * Start the server: `npm run dev`

3.  **Frontend Setup:**

    * Navigate to the `frontend` directory: `cd ../frontend`
    * Install dependencies: `npm install`
    * Create a `.env` file with your backend api url.
        ```
        REACT_APP_API_URL=http://localhost:5000/api
        ```
    * Start the development server: `npm start`

4.  **Dashboard Setup:**

    * Navigate to the `dashboard` directory: `cd ../dashboard`
    * Install dependencies: `npm install`
    * Create a `.env` file with your backend api url.
        ```
        REACT_APP_API_URL=http://localhost:5000/api
        ```
    * Start the development server: `npm start`

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## License

[MIT License](LICENSE)>
    ```

2.  **Backend Setup:**

    * Navigate to the `backend` directory: `cd backend`
    * Install dependencies: `npm install`
    * Create a `.env` file with your MongoDB URI and JWT secret.
        ```
        MONGODB_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        ```
    * Start the server: `npm run dev`

3.  **Frontend Setup:**

    * Navigate to the `frontend` directory: `cd ../frontend`
    * Install dependencies: `npm install`
    * Create a `.env` file with your backend api url.
        ```
        REACT_APP_API_URL=http://localhost:5000/api
        ```
    * Start the development server: `npm start`

4.  **Dashboard Setup:**

    * Navigate to the `dashboard` directory: `cd ../dashboard`
    * Install dependencies: `npm install`
    * Create a `.env` file with your backend api url.
        ```
        REACT_APP_API_URL=http://localhost:5000/api
        ```
    * Start the development server: `npm start`

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## License

[MIT License](LICENSE)
