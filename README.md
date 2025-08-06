# Todo App - React

A modern, fully functional To-Do List Web Application built with React. Features a beautiful responsive design with dark/light mode toggle and supports both localStorage and Firebase for data persistence.

![Todo App Screenshot](https://via.placeholder.com/800x600/667eea/ffffff?text=Todo+App)

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Create tasks with title and optional description
- ✏️ **Edit Tasks** - Click on any task to edit inline
- 🗑️ **Delete Tasks** - Remove tasks with trash icon
- ☑️ **Toggle Complete** - Mark tasks as complete/incomplete
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- 🧹 **Clear Completed** - Remove all completed tasks at once

### Advanced Features
- 🌙 **Dark/Light Mode** - Toggle between themes
- 💾 **Data Persistence** - Choose between localStorage or Firebase
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- ⚡ **Real-time Updates** - Live sync when using Firebase
- 🎨 **Modern UI** - Beautiful gradients and smooth animations
- ♿ **Accessibility** - Keyboard navigation and screen reader support

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Using localStorage (Default)
No additional setup required. Tasks are automatically saved to your browser's localStorage.

### Using Firebase (Optional)

1. **Create a Firebase project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database

2. **Get your Firebase configuration**
   - Go to Project Settings > General
   - Scroll down to "Your apps" and click the web icon
   - Copy the configuration object

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Firebase configuration:
   ```env
   REACT_APP_USE_FIREBASE=true
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
   REACT_APP_FIREBASE_APP_ID=1:123456789:web:abcdef123456
   ```

4. **Configure Firestore rules** (in Firebase Console)
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /todos/{document} {
         allow read, write: if true; // Adjust based on your security needs
       }
     }
   }
   ```

5. **Restart the development server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AddTodo.js      # Form to add new tasks
│   ├── FilterButtons.js # Filter controls
│   ├── TodoItem.js     # Individual task item
│   └── TodoList.js     # List of tasks
├── hooks/              # Custom React hooks
│   └── useTodos.js     # Main todos management hook
├── services/           # External services
│   ├── firebaseConfig.js # Firebase configuration
│   └── storageService.js # Storage abstraction layer
├── App.js              # Main application component
├── App.css             # Application styles
└── index.js            # Application entry point
```

## 🎨 Customization

### Themes
The app includes both light and dark themes. You can customize the colors by editing the CSS variables in `App.css`:

```css
/* Light theme colors */
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--background: rgba(255, 255, 255, 0.95);

/* Dark theme colors */
--dark-background: rgba(26, 26, 46, 0.95);
--dark-text: #e0e0e0;
```

### Storage Backend
Switch between localStorage and Firebase by setting the `REACT_APP_USE_FIREBASE` environment variable:
- `false` - Uses localStorage (default)
- `true` - Uses Firebase Firestore

## 📱 Responsive Design

The app is fully responsive and works on:
- 📱 **Mobile phones** (320px and up)
- 📱 **Tablets** (768px and up)  
- 💻 **Desktop** (1024px and up)

## 🔐 Security Considerations

When using Firebase:
- Configure proper Firestore security rules
- Consider adding user authentication
- Restrict API key usage in production
- Use environment variables for sensitive data

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
npx vercel --prod
```

### Netlify
```bash
npm run build
# Upload the build/ folder to Netlify
```

### Firebase Hosting
```bash
npm run build
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 🛠️ Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- Built with [Create React App](https://create-react-app.dev/)
- Firebase integration with [Firebase SDK](https://firebase.google.com/)

## 📞 Support

If you have any questions or run into issues, please:
1. Check the [Issues](../../issues) page
2. Create a new issue if your problem isn't already listed
3. Provide as much detail as possible including browser, OS, and steps to reproduce

---

Made with ❤️ using React
