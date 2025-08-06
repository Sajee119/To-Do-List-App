# Modern Todo List Web Application

A fully functional, modern Todo List web application built with React. Features a beautiful responsive design, localStorage persistence, and optional Firebase integration.

![Todo App Screenshot](https://via.placeholder.com/800x400/667eea/ffffff?text=Modern+Todo+App)

## 🚀 Features

### Core Functionality
- ✅ **Add Tasks** - Create new tasks with optional descriptions
- ✏️ **Edit Tasks** - Click to edit task titles and descriptions inline
- 🗑️ **Delete Tasks** - Remove tasks with a single click
- ☑️ **Mark Complete/Incomplete** - Toggle task completion status
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- 🧹 **Clear Completed** - Remove all completed tasks at once

### Enhanced Features
- 🌙 **Dark/Light Mode** - Toggle between themes
- 💾 **localStorage Persistence** - Tasks persist between sessions
- 📱 **Responsive Design** - Works perfectly on all devices
- ♿ **Accessibility** - Full keyboard navigation and screen reader support
- 🔥 **Firebase Ready** - Optional Firebase integration for cloud sync

## 🛠️ Technologies Used

- **React** - Modern functional components with hooks
- **Lucide React** - Beautiful, consistent icons
- **CSS3** - Modern styling with gradients, animations, and responsive design
- **localStorage** - Local data persistence
- **Firebase** (optional) - Cloud storage and real-time sync

## 📦 Installation

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

## 🎯 Usage

### Basic Operations

1. **Adding Tasks**
   - Type in the input field and press Enter or click the + button
   - Click "Add Description" to include optional details

2. **Editing Tasks**
   - Click the edit icon (pencil) next to any task
   - Modify the title and/or description
   - Press Enter or click the checkmark to save
   - Press Escape or click X to cancel

3. **Managing Tasks**
   - Click the checkbox to mark tasks as complete/incomplete
   - Use filter buttons to view specific task types
   - Click "Clear Completed" to remove all finished tasks

4. **Theme Toggle**
   - Click the moon/sun icon in the header to switch themes

### Keyboard Shortcuts

- **Enter** - Save when editing, add task when typing
- **Escape** - Cancel editing
- **Tab** - Navigate between elements

## 🔧 Configuration

### localStorage (Default)
Tasks are automatically saved to localStorage. No configuration needed.

### Firebase Integration (Optional)

1. **Install Firebase**
   ```bash
   npm install firebase
   ```

2. **Configure Firebase**
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable Firestore Database
   - Get your configuration object

3. **Update Firebase Config**
   - Edit `src/utils/firebase.js`
   - Uncomment the Firebase code
   - Replace the config object with your Firebase settings

4. **Enable Firebase in App**
   - Edit `src/App.js`
   - Import and use the `useFirebase` hook instead of localStorage

## 📁 Project Structure

```
src/
├── components/
│   ├── AddTask.js          # Task input form
│   ├── FilterButtons.js    # Filter controls
│   ├── TodoItem.js         # Individual task component
│   └── TodoList.js         # Task list container
├── hooks/
│   └── useFirebase.js      # Firebase integration hook
├── utils/
│   └── firebase.js         # Firebase configuration
├── App.js                  # Main application component
├── App.css                 # Styles and themes
└── index.js               # App entry point
```

## 🎨 Customization

### Themes
The app includes light and dark themes. Customize colors in `App.css`:
- Update CSS custom properties for consistent theming
- Modify gradient colors for branding
- Adjust component shadows and borders

### Styling
- Modern CSS with Flexbox and Grid
- Smooth animations and transitions
- Responsive breakpoints for mobile devices
- Custom checkbox styling

## 🌟 Features in Detail

### Data Persistence
- **localStorage**: Automatic saving, works offline
- **Firebase**: Real-time sync across devices and browsers

### Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Optimized layouts for all screen sizes

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management

### Performance
- Optimized React rendering
- CSS transitions for smooth UX
- Minimal bundle size

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The built files in the `build` folder can be deployed to:
- Netlify
- Vercel
- Firebase Hosting
- GitHub Pages
- Any static file server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Issues & Support

If you encounter any issues or have questions:
1. Check the existing issues
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

## 🎯 Future Enhancements

- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Drag and drop reordering
- [ ] Bulk task operations
- [ ] Search functionality
- [ ] Import/Export tasks
- [ ] User authentication
- [ ] Collaborative task lists

---

Made with ❤️ using React and modern web technologies.
