# Fullstack Todo App

A full-stack todo application built with React and Node.js.  
The app allows creating and managing posts organized in groups, with features like search and sorting.

---

## Features

- Full CRUD for posts: create, read, update, and delete  
- Search and sort posts  
- Create and list groups  
- Posts are managed inside groups  

---

## Tech Stack

- Frontend: React  
- Backend: Node.js (custom framework folder for server logic)  
- Database: SQLite (file stored in `server/db/testdb.db`)  

---

## Project Structure

root/
├── client/ # React frontend
│ ├── src/ # React components and styles
│ │ ├── components/UI # Post components like PostEdit, PostForm, etc.
│ │ ├── styles/ # CSS files and fonts
│ ├── package.json
│ └── README.md
│
├── server/ # Node.js backend
│ ├── db/ # SQLite database file
│ ├── framework/ # server app logic, routing, middleware
│ ├── src/ # backend source files (db.js, index.js)
│ ├── package.json
│
├── .gitignore
└── README.md

---

## Getting Started

1. Clone the repo  
2. Install dependencies separately in `client/` and `server/` folders:  
   ```bash
   cd client && npm install
   cd ../server && npm install
3. Start backend server: node server/index.js
4. npm start --prefix client

The SQLite database is stored at server/db/testdb.db and is used automatically.

## Future Plans

- Add CRUD for groups

- Enhance UI styling

- Add authentication

- Improve search and filtering options

- Adding a loading indicator

- Adding error handling

## Notes

- This project focuses on core functionality and clean architecture

- UI styling is minimal, prioritizing features

- Backend uses custom middleware and routing setup