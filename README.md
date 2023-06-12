# StackBug

StackBug is a question-and-answer platform inspired by Stack Overflow. It allows users to create accounts, ask questions, provide answers, and interact with a community of developers. This project is built using Angular on the frontend, Node.js and Express on the backend, and an MSSQL database for data storage.

## Features

- User Registration: Users can create new accounts with a username, email, and password.
- Authentication and Authorization: Users can log in with their credentials and access their account. The admin has additional privileges to manage users and projects.
- Ask Questions: Users can post questions to the community and receive answers from other users.
- Answer Questions: Users can provide answers to questions posted by other users.
- Update Questions: Users can edit and update their own questions.
- Delete User or Project: The admin has the authority to delete user accounts or entire projects if necessary.

## Technologies Used

- Angular: A frontend framework for building dynamic single-page applications.
- Node.js: A runtime environment for executing JavaScript code on the server-side.
- Express: A web application framework for Node.js, used for building APIs and handling HTTP requests.
- MSSQL: A relational database management system for storing and managing data.

## Prerequisites

Make sure you have the following software installed on your machine:

- Node.js: [Download Node.js](https://nodejs.org/en/download/)
- Angular CLI: Install globally using npm with the command `npm install -g @angular/cli`

## Getting Started

Follow these steps to get the StackBug project up and running on your local machine:

1. Clone the repository:

```shell
git clone https://github.com/pochii-cloud/stackbug.git
cd stackbug
```

2. Install the dependencies for the frontend and backend:

```shell
cd frontend
npm install

cd ../backend
npm install
```

3. Set up the database:
   - Create a new MSSQL database for StackBug.
   - Rename the `.env.example` file in the `backend` directory to `.env` and update the database connection details.

4. Run the migrations to set up the database schema:

```shell
cd backend
npx knex migrate:latest
```

5. Start the backend server:

```shell
npm run dev
```

6. In a new terminal window, start the frontend development server:

```shell
cd ../frontend
ng serve
```

7. Open your browser and visit `http://localhost:4200` to access the StackBug application.

## Project Structure

- `frontend`: Contains the Angular frontend code.
- `backend`: Contains the Node.js and Express backend code.
- `backend/db`: Contains database migration files.
- `backend/routes`: Contains API routes for user, question, and answer operations.
- `backend/controllers`: Contains the logic for handling API requests and interacting with the database.
- `backend/middleware`: Contains middleware functions for authentication and authorization.
- `backend/models`: Contains the database models using Knex.js.

## Contributing

Contributions to StackBug are welcome! If you find a bug or have an idea for an enhancement, please open an issue or submit a pull request. Make sure to follow the existing coding style and guidelines.

## License

StackBug is released under the [MIT License](LICENSE).

## Acknowledgements

StackBug is built upon the knowledge and inspiration gained from Stack Overflow, a popular Q&A platform for developers. We express our gratitude to the Stack Overflow community for their valuable contributions.

Special thanks to the following open-source projects that were used in the development of StackBug:

- [Angular](https://angular.io/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MSSQL](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
