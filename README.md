# EmployWise Frontend Assignment

A React application that integrates with the Reqres API for user management with authentication, CRUD operations, and pagination.
- **Live Demo**: https://employwise-frontend-2.netlify.app/
## Features

- **User Authentication**: Login with JWT token storage
- **User Management**:
  - View paginated list of users
  - Search and filter users
  - Edit user details
  - Delete users
- **Responsive Design**: Works on mobile and desktop
- **Error Handling**: Comprehensive validation and error messages
- **Session Persistence**: Maintains UI state despite API limitations

## Technologies Used

- React 18
- React Router 6
- Material-UI (MUI) 5
- Axios for API calls
- React Toastify for notifications
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher) or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Monuj123/employwise-frontend.git
   cd employwise-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the application**
   ```bash
   npm start
   # or
   yarn start
   ```

## Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   └── Login.jsx        # Login form component
│   ├── Users/
│   │   ├── UserList.jsx     # User list display
│   │   ├── UserCard.jsx     # Individual user card
│   │   └── EditUser.jsx     # User edit form
├── pages/
│   ├── LoginPage.jsx        # Login page
│   ├── UsersPage.jsx        # Main users page
├── services/
│   └── api.js              # API service layer
├── App.js                  # Main app component
├── index.js                # Entry point
└── README.md               # This file
```

## Assumptions and Considerations

1. **API Limitations**:
   - The Reqres API is a mock API and doesn't persist changes
   - Implemented client-side state management to simulate persistence
   - Changes will only persist during the current session

2. **Authentication**:
   - Uses hardcoded credentials from Reqres API:
     - Email: `eve.holt@reqres.in`
     - Password: `cityslicka`
   - JWT token is stored in localStorage

3. **Error Handling**:
   - Form validation for all inputs
   - Comprehensive API error handling
   - User-friendly error messages
   - Loading states during operations

4. **Testing Credentials**:
   ```
   Email: eve.holt@reqres.in
   Password: cityslicka
   ```

## Error Handling Implementation

The application includes multiple layers of error handling:

1. **Form Validation**:
   - Required field validation
   - Email format validation
   - Real-time error display

2. **API Error Handling**:
   - Network error detection
   - HTTP status code handling
   - Graceful fallbacks

3. **UI Feedback**:
   - Toast notifications for success/error
   - Loading indicators
   - Disabled buttons during operations

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (not recommended)

