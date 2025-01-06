# Forge

Forge is a fullstack password management application that allows users to securely store, manage, and retrieve their passwords online. The application is designed with an emphasis on security, user-friendliness, and scalability.

---

## Features

- **Secure Storage**: All passwords are encrypted using advanced cryptographic algorithms.
- **User Authentication**: Secure login and account management with JWT-based authentication.
- **Password Generator**: Built-in feature to generate strong and customizable passwords.
- **Organization Tools**: Group passwords by categories for easy management.
- **Responsive Design**: Fully functional on desktop and mobile devices.
- **Export & Import**: Easily backup and restore your passwords.
- **Two-Factor Authentication (2FA)**: Optional layer of security for user accounts.

---

## Technologies Used

### Frontend
- React.js with TypeScript
- TailwindCSS for styling
- Axios for API calls

### Backend
- Node.js with Express.js
- MongoDB for database management
- bcrypt.js for password hashing
- jsonwebtoken (JWT) for authentication

### DevOps
- Docker for containerization
- CI/CD pipeline with GitHub Actions
- Deployed on AWS (EC2 and S3)

---

## Installation and Setup

### Prerequisites
- Node.js (v16 or later)
- MongoDB instance (local or cloud)
- Docker (optional, for containerized deployment)

### Steps
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/forge.git
    cd forge
    ```
2. **Install dependencies**:
    ```bash
    cd frontend && npm install
    cd ../backend && npm install
    ```
3. **Setup environment variables**:
    Create `.env` files in both `frontend` and `backend` directories. Use the provided `.env.example` files as a template.

4. **Run the application locally**:
    - Start the backend server:
      ```bash
      cd backend && npm run dev
      ```
    - Start the frontend:
      ```bash
      cd frontend && npm start
      ```

5. **Access the application**:
    Open `http://localhost:3000` in your browser.

---

## Usage

1. Sign up for an account.
2. Log in and start adding your passwords.
3. Use the password generator to create secure passwords.
4. Organize your passwords into categories.
5. Enable 2FA for additional security.

---

## Roadmap

- [ ] Implement biometric authentication.
- [ ] Add sharing functionality for team accounts.
- [ ] Expand export/import options (CSV, JSON, etc.).
- [ ] Mobile app (iOS and Android).
- [ ] Advanced analytics on password strength and usage.

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/new-feature` or `fix/bug-fix`).
3. Commit your changes with descriptive messages.
4. Push to your branch and create a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For questions or suggestions, please contact:
- **Email**: prestigewebsolutions7@gmil.com
- **GitHub**: [Forge](https://github.com/t4victor/Forge)
