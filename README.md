# SoloFeed

A modern, feature-rich blogging and note-taking platform built with React and Appwrite. Create, edit, and share your thoughts with a beautiful, intuitive interface powered by rich text editing capabilities.

---

## ✨ Features

- **Rich Text Editor** - Write beautiful content with TinyMCE integration
- **User Authentication** - Secure login and registration with Appwrite
- **State Management** - Efficient state handling with Redux Toolkit
- **Responsive Design** - Optimized for desktop and mobile devices
- **Form Handling** - Smooth form validation with React Hook Form
- **Client-Side Routing** - Fast navigation with React Router
- **Modern Build Pipeline** - Lightning-fast development with Vite

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 19, Vite |
| **State Management** | Redux Toolkit, React Redux |
| **Routing** | React Router DOM v7 |
| **Backend/Database** | Appwrite |
| **Rich Text Editor** | TinyMCE |
| **Form Handling** | React Hook Form |
| **HTML Parsing** | html-react-parser |
| **Code Quality** | ESLint |

---

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Appwrite Account** (for backend services)

---

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd note-blog-app
   ```

2. **Navigate to the project directory**
   ```bash
   cd SoloFeed
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env.local` file in the `SoloFeed` directory:
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

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 💬 Support

For issues, questions, or feedback, please open an issue on GitHub or contact the maintainers.

---

## 🔗 Useful Links

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Redux Documentation](https://redux.js.org)
- [TinyMCE Documentation](https://www.tiny.cloud/docs)

---

**Made with ❤️ by Manan Vijay**