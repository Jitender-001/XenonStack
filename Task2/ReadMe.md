# Education Website - User Registration Form

Welcome to the Education Website project! This project is a simple website designed to collect user information (email and password) and store it in a MySQL database. This README.md file provides essential information about the project, its structure, and how to set it up.

## Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Database Setup](#database-setup)
- [Usage](#usage)

## Project Overview
This project is a basic educational website that provides a user registration form. Users can register by providing their email and password, and this information is stored in a MySQL database. The project uses HTML for the user interface, CSS for styling, and JavaScript to handle form submission and database interactions.

## Prerequisites
Before you get started with this project, make sure you have the following prerequisites installed on your system:
- Web browser
- MySQL database server
- A code editor (e.g., Visual Studio Code)

## Getting Started
1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Jitender-001/XenonStack/tree/main/Task2
   ```

2. Open the project folder in your code editor.

3. Configure the database settings:
   - Create a MySQL database for this project.
   - Update the `database.js` file with your database configuration. Provide the host, user, password, and database name.

4. Open the `index.html` file in your web browser to access the registration form.

## Project Structure
The project directory is organized as follows:

```
education-website/
├── index.html
├── styles/
│   └── style.css
├── scripts/
│   └── script.js
├── config.js
└── README.md
```

- `index.html`: The HTML file that contains the user registration form.
- `styles/style.css`: The CSS file for styling the registration form.
- `database.js`: The JavaScript file for handling form submission and interacting with the database.

## Database Setup
1. Create a MySQL database for the project.
2. Update the `database.js` file with your database configuration. Example:

   ```javascript
   module.exports = {
       host: 'localhost',
       user: 'yourusername',
       password: 'yourpassword',
       database: 'education_website_db'
   };
   ```

3. Run the SQL script provided in the `database.sql` file to create the necessary table for storing user information.

## Usage
1. Open `index.html` in your web browser.
2. Fill in the registration form with your email and password.
3. Click the "Register" button to submit the form.
4. The data will be stored in the MySQL database.

