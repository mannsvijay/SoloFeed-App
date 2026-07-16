# SoloFeed

SoloFeed is a modern blogging and note-taking web app built with React and Appwrite. It gives you a clean space to write, save, and organize your thoughts in a polished and simple experience.

## What this project is

SoloFeed is a full-stack web application that combines a user-friendly frontend with backend services for authentication and data storage. In simple terms, it is a place where you can create posts, manage your content, and keep your ideas in one organized location.

## What it does

This app helps you:

- Create and publish blog-style posts or notes
- Write rich content using a modern text editor
- Sign up and log in securely
- Save and manage your content in the cloud
- Navigate through the app smoothly with a responsive interface

## Who it is for

SoloFeed is great for:

- Writers who want a lightweight blogging space
- Students or professionals taking notes
- Anyone who wants a simple personal publishing platform
- Developers who want to learn a React + Appwrite project structure

## Main features

- Rich text editing with TinyMCE
- Secure authentication with Appwrite
- Clean and responsive UI
- State management with Redux Toolkit
- Fast development workflow with Vite
- Client-side navigation with React Router

## How it works

1. A user signs in or creates an account.
2. They write a new post or note using the editor.
3. The app stores that content through Appwrite.
4. The user can view, edit, or manage their saved content from the app.

## Tech stack

- Frontend: React and Vite
- State management: Redux Toolkit
- Routing: React Router DOM
- Backend and database: Appwrite
- Rich text editor: TinyMCE
- Form handling: React Hook Form
- Code quality: ESLint

## Prerequisites

Before running the project, make sure you have:

- Node.js 16 or higher
- npm or yarn
- An Appwrite account and project

## Installation

1. Clone the repository
2. Go into the SoloFeed folder
3. Install dependencies with npm install
4. Create a .env.local file with your Appwrite credentials
5. Start the app with npm run dev

Example environment variables:

```env
VITE_APPWRITE_URL=https://your-appwrite-instance.com/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_API_KEY=your_api_key
```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

---

## 📦 Available Scripts

| Command | Description |
|---------|------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint to check code quality |

---

## 📁 Project Structure

```
SoloFeed/
├── src/
│   ├── appwrite/           # Appwrite configuration & auth
│   │   ├── auth.js        # Authentication logic
│   │   └── config.js      # Appwrite setup
│   ├── store/             # Redux store configuration
│   │   └── store.js       # Store setup
│   ├── conf/              # App configuration
│   │   └── conf.js        # Config constants
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # React entry point
│   ├── App.css            # Global styles
│   └── index.css          # Base styles
├── public/                # Static assets
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── index.html             # HTML template
```

---

## 🔧 Configuration

### Appwrite Setup

1. Create an Appwrite account at [appwrite.io](https://appwrite.io)
2. Create a new project
3. Set up authentication methods (Email, OAuth, etc.)
4. Copy your project credentials to `.env.local`

### TinyMCE Configuration

TinyMCE is configured for rich text editing. Customize the editor settings in your components as needed.

---

## 🎯 Getting Started

1. **Create an account** - Sign up using the authentication system
2. **Create a post** - Click "New Post" and start writing with the rich text editor
3. **Save & Publish** - Save your work or publish to share with others
4. **Manage Posts** - View, edit, or delete your posts from your dashboard

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code passes ESLint checks:
```bash
npm run lint
```

---

## 📝 License

This project is licensed under the MIT License.

Made with love by Manan Vijay.