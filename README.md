# inShortss 📱

A modern, swipe-based news application built with React Native and Expo, inspired by the popular InShorts app. Get your daily news in bite-sized, easy-to-consume cards with intuitive swipe gestures.

## ✨ Features

- **🔥 Trending News**: Stay updated with the latest trending stories
- **📂 Multiple Categories**: Browse news across different categories:
  - Politics
  - Sports  
  - Bollywood
  - Hollywood
  - Technology
- **👆 Swipe Navigation**: Intuitive card-based interface with swipe gestures
  - Swipe right to bookmark articles
  - Tap to read full article
- **🔖 Bookmarks**: Save articles for later reading
- **👤 User Authentication**: Secure login and registration system
- **📱 Cross-Platform**: Works on both iOS and Android
- **🎨 Modern UI**: Clean, modern interface with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React Native 0.79.3
- **Framework**: Expo ~53.0.11
- **Navigation**: React Navigation 6.x
- **Backend**: Firebase (Firestore Database)
- **UI Components**: 
  - React Native Deck Swiper
  - React Native Vector Icons
  - React Native Modal
  - React Native Reanimated
- **State Management**: React Component State
- **Date Handling**: Moment.js
- **Notifications**: Toastify React Native

## 📱 Screenshots

The app features a clean, card-based interface with:
- Horizontal category selection
- Swipeable news cards with images
- Bookmark functionality
- User profile management

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- Expo CLI (`npm install -g expo-cli`)
- Yarn package manager
- Firebase account for backend services

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd inshortss
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Firebase Configuration**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Firestore Database
   - Enable Authentication
   - Update the Firebase config in `src/home.js` with your credentials

4. **Start the development server**
   ```bash
   yarn start
   # or
   expo start
   ```

5. **Run on device/simulator**
   ```bash
   # For Android
   yarn android
   
   # For iOS
   yarn ios
   
   # For Web
   yarn web
   ```

## 📁 Project Structure

```
inshortss/
├── App.js                 # Main app component with navigation setup
├── Tabs.js               # Bottom tab navigation configuration
├── index.js              # Entry point
├── package.json          # Dependencies and scripts
├── app.json              # Expo configuration
├── assets/               # Images and static assets
│   ├── icon.png
│   ├── splash-icon.png
│   ├── share.png
│   └── ...
└── src/                  # Source code
    ├── home.js           # Main news feed with swiper
    ├── login.js          # User authentication
    ├── register.js       # User registration
    ├── bookmark.js       # Saved articles
    ├── settings.js       # App settings
    ├── edit-profile.js   # Profile management
    └── view-article.js   # Article detail view
```

## 🎯 Usage

### For Users

1. **Registration/Login**: Create an account or login with existing credentials
2. **Browse News**: Swipe through news cards in different categories
3. **Bookmark Articles**: Swipe right on any card to save it for later
4. **Read Full Articles**: Tap on any card to read the complete article
5. **Category Navigation**: Use the horizontal category bar to filter news
6. **Profile Management**: Access settings and edit your profile

### For Developers

#### Key Components

- **Home Component**: Main news feed with Firebase integration and swiper functionality
- **Authentication**: Login/Register components with Firebase Auth
- **Navigation**: Stack and Tab navigation setup
- **Bookmarks**: Article saving and retrieval system

#### Firebase Integration

The app uses Firebase Firestore for:
- Storing news articles
- Managing user bookmarks
- User authentication

#### Customization

You can easily customize:
- News categories in `src/home.js`
- UI colors and styles in component StyleSheets
- Firebase configuration for your own backend
- Add new features like push notifications, offline reading, etc.

## 🧪 Development

### Available Scripts

- `yarn start` - Start Expo development server
- `yarn android` - Run on Android device/emulator
- `yarn ios` - Run on iOS device/simulator  
- `yarn web` - Run in web browser

### Building for Production

```bash
# Build for Android
expo build:android

# Build for iOS
expo build:ios
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Known Issues

- Make sure to configure Firebase properly for the app to work
- Some features might require additional permissions on different platforms

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository.

---

**Built with ❤️ using React Native and Expo**